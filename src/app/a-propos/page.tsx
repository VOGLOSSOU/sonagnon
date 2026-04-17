import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Histoire, valeurs, équipe et gouvernance de l'association SONAGNON au Bénin.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero page */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Qui sommes-nous"
            title="À propos de SONAGNON"
            subtitle="Une association béninoise à but non lucratif, enracinée dans les villages lacustres du lac Nokoué depuis 1998."
            light
          />
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre histoire</h2>
          {/* TODO: Ajouter le texte définitif */}
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Créée en 1998 par un groupe de 15 membres volontaires (8 femmes et 7 hommes),
              l&apos;association SONAGNON s&apos;est imposée comme un acteur incontournable du
              développement communautaire dans les zones lacustres du Bénin.
            </p>
            <p>
              Enregistrée en 2003 et publiée au Journal Officiel la même année, elle est régie
              par la loi 1901 et siège à Sô-Tchanhoué, Maison Kossou, dans l&apos;arrondissement
              de Vekky, commune de Sô-Ava.
            </p>
            <p>
              {/* TODO: Ajouter plus de contenu */}
              [Espace réservé — texte complet à intégrer]
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle surtitle="Ce qui nous guide" title="Nos valeurs" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icone: "🤝", titre: "Solidarité", texte: "En harmonie avec les valeurs d'Emmaüs International." },
              { icone: "⚖️", titre: "Justice", texte: "Défense des droits des enfants et des femmes." },
              { icone: "👩‍💼", titre: "Leadership féminin", texte: "Les femmes occupent les postes clés de gouvernance." },
              { icone: "🌱", titre: "Développement durable", texte: "Actions alignées sur les Objectifs du Développement Durable." },
            ].map((v) => (
              <div key={v.titre} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">{v.icone}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.titre}</h3>
                <p className="text-sm text-gray-600">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe — placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle surtitle="Les visages de SONAGNON" title="Notre équipe" centered />
          {/* TODO: Ajouter les photos et noms de l'équipe */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-3 flex items-center justify-center text-gray-400 text-2xl">
                  👤
                </div>
                <p className="font-medium text-gray-900 text-sm">Prénom Nom</p>
                <p className="text-xs text-gray-500">Poste</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
