import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaHome() {
  return (
    <section className="py-20 bg-green-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-4">
          Rejoignez le mouvement
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ensemble, changeons des vies au lac Nokoué
        </h2>
        <p className="text-gray-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Partenariat, bénévolat, don ou simple curiosité — toute forme de soutien
          renforce notre capacité à agir pour les populations lacustres du Bénin.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-gray-100 px-7 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Nous contacter <ArrowRight size={15} />
          </Link>
          <Link
            href="/actions"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-7 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Nos actions
          </Link>
        </div>
      </div>
    </section>
  );
}
