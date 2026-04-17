export interface Action {
  slug: string;
  titre: string;
  description: string;
  contenu: string;
  image: string;
  couleur: string;
}

export interface Partenaire {
  nom: string;
  logo: string;
  site?: string;
}

export interface StatChiffre {
  valeur: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BlocProjet {
  image: string;
  alt: string;
  paragraphes: string[];
}

export interface Projet {
  slug: string;
  titre: string;
  resume: string;
  imageCover: string;
  blocs: BlocProjet[];
}
