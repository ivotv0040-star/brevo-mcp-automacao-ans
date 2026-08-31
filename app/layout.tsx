export const metadata = {
  title: "FAPES Brevo MCP - Automação ANS",
  description: "Servidor MCP para envio de e-mail HTML via Brevo - Automação ANS"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
