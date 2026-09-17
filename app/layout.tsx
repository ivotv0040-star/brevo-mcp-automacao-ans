export const metadata = {
  title: "FAPES Brevo MCP - Automação CLIPPING",
  description: "Servidor MCP para envio de e-mail HTML via Brevo - Automação CLIPPING"
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
