const stats = [
  { valeur: "1998", label: "Année de fondation" },
  { valeur: "1 000+", label: "Ménages impactés" },
  { valeur: "9", label: "Villages équipés en eau potable" },
  { valeur: "20+", label: "Villages électrifiés" },
  { valeur: "69", label: "Villages dans la zone d'action" },
  { valeur: "98 %", label: "Taux de remboursement micro-crédit" },
];

export default function StatsHome() {
  return (
    <section className="bg-green-700 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.valeur}</p>
              <p className="text-xs text-green-200 mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
