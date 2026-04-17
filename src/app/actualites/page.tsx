import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les dernières nouvelles et activités de l'association SONAGNON.",
};

export default function ActualitesPage() {
  return (
    <>
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Restez informés"
            title="Actualités"
            subtitle="Les dernières nouvelles de SONAGNON et des villages lacustres de Sô-Ava."
            light
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TODO: Mapper sur les vrais articles depuis data/actualites.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  📷 Image article
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-400">jj mois aaaa · Catégorie</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2">Titre de l&apos;article</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">Extrait de l&apos;article à intégrer...</p>
                  <span className="mt-3 inline-block text-sm text-green-700 font-semibold">Lire la suite →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
