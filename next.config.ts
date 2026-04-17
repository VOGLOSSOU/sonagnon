import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Ajouter ici les domaines externes si besoin (ex: CDN, Cloudinary)
    remotePatterns: [],
    // Permet les images locales sans erreur pendant le dev (placeholder manquants)
    unoptimized: false,
  },
};

export default nextConfig;
