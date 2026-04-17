import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets réalisés et en cours par SONAGNON : infrastructures, eau potable, énergie solaire, passerelles et plus.",
};

export default function ProjetsPage() {
  // TODO: Remplacer par les vrais projets via data/projets.ts
  const projets = [
    {
      titre: "Méga-projet eau potable — Emmaüs International",
      annee: "2007",
      statut: "terminé",
      description: "Systèmes d'adduction d'eau potable et toilettes dans 9 villages lacustres de Sô-Ava.",
      partenaire: "Emmaüs International",
    },
    {
      titre: "Projet ZOGBIN — 250 lampadaires solaires",
      annee: "En cours",
      statut: "en cours",
      description: "Installation de 250 lampadaires autonomes dans 48 villages de la commune de Sô-Ava.",
      partenaire: "ESF · Novea · FASEP",
    },
    {
      titre: "Relais Numériques du Bénin",
      annee: "2024",
      statut: "en cours",
      description: "Boutiques numériques de proximité, formation de 100+ femmes et cours dans 5 collèges lacustres.",
      partenaire: "Emmaüs Connect",
    },
    {
      titre: "Passerelle «Union fait la force»",
      annee: "2008",
      statut: "terminé",
      description: "Passerelle reliant les villages de Hounhoué et Hlouazounmey.",
      partenaire: "",
    },
    {
      titre: "Mini-centrales solaires Café Lumière",
      annee: "En cours",
      statut: "en cours",
      description: "4 mini-centrales solaires construites, 2 en cours. Plus de 20 villages électrifiés.",
      partenaire: "Electriciens Sans Frontières",
    },
  ];

  return (
    <>
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Nos réalisations"
            title="Projets"
            subtitle="Des infrastructures concrètes et des programmes durables qui transforment la vie des populations lacustres."
            light
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((p) => (
              <div key={p.titre} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                      p.statut === "en cours"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {p.statut === "en cours" ? "En cours" : "Terminé"}
                  </span>
                  <span className="text-xs text-gray-400">{p.annee}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.titre}</h3>
                <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                {p.partenaire && (
                  <p className="text-xs text-gray-400">Partenaire : {p.partenaire}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
