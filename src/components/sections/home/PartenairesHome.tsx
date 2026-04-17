const partenaires = [
  { nom: "Emmaüs International", description: "Partenaire stratégique depuis la création" },
  { nom: "Electriciens Sans Frontières", description: "Projets d'électrification solaire" },
  { nom: "Emmaüs Connect", description: "Inclusion numérique" },
  { nom: "Mairie de Soufflenheim", description: "Soutien annuel au micro-crédit" },
  { nom: "Novea / FASEP", description: "Projet ZOGBIN — lampadaires solaires" },
];

export default function PartenairesHome() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">
            Ils nous soutiennent
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Nos partenaires</h2>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {partenaires.map((p) => (
            <div
              key={p.nom}
              className="bg-white border border-gray-100 rounded-xl px-6 py-4 text-center shadow-sm min-w-[180px]"
            >
              {/* Placeholder logo — remplacer par <Image> quand logos disponibles */}
              <div className="w-12 h-12 bg-green-50 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-green-700 font-bold text-lg">
                  {p.nom.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{p.nom}</p>
              <p className="text-xs text-gray-400 mt-1">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
