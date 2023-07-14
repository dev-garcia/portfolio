import "./globals.css";

export const metadata = {
  title: "Cristian Garcia",
  description:
    "Portfólio do desenvolvevor web frontend Cristian Garcia | Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-sans">{children}</body>
    </html>
  );
}
