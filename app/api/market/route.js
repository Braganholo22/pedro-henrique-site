export const dynamic = 'force-dynamic';

function formatNumberBR(value, options = {}) {
  return new Intl.NumberFormat('pt-BR', options).format(value);
}

function getDateRange(daysBack = 30) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - daysBack);

  const format = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  return {
    start: format(start),
    end: format(end),
  };
}

export async function GET() {
  try {
    const { start, end } = getDateRange(30);

    // Série 432 = Meta da taxa Selic anual
    const selicUrl = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=${start}&dataFinal=${end}`;
    const dolarUrl = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

    const [selicRes, dolarRes] = await Promise.all([
      fetch(selicUrl, { cache: 'no-store' }),
      fetch(dolarUrl, { cache: 'no-store' }),
    ]);

    let selic = { value: '—', note: 'Indisponível' };
    let dolar = { value: '—', note: 'Indisponível' };

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
      }
    }

    if (dolarRes.ok) {
      const dolarData = await dolarRes.json();
      const usdbrl = dolarData?.USDBRL;

      if (usdbrl?.bid) {
        const bid = Number(usdbrl.bid);

        dolar = {
          value: `R$ ${formatNumberBR(bid, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
          note: usdbrl.create_date || 'Atualizado agora',
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
      cdi: {
        value: '—',
        note: 'API pendente',
      },
    });
  } catch {
    return Response.json(
      {
        selic: { value: '—', note: 'Falha ao carregar' },
        dolar: { value: '—', note: 'Falha ao carregar' },
        ibov: { value: '—', note: 'API pendente' },
        cdi: { value: '—', note: 'API pendente' },
      },
      { status: 200 }
    );
  }
}