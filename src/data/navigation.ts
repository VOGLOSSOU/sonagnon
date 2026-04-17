import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Nos Actions",
    href: "/actions",
    children: [
      { label: "Enfants & Jeunes Pêcheurs", href: "/actions/enfants-jeunes-pecheurs" },
      { label: "Micro-crédit féminin", href: "/actions/microcredit-feminin" },
      { label: "Eau & Assainissement", href: "/actions/eau-assainissement" },
      { label: "Énergie Solaire", href: "/actions/energie-solaire" },
      { label: "Inclusion Numérique", href: "/actions/inclusion-numerique" },
      { label: "Éducation & Insertion", href: "/actions/education-insertion" },
      { label: "Renforcement Économique", href: "/actions/renforcement-economique" },
    ],
  },
  { label: "Projets", href: "/projets" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];
