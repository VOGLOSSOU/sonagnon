import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Faire un don",
  description: "Soutenez financièrement l'association SONAGNON et ses actions au Bénin.",
};

export default function FaireUnDonPage() {
  return (
    <>
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Agissez concrètement"
            title="Faire un don"
            subtitle="Votre générosité permet à SONAGNON de continuer à transformer des vies dans les villages lacustres du Bénin."
            light
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* TODO: Intégrer une solution de paiement (HelloAsso, PayPal, Stripe, etc.) */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-8">
              Les modalités de don seront disponibles très bientôt. En attendant,
              contactez-nous directement pour tout soutien financier.
            </p>
            <a
              href="mailto:midofi@yahoo.fr"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Nous contacter pour un don
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
