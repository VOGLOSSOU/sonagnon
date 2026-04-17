import Image from "next/image";
import ReadMore from "@/components/ui/ReadMore";
import { MapPin, Users, Waves } from "lucide-react";

const faits = [
  { icone: MapPin, label: "69 villages lacustres", detail: "Commune de Sô-Ava, nord de Cotonou" },
  { icone: Users, label: "150 000 habitants", detail: "Les Tofinous — peuple du lac" },
  { icone: Waves, label: "26 000 hectares", detail: "Superficie du lac Nokoué" },
];

export default function ZoneHome() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
              Notre zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Le lac Nokoué et ses villages isolés
            </h2>

            <ReadMore
              text="Situé au nord de Cotonou, le lac Nokoué est le plus grand lac du Bénin en superficie et en ressources halieutiques. Il abrite 69 villages lacustres sur 26 000 hectares, peuplés par les Tofinous — plus de 150 000 habitants vivant essentiellement de la pêche. Ces communautés souffrent d'un isolement géographique sévère : chaque année d'août à novembre, les inondations désorganisent la vie quotidienne, les terres sont submergées, et la pirogue devient l'unique moyen de déplacement. L'analphabétisme, le manque d'eau potable, l'absence d'électricité et la précarité des soins médicaux y sont omniprésents. C'est dans cette réalité que SONAGNON agit depuis 1998."
              maxChars={300}
              className="text-gray-600 leading-relaxed text-base"
            />

            <div className="mt-8 space-y-4">
              {faits.map(({ icone: Icon, label, detail }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-xs text-gray-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images empilées */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/accueil/acceuil-4.jpg"
                alt="Village lacustre sur pilotis, lac Nokoué"
                fill
                className="object-cover"
              />
            </div>
            {/* Image superposée */}
            <div className="absolute -bottom-6 -left-6 w-52 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/accueil/acceuil-2.jpg"
                alt="Mangroves et pirogues sur le lac"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
