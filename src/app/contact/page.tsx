import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'association SONAGNON au Bénin.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            surtitle="Parlons-nous"
            title="Nous contacter"
            subtitle="Une question, un partenariat ou envie de nous rejoindre ? Nous sommes à votre écoute."
            light
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Infos contact */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p>Sô-Tchanhoué, Maison Kossou</p>
                    <p>Arrondissement de Vekky, Commune de Sô-Ava</p>
                    <p>BP 794, Abomey-Calavi, Bénin</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a href="tel:+22995960357" className="text-green-700 hover:underline">
                      (00229) 95 96 03 57
                    </a>
                    {" / "}
                    <a href="tel:+22997098224" className="text-green-700 hover:underline">
                      97 09 82 24
                    </a>
                    {" / "}
                    <a href="tel:+22921032297" className="text-green-700 hover:underline">
                      21 03 22 97
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:midofi@yahoo.fr" className="text-green-700 hover:underline">
                      midofi@yahoo.fr
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Envoyer un message</h2>
              {/* TODO: Brancher sur une vraie API (Resend, Formspree, etc.) */}
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Choisir un sujet</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="don">Don / Soutien financier</option>
                    <option value="benevole">Bénévolat</option>
                    <option value="ecotourisme">Écotourisme solidaire</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-full font-medium hover:bg-green-800 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
