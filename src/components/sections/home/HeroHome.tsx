import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/accueil/acceuil-1.jpg"
        alt="Enfant dans une pirogue sur le lac Nokoué"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay global assombri */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Filet noir centré sur le texte — radial du centre vers les bords */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,0,0,0.65)_0%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl drop-shadow-lg">
          Association SONAGNON,{" "}
          <span className="text-green-400">ensemble plus forts.</span>
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl drop-shadow">
          Depuis 1998, SONAGNON se bat aux côtés des populations lacustres du lac Nokoué
          pour l&apos;éducation, l&apos;autonomisation des femmes et l&apos;accès aux
          services essentiels — au cœur du Bénin.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-lg"
          >
            Découvrir SONAGNON <ArrowRight size={16} />
          </Link>
          <Link
            href="/actions"
            className="inline-flex items-center gap-2 border border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all"
          >
            Nos actions
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
