export interface Action {
  slug: string;
  titre: string;
  description: string;
  contenu: string;
  image: string;
  icone: string;
  couleur: string;
}

export interface Projet {
  slug: string;
  titre: string;
  description: string;
  image: string;
  annee: string;
  partenaire?: string;
  statut: "terminé" | "en cours";
}

export interface Actualite {
  slug: string;
  titre: string;
  extrait: string;
  contenu: string;
  image: string;
  date: string;
  categorie: string;
}

export interface Partenaire {
  nom: string;
  logo: string;
  site?: string;
}

export interface StatChiffre {
  valeur: string;
  label: string;
  icone: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
