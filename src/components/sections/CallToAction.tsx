import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">
          Agissez avec nous
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ensemble, nous pouvons changer des vies
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Votre soutien permet à SONAGNON de continuer à œuvrer pour l&apos;éducation,
          l&apos;autonomisation des femmes et l&apos;accès aux services essentiels dans les
          villages lacustres du Bénin.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="lg">
            Nous contacter
          </Button>
          <Button
            href="/a-propos"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
