import type { Metadata } from "next";
import IntroActions from "@/components/sections/actions/IntroActions";
import SliderActions from "@/components/sections/actions/SliderActions";
import ProjetsActions from "@/components/sections/actions/ProjetsActions";
import CtaHome from "@/components/sections/home/CtaHome";

export const metadata: Metadata = {
  title: "Nos Actions et Projets",
  description:
    "Découvrez les actions et projets de l'association SONAGNON : écotourisme solidaire, micro-crédit, eau potable, énergie solaire et bien plus au Bénin.",
};

export default function ActionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">
            Sur le terrain depuis 1998
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Nos Actions et Projets
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Six axes d&apos;intervention complémentaires pour transformer durablement
            la vie des populations lacustres du lac Nokoué.
          </p>
        </div>
      </section>

      <IntroActions />
      <SliderActions />
      <ProjetsActions />
      <CtaHome />
    </>
  );
}
