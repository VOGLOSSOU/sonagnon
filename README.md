# SONAGNON — Site Vitrine

Site vitrine de l'Association SONAGNON « Provocateurs de Changement », ONG béninoise œuvrant pour les populations lacustres du lac Nokoué depuis 1998.

## Stack technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Langue** : Français

---

## Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Structure du projet

```
src/
├── app/                        # Pages (App Router)
│   ├── page.tsx                # Accueil
│   ├── a-propos/               # À propos
│   ├── actions/                # Liste des actions
│   │   └── [slug]/             # Détail d'une action
│   ├── projets/                # Projets réalisés
│   ├── actualites/             # Actualités / Blog
│   ├── contact/                # Page contact
│   └── faire-un-don/           # Page don
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation + logo
│   │   └── Footer.tsx          # Pied de page
│   ├── ui/
│   │   ├── Button.tsx          # Bouton réutilisable
│   │   └── SectionTitle.tsx    # Titre de section
│   └── sections/
│       ├── Hero.tsx            # Section héro (page d'accueil)
│       ├── Stats.tsx           # Bande chiffres clés
│       ├── ActionCard.tsx      # Carte d'action
│       ├── ActionsSection.tsx  # Grille d'actions
│       ├── Partners.tsx        # Logos partenaires
│       └── CallToAction.tsx    # Bandeau CTA
│
├── data/                       # Contenu statique (TypeScript)
│   ├── actions.ts              # Les 7 axes d'action
│   ├── stats.ts                # Chiffres clés
│   ├── partenaires.ts          # Partenaires
│   └── navigation.ts          # Menus de navigation
│
├── types/
│   └── index.ts                # Types TypeScript partagés
│
└── lib/
    └── utils.ts                # Fonctions utilitaires

public/
└── images/
    ├── hero-bg.jpg             # 🔲 À ajouter
    ├── actions/                # 🔲 Photos par action (ejp.jpg, microcredit.jpg…)
    ├── projets/                # 🔲 Photos de projets
    ├── equipe/                 # 🔲 Photos de l'équipe
    └── partenaires/            # 🔲 Logos des partenaires
```

---

## Checklist contenu à intégrer

### Images
- [ ] `public/images/hero-bg.jpg` — photo panoramique du lac (format large)
- [ ] `public/images/actions/ejp.jpg`
- [ ] `public/images/actions/microcredit.jpg`
- [ ] `public/images/actions/eau.jpg`
- [ ] `public/images/actions/energie.jpg`
- [ ] `public/images/actions/numerique.jpg`
- [ ] `public/images/actions/education.jpg`
- [ ] `public/images/actions/economique.jpg`
- [ ] `public/images/equipe/*.jpg` — photos membres équipe
- [ ] `public/images/partenaires/*.png` — logos partenaires (fond transparent)
- [ ] Logo SONAGNON (SVG de préférence) → `public/logo.svg`

### Textes
- [ ] Contenu détaillé de chaque action dans `src/data/actions.ts` (champ `contenu`)
- [ ] Texte page À propos (`src/app/a-propos/page.tsx`)
- [ ] Noms et rôles de l'équipe (`src/app/a-propos/page.tsx`)
- [ ] Articles actualités → créer `src/data/actualites.ts`

### Technique (plus tard)
- [ ] Formulaire de contact — brancher sur Resend / Formspree / API Route Next.js
- [ ] Page faire-un-don — intégrer HelloAsso ou autre solution de paiement
- [ ] SEO — ajouter `sitemap.xml` et `robots.txt`
- [ ] Déploiement — Vercel (recommandé) ou autre hébergeur Node.js

---

## Partenaires

- Emmaüs International
- Electriciens Sans Frontières (ESF)
- Emmaüs Connect
- Mairie de Soufflenheim
- Novea / FASEP

---

## Contact association

📍 Sô-Tchanhoué, Maison Kossou — Arrondissement de Vekky, Commune de Sô-Ava, Bénin  
📞 (00229) 95 96 03 57 / 97 09 82 24 / 21 03 22 97  
✉️ midofi@yahoo.fr
