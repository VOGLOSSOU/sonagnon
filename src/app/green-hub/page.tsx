import type { Metadata } from "next";
import ProgrammeGreenHub from "@/components/sections/green-hub/ProgrammeGreenHub";
import SignatureGreenHub from "@/components/sections/green-hub/SignatureGreenHub";
import PartenairesGreenHub from "@/components/sections/green-hub/PartenairesGreenHub";
import CtaHome from "@/components/sections/home/CtaHome";

export const metadata: Metadata = {
  title: "Green Hub Accelerator",
  description:
    "Le Green Hub Accelerator : partenariat stratégique entre TEERRA AFRICA et SONAGNON pour accompagner l'entrepreneuriat vert, l'inclusion numérique et le développement durable des communautés lacustres du Bénin.",
};

export default function GreenHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-4">
              Partenariat stratégique · TEERRA AFRICA × SONAGNON
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Green Hub{" "}
              <span className="text-green-300">Accelerator</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Un programme commun pour structurer l&apos;entrepreneuriat local, accélérer
              la transition verte et créer des emplois durables pour les jeunes et les femmes
              des communautés lacustres du lac Nokoué.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { valeur: "5", label: "pays partenaires" },
              { valeur: "5", label: "axes de collaboration" },
              { valeur: "4", label: "agences européennes" },
              { valeur: "12", label: "mois renouvelables" },
            ].map(({ valeur, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-green-700">{valeur}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgrammeGreenHub />
      <PartenairesGreenHub />
      <SignatureGreenHub />
      <CtaHome />
    </>
  );
}
