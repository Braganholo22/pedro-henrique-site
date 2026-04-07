'use client';

const services = [
  {
    icon: '💼',
    title: 'Gestão Financeira e Operacional',
    description: 'Transforme números em decisões estratégicas.',
    items: [
      'BPO Financeiro (PJ)',
      'Gestão Financeira (PF)',
      'BI e dashboards',
      'Máquina de recebíveis',
    ],
    cta: 'Quero organizar meu financeiro',
  },
  {
    icon: '🛡️',
    title: 'Jurídico e Proteção Patrimonial',
    description: 'Segurança jurídica e estrutura para crescer.',
    items: [
      'Jurídico terceirizado',
      'Planejamento tributário',
      'LGPD',
      'M&A e societário',
      'Holding e proteção patrimonial',
    ],
    cta: 'Quero proteger meu patrimônio',
  },
  {
    icon: '🏦',
    title: 'Crédito e Fôlego Financeiro',
    description: 'Capital para acelerar seu crescimento.',
    items: [
      'Conta PJ BTG',
      'Capital de giro',
      'Antecipação de recebíveis',
      'Financiamento solar',
      'Custeio agrícola',
    ],
    cta: 'Quero avaliar crédito',
  },
  {
    icon: '📈',
    title: 'Investimentos e Real Estate',
    description: 'Faça seu patrimônio crescer com estratégia.',
    items: [
      'Investimentos BTG Pactual',
      'Diversificação de carteira',
      'Câmbio e hedge',
      'Fundos imobiliários e ativos reais',
      'Consórcios',
    ],
    cta: 'Quero começar a investir',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/pedrobraganholo',
    icon: 'IG',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/pedro-henriqueinvest',
    icon: 'IN',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5517991308840?text=Olá%20Pedro,%20quero%20saber%20mais%20sobre%20seus%20serviços.',
    icon: 'WA',
  },
  {
    name: 'E-mail',
    href: 'mailto:pedrobraganholo10@gmail.com',
    icon: 'EM',
  },
];

