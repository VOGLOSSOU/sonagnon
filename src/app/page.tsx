import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ActionsSection from "@/components/sections/ActionsSection";
import Partners from "@/components/sections/Partners";
import CallToAction from "@/components/sections/CallToAction";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ActionsSection />

      {/* Section présentation courte */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                surtitle="Qui sommes-nous ?"
                title="Une ONG enracinée dans le lac Nokoué"
                subtitle="Créée en 1998 par 15 volontaires, SONAGNON accompagne les populations lacustres de Sô-Ava avec un fort leadership féminin. Membre en probation d'Emmaüs International."
              />
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Situés au nord de Cotonou, les 69 villages du lac Nokoué abritent plus de
                  150 000 habitants — les <strong>Tofinous</strong> — qui vivent de la pêche,
                  isolés par les eaux et inondés chaque année d&apos;août à novembre.
                </p>
                <p>
                  SONAGNON agit au cœur de cette réalité avec 6 salariés permanents et une
                  trentaine de bénévoles engagés, sous la direction d&apos;une équipe
                  majoritairement féminine.
                </p>
              </div>
              <Button href="/a-propos">En savoir plus sur SONAGNON</Button>
            </div>
            {/* Image placeholder — remplacer par vraie photo */}
            <div className="relative h-80 lg:h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                📷 Photo des villages lacustres
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <CallToAction />
    </>
  );
}
