import './globals.css';

export const metadata = {
  title: 'Pedro Henrique | Assessoria de Investimentos',
  description:
    'Assessoria de investimentos com visão estratégica, atendimento próximo e acesso a soluções integradas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}