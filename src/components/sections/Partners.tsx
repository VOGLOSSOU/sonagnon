import Image from "next/image";
import { partenaires } from "@/data/partenaires";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Ils nous font confiance"
          title="Nos partenaires"
          centered
        />

        <div className="flex flex-wrap items-center justify-center gap-10">
          {partenaires.map((p) => (
            <div key={p.nom} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="relative w-32 h-16">
                <Image
                  src={p.logo}
                  alt={p.nom}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-500 text-center">{p.nom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