const marketData = [
  { label: 'Selic', value: '10,50%', note: 'Taxa básica' },
  { label: 'Dólar', value: 'R$ 5,24', note: 'Referência visual' },
  { label: 'Ibovespa', value: '128.450', note: 'Referência visual' },
  { label: 'CDI', value: '10,40%', note: 'Referência visual' },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06101f] pb-48 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06101f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#c9a45c] sm:text-xs">
              Pedro Henrique
            </p>
            <p className="text-sm text-white/75">
              Assessor de Investimentos | Vidda Investments &amp; BTG Pactual
            </p>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 md:hidden"
            aria-label="Menu"
          >
            ☰
          </button>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#servicos" className="transition hover:text-[#c9a45c]">
              Serviços
            </a>
            <a href="#mercado" className="transition hover:text-[#c9a45c]">
              Mercado
            </a>
            <a href="#sobre" className="transition hover:text-[#c9a45c]">
              Sobre
            </a>
            <a href="#contato" className="transition hover:text-[#c9a45c]">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 pt-6 md:pt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,164,92,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(59,130,246,0.12),_transparent_28%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:items-center md:gap-14 md:py-20">
          <div className="order-1">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/60 sm:text-xs">
              <span className="rounded-full border border-[#c9a45c]/40 px-3 py-1 text-[#c9a45c]">
                Vida Capital
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                BTG Pactual
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Pedro Henrique
              <span className="mt-3 block text-2xl font-normal leading-snug text-white/82 md:text-3xl">
                Assessoria de investimentos com visão estratégica
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 md:text-xl">
              Eu ajudo investidores e empresários a organizar, proteger e expandir
              seu patrimônio com estratégia, atendimento próximo e acesso a soluções
              integradas em investimentos, crédito, proteção patrimonial e gestão financeira.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5517991308840?text=Olá%20Pedro,%20quero%20falar%20com%20você."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] px-6 py-4 text-base font-semibold text-[#06101f] transition hover:scale-[1.02]"
              >
                <span>💬</span>
                Falar comigo no WhatsApp
              </a>

              <a
                href="https://www.btgpactual.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a45c]/50 px-5 py-4 text-base font-semibold text-white transition hover:bg-white/5 whitespace-nowrap"
              >
                Abrir conta no BTG
                <span>→</span>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[13px] font-semibold text-white/80 transition hover:border-[#c9a45c]/50 hover:text-[#c9a45c]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="order-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 md:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0e1b31] via-transparent to-[#c9a45c]/10" />
              <img
                src="/pedro.jpg"
                alt="Pedro Henrique"
                className="relative h-[440px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mercado" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
            Mercado
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Panorama de mercado
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Indicadores relevantes para contexto patrimonial e financeiro. Depois,
            essa área pode ser conectada a uma API.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketData.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/55">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-[#c9a45c]">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Soluções que posso oferecer
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Um ecossistema de soluções para atender pessoa física e jurídica com foco
            em crescimento, organização, proteção e construção de patrimônio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a45c]/10 text-2xl text-[#c9a45c]">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.description}</p>

              <ul className="mt-5 space-y-2 text-white/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a45c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5517991308840?text=Olá%20Pedro,%20quero%20entender%20melhor%20sobre%20esse%20serviço."
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#c9a45c] transition hover:gap-3"
              >
                {service.cta}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
              Sobre mim
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Atendimento próximo, estratégico e consultivo
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Meu foco é ajudar clientes a tomar decisões financeiras melhores,
              com clareza, planejamento e acesso a soluções de alto nível. O objetivo
              não é apenas indicar produtos, mas estruturar caminhos para crescimento,
              proteção e eficiência financeira.
            </p>

            <p className="mt-4 text-lg leading-8 text-white/75">
              Você conta com um atendimento personalizado e com a força de um ecossistema
              que conecta investimentos, crédito, planejamento patrimonial e gestão financeira.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0a1629] p-6">
              <p className="text-4xl font-semibold text-[#c9a45c]">1:1</p>
              <p className="mt-2 text-white/75">
                Atendimento próximo e personalizado
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a1629] p-6">
              <p className="text-4xl font-semibold text-[#c9a45c]">360°</p>
              <p className="mt-2 text-white/75">
                Visão completa sobre patrimônio, crédito e estrutura
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a1629] p-6">
              <p className="text-4xl font-semibold text-[#c9a45c]">PF</p>
              <p className="mt-2 text-white/75">
                Soluções para investidores e famílias
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a1629] p-6">
              <p className="text-4xl font-semibold text-[#c9a45c]">PJ</p>
              <p className="mt-2 text-white/75">
                Soluções para empresários e operações corporativas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-[2rem] border border-[#c9a45c]/20 bg-gradient-to-br from-[#0b1629] to-[#09111e] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
                Contato
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Vamos conversar sobre seu momento financeiro?
              </h2>
              <p className="mt-4 text-white/75">
                Fale comigo para entender qual solução faz mais sentido para sua realidade.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5517991308840?text=Olá%20Pedro,%20quero%20falar%20sobre%20assessoria."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] px-6 py-4 font-semibold text-[#06101f]"
              >
                <span>💬</span>
                Falar no WhatsApp
              </a>

              <a
                href="https://www.btgpactual.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold text-white"
              >
                Abrir conta no BTG
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/55">
        © 2026 Pedro Henrique • Assessoria de Investimentos • Atendimento personalizado para investidores e empresários
      </footer>

      <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-white/10 bg-[#081221]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://wa.me/5517991308840?text=Olá%20Pedro,%20quero%20falar%20com%20você."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-[#06101f]"
          >
            <span>💬</span>
            WhatsApp
          </a>

          <a
            href="https://www.btgpactual.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] px-4 py-3 font-semibold text-[#06101f]"
          >
            BTG
            <span>→</span>
          </a>
        </div>
      </div>
    </main>
  );
}