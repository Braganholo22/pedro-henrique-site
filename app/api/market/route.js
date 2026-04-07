export const dynamic = 'force-dynamic';

function formatNumberBR(value, options = {}) {
  return new Intl.NumberFormat('pt-BR', options).format(value);
}

function getDateRange(daysBack = 30) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - daysBack);

  const formatBCB = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const formatPTAX = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };

  return {
    startBCB: formatBCB(start),
    endBCB: formatBCB(end),
    startPTAX: formatPTAX(start),
    endPTAX: formatPTAX(end),
  };
}

export async function GET() {
  try {
    const { startBCB, endBCB, startPTAX, endPTAX } = getDateRange(30);

    // Selic anual - série 432
    const selicUrl =
      `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=${startBCB}&dataFinal=${endBCB}`;

    // Dólar comercial (PTAX)
    const dolarUrl =
      `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/` +
      `CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)` +
      `?@moeda='USD'&@dataInicial='${startPTAX}'&@dataFinalCotacao='${endPTAX}'` +
      `&$top=1&$orderby=dataHoraCotacao%20desc&$format=json`;

    const [selicRes, dolarRes] = await Promise.all([
      fetch(selicUrl, { cache: 'no-store' }),
      fetch(dolarUrl, {
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
        },
      }),
    ]);

    let selic = { value: '—', note: 'Indisponível' };
    let dolar = { value: '—', note: 'Indisponível' };
    let cdi = { value: '—', note: 'Referência de mercado' };

    if (selicRes.ok) {
      const selicData = await selicRes.json();
      const lastSelic = selicData?.[selicData.length - 1];

      if (lastSelic?.valor) {
        const annualRate = Number(lastSelic.valor);

        selic = {
          value: `${formatNumberBR(annualRate, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}%`,
          note: `Atualizado em ${lastSelic.data}`,
        };

        // CDI de referência bem próximo da Selic
        const cdiRef = Math.max(annualRate - 0.1, 0);

        cdi = {
          value: `${formatNumberBR(cdiRef, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}%`,
          note: 'Referência aproximada',
        };
      }
    }

    if (dolarRes.ok) {
      const dolarData = await dolarRes.json();
      const lastDollar = dolarData?.value?.[0];

      if (lastDollar?.cotacaoVenda) {
        const sale = Number(lastDollar.cotacaoVenda);

        dolar = {
          value: `R$ ${formatNumberBR(sale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
          note: lastDollar.dataHoraCotacao
            ? `Atualizado em ${lastDollar.dataHoraCotacao}`
            : 'Atualizado agora',
        };
      }
    }

    return Response.json({
      selic,
      dolar,
      ibov: {
        value: '—',
        note: 'API de bolsa pendente',
      },
      cdi,
    });
  } catch {
    return Response.json(
      {
        selic: { value: '—', note: 'Falha ao carregar' },
        dolar: { value: '—', note: 'Falha ao carregar' },
        ibov: { value: '—', note: 'API de bolsa pendente' },
        cdi: { value: '—', note: 'Referência indisponível' },
      },
      { status: 200 }
    );
  }
}