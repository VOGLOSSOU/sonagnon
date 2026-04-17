import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Association SONAGNON - Home",
    template: "Association SONAGNON - %s",
  },
  description:
    "Association béninoise œuvrant depuis 1998 pour les populations lacustres du lac Nokoué : éducation, micro-crédit féminin, eau potable, énergie solaire et inclusion numérique.",
  keywords: [
    "SONAGNON",
    "Bénin",
    "lac Nokoué",
    "Sô-Ava",
    "ONG",
    "développement durable",
    "micro-crédit",
    "Emmaüs",
  ],
  openGraph: {
    title: "SONAGNON — Provocateurs de Changement",
    description:
      "Association béninoise œuvrant depuis 1998 pour les populations lacustres du lac Nokoué.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
