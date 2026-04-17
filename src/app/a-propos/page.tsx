import type { Metadata } from "next";
import MissionsApropos from "@/components/sections/apropos/MissionsApropos";
import CtaHome from "@/components/sections/home/CtaHome";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'association SONAGNON : histoire, missions et engagement au service des populations lacustres du lac Nokoué au Bénin.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero centré */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
            À propos de SONAGNON
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Une association béninoise à but non lucratif, enracinée dans les villages
            lacustres du lac Nokoué depuis 1998.
          </p>
        </div>
      </section>

      <MissionsApropos />
      <CtaHome />
    </>
  );
}
