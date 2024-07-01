import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Garcia",
  description: "Portfólio do desenvolvevor Cristian Garcia | Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="font-sans">{children}</body>
    </html>
  );
}
