import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISCD - Empresa Ecuatoriana de Ciberseguridad",
  description: "ISCD, Somos una comunidad de especialistas tecnológicos dedicados a fortalecer la seguridad cibernética de nuestros clientes desde sus elementos clave.",
  metadataBase: new URL("https://landingiscd.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
