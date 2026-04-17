import { Quote } from "lucide-react";

export default function IntroApropos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-6 text-gray-600 text-base leading-relaxed">
          <p>
            L&apos;Association SONAGNON s&apos;engage à rendre le sourire aux habitants
            désemparés de la commune de Sô-Ava en jouant un rôle de porte-parole, de
            conseiller et de défenseur des droits humains auprès d&apos;une population qui
            a peur du lendemain, dans un environnement lacustre hostile.
          </p>
          <p>
            Pour cela, nous sensibilisons les villageois, organisons des ateliers et portons
            à bout de bras des projets communautaires avec l&apos;appui financier de
            partenaires engagés face aux cris du cœur des Tofinous.
          </p>
        </div>

        {/* Citation Abbé Pierre */}
        <div className="mt-10 border-l-4 border-green-600 pl-6 py-2">
          <div className="flex gap-3 items-start">
            <Quote size={22} className="text-green-600 shrink-0 mt-1" />
            <div>
              <p className="text-gray-700 italic text-lg leading-relaxed font-medium">
                La prospérité n&apos;est réelle que lorsqu&apos;elle est partagée.
              </p>
              <p className="mt-2 text-sm text-gray-400 font-semibold uppercase tracking-wide">
                — L&apos;Abbé Pierre
              </p>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <p className="mt-6 text-sm text-gray-400 italic">
          Antonin-Midofi HOUNGA, responsable de l&apos;Association SONAGNON.
        </p>
      </div>
    </section>
  );
}
