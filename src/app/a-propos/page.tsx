import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Histoire, valeurs et équipe de l'association SONAGNON.",
};

export default function AProposPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">
      Page À propos — en construction
    </div>
  );
}
