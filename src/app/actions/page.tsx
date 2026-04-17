import type { Metadata } from "next";
import { actions } from "@/data/actions";
import ActionCard from "@/components/sections/ActionCard";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Nos Actions",
  description:
    "Les 7 axes d'intervention de SONAGNON : enfants pêcheurs, micro-crédit, eau, énergie, numérique, éducation et renforcement économique.",
};

export default function ActionsPage() {
  return (
    <>
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Ce que nous faisons"
            title="Nos domaines d'action"
            subtitle="7 axes d'intervention pour transformer les conditions de vie des 150 000 habitants des villages lacustres du lac Nokoué."
            light
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action) => (
              <ActionCard key={action.slug} action={action} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
