import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Image de fond — remplacer src quand disponible */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Villages lacustres de Sô-Ava"
          fill
          className="object-cover opacity-40"
          priority
          // placeholder temporaire jusqu'à la vraie photo
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge partenariat */}
          <span className="inline-block bg-green-600/20 text-green-400 border border-green-500/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Membre en probation · Emmaüs International
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Provocateurs de{" "}
            <span className="text-green-400">Changement</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Depuis 1998, SONAGNON se bat aux côtés des populations lacustres du lac Nokoué
            pour un développement durable, équitable et ancré dans la dignité humaine.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/actions" size="lg">
              Nos actions
            </Button>
            <Button href="/faire-un-don" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Soutenir SONAGNON
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce text-2xl">
        ↓
      </div>
    </section>
  );
}
