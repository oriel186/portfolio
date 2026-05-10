if (window.location.search) {
  window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const i18n = {
  fr: {
    title: "Oriel Studio | Sites e-commerce pour commerces locaux",
    meta_description: "Oriel Studio conçoit des sites e-commerce performants pour commerces locaux : conversion, SEO, automatisations et accompagnement après lancement.",
    meta_og_title: "Oriel Studio | Sites e-commerce pour commerces locaux",
    meta_og_description: "Creation de sites e-commerce clairs, rapides et orientes resultats pour commerces locaux.",
    meta_twitter_title: "Oriel Studio | Sites e-commerce pour commerces locaux",
    meta_twitter_description: "Sites e-commerce orientes conversion, SEO et suivi post-lancement.",
    skip_link: "Aller au contenu principal",
    logo_aria: "Retour en haut de page",
    nav_projects: "Projets",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    lang_fr_aria: "Changer la langue en francais",
    lang_en_aria: "Changer la langue en anglais",
    nav_cta: "Discutons maintenant",
    brand: "Oriel Studio",
    hero_title: "Je crée des sites qui transforment vos visiteurs en clients.",
    hero_subtitle: "Pour les commerces locaux, je conçois des expériences e-commerce premium qui renforcent la confiance, simplifient l'achat et augmentent les demandes qualifiées.",
    hero_positioning: "Cadrage stratégique, design orienté conversion et accompagnement après mise en ligne : un site pensé pour vendre, pas seulement pour être joli.",
    hero_cta_primary: "Commencez votre projet",
    hero_cta_secondary: "Voir mes réalisations",
    projects_eyebrow: "Travaux récents",
    projects_title: "Projets sélectionnés",
    tag_ecommerce: "E-commerce",
    tag_services: "Services",
    project1_title: "Boutique d'epices artisanales",
    project1_alt: "Page d'accueil d'une boutique d'epices artisanales avec catalogue de produits",
    project1_desc: "Creation d'un e-commerce complet : catalogue, panier, paiement, gestion client et emails automatiques.",
    project1_impact: "Impact observé : centralisation des commandes et réduction des demandes manuelles hors site.",
    project1_link: "Voir l'étude de cas",
    project1_aria: "Voir le détail du projet Boutique d'épices artisanales",
    project2_title: "Site vitrine pour commerce local",
    project2_desc: "Une page claire et rapide qui met vos offres en avant et facilite la prise de contact.",
    project2_aria: "En savoir plus sur le service site vitrine",
    project3_title: "Tunnel de commande optimise",
    project3_desc: "Flux simplifie, suivi client et confirmations automatiques pour gagner du temps.",
    project3_aria: "En savoir plus sur le service tunnel de commande",
    learn_more: "En savoir plus",
    case_eyebrow: "Étude de cas",
    case_title: "Comment le projet a été structuré",
    case_subtitle: "De la commande informelle à un parcours de vente fiable",
    case_1: "Problème : commandes dispersées sur plusieurs canaux, erreurs fréquentes, suivi difficile.",
    case_2: "Approche : cadrage des besoins, maquettes ciblées conversion, intégration paiement et automatisation email.",
    case_3: "Indicateurs suivis : taux de finalisation panier, délai de traitement, volume de demandes support.",
    case_4: "Résultat : parcours de commande plus lisible et gestion quotidienne simplifiée pour l'équipe.",
    about_eyebrow: "À propos",
    about_title: "Le profil derrière les projets",
    about_p1: "Je suis développeur web orienté e-commerce local. Mon objectif est simple : transformer une intention d'achat en vente réelle avec un parcours clair, rapide et rassurant.",
    about_p2: "Je combine design, développement et optimisation SEO pour livrer un site utile dès le premier jour, puis je reste disponible pour l'amélioration continue.",
    gallery_eyebrow: "Aperçus réels",
    gallery_title: "Captures du site réalisé",
    gallery_alt_1: "Vue catalogue avec filtres de produits et cartes articles",
    gallery_alt_2: "Fiche produit avec details, prix et bouton d'ajout au panier",
    gallery_alt_3: "Parcours de commande avec recapitulatif et etape de paiement",
    gallery_cap_1: "Vue catalogue",
    gallery_cap_2: "Vue fiche produit",
    gallery_cap_3: "Vue parcours commande",
    skills_eyebrow: "Valeur business",
    skills_title: "Ce que je peux faire pour votre activité",
    skill_1_t: "Création de sites e-commerce",
    skill_1_d: "Boutiques pensées pour convertir et simplifier l'achat.",
    skill_2_t: "Intégration paiement en ligne",
    skill_2_d: "Parcours de paiement clair et fiable pour vendre sans friction.",
    skill_3_t: "Backend et gestion utilisateurs",
    skill_3_d: "Comptes clients, sécurité et gestion des données essentielles.",
    skill_4_t: "Automatisation commandes et emails",
    skill_4_d: "Confirmations et suivi automatiques pour gagner du temps.",
    contact_eyebrow: "Disponible pour missions",
    contact_title: "Parlons de votre projet",
    contact_proof: "Disponible pour 1 à 2 projets ce mois-ci. Réponse sous 24h.",
    contact_urgency: "Merci de remplir ce formulaire pour recevoir une proposition plus précise.",
    label_name: "Nom complet",
    label_email: "Email professionnel",
    label_company: "Entreprise",
    label_project_type: "Type de projet",
    label_budget: "Budget estimé",
    label_timeline: "Délai souhaité",
    label_desc: "Description du projet",
    opt_select: "Sélectionnez une option",
    opt_type_1: "Site vitrine premium",
    opt_type_2: "Site e-commerce complet",
    opt_type_3: "Refonte orientée conversion",
    opt_type_4: "Tunnel de vente / landing page",
    opt_budget_select: "Sélectionnez une tranche",
    opt_budget_1: "Moins de 1 000€",
    opt_budget_2: "1 000€ - 3 000€",
    opt_budget_3: "3 000€ - 5 000€",
    opt_budget_4: "5 000€+",
    ph_email: "nom@entreprise.com",
    ph_company: "Nom de votre activité",
    ph_desc: "Objectifs, offre, priorités, échéance...",
    send_btn: "Recevoir une proposition",
    mail_note: "Ou écrire directement à : oriel.studio.dev@gmail.com",
    trust_eyebrow: "Crédibilité",
    trust_title: "Ma méthode de collaboration",
    testi_1: "\"Un cadrage clair dès le départ : objectifs, priorités et calendrier validés avant la production.\"<cite>- Étape 1 : cadrage stratégique</cite>",
    testi_2: "\"Des points réguliers, des livrables concrets et un suivi après mise en ligne pour faire progresser le site.\"<cite>- Étape 2 : exécution et suivi</cite>",
    testi_3: "\"Une livraison soignée, des choix orientés conversion et une communication fluide du premier échange à la mise en ligne.\"<cite>- Étape 3 : livraison et optimisation</cite>",
    why_eyebrow: "Pourquoi moi",
    why_title: "Une approche simple et orientée résultat",
    why_1_t: "Solution claire",
    why_1_d: "Des choix simples et efficaces, sans complexité inutile.",
    why_2_t: "Adapté à votre activité",
    why_2_d: "Le site suit votre besoin réel, pas un modèle générique.",
    why_3_t: "Mise en ligne rapide",
    why_3_d: "Un plan de production concret pour livrer sans traîner.",
    why_4_t: "Suivi et maintenance",
    why_4_d: "Vous n'êtes pas seul après la mise en ligne.",
    process_eyebrow: "Processus",
    process_title: "Comment ça se passe",
    process_1: "On discute de votre projet et de vos objectifs.",
    process_2: "Je crée votre site e-commerce avec les bonnes automatisations.",
    process_3: "Mise en ligne, tests finaux et suivi après lancement.",
    final_title: "Besoin d'un site pour vendre en ligne ?",
    final_text: "Parlons de votre projet à partir d'aujourd'hui.",
    final_btn: "Discuter de mon projet",
    footer_copy: "&copy; <span id=\"year\"></span> Oriel. Tous droits réservés.",
    form_error: "Merci de compléter les champs obligatoires.",
    form_sending: "Envoi en cours...",
    form_success: "Merci, votre demande a bien été envoyée.",
    form_server_error: "L'envoi a échoué. Merci de réessayer dans quelques instants.",
    form_network_error: "Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.",
    mail_subject: "Nouveau projet",
    mail_body_intro: "Nouvelle demande depuis le portfolio",
    mail_name: "Nom",
    mail_email: "Email",
    mail_company: "Entreprise",
    mail_project: "Type de projet",
    mail_budget: "Budget",
    mail_timeline: "Délai souhaité",
    mail_desc: "Description",
    not_provided: "Non renseignée",
    not_specified: "Non précisé"
  },
  en: {
    title: "Oriel Studio | E-commerce websites for local businesses",
    meta_description: "Oriel Studio builds high-performing e-commerce websites for local businesses: conversion, SEO, automations, and post-launch support.",
    meta_og_title: "Oriel Studio | E-commerce websites for local businesses",
    meta_og_description: "Clear, fast, conversion-focused e-commerce websites for local businesses.",
    meta_twitter_title: "Oriel Studio | E-commerce websites for local businesses",
    meta_twitter_description: "Conversion-focused e-commerce websites with SEO and post-launch support.",
    skip_link: "Skip to main content",
    logo_aria: "Back to top",
    nav_projects: "Projects",
    nav_about: "About",
    nav_skills: "Capabilities",
    nav_contact: "Contact",
    lang_fr_aria: "Switch language to French",
    lang_en_aria: "Switch language to English",
    nav_cta: "Let's talk now",
    brand: "Oriel Studio",
    hero_title: "I build websites that turn visitors into customers.",
    hero_subtitle: "For local businesses, I craft premium e-commerce experiences that build trust, simplify buying, and increase qualified leads.",
    hero_positioning: "Strategic framing, conversion-focused design, and post-launch support: a website built to sell, not just to look good.",
    hero_cta_primary: "Start your project",
    hero_cta_secondary: "See my work",
    projects_eyebrow: "Recent work",
    projects_title: "Selected projects",
    tag_ecommerce: "E-commerce",
    tag_services: "Services",
    project1_title: "Artisanal spice store",
    project1_alt: "Homepage of an artisanal spice e-commerce store with product catalog",
    project1_desc: "Full e-commerce build: catalog, cart, checkout, customer management, and automated emails.",
    project1_impact: "Observed impact: centralized orders and fewer manual requests outside the site.",
    project1_link: "View case study",
    project1_aria: "View details for the artisanal spice store project",
    project2_title: "Showcase website for a local business",
    project2_desc: "A clear, fast page that highlights your offers and makes contacting you easier.",
    project2_aria: "Learn more about showcase website service",
    project3_title: "Optimized checkout funnel",
    project3_desc: "Simplified flow, customer tracking, and automated confirmations to save time.",
    project3_aria: "Learn more about checkout funnel service",
    learn_more: "Learn more",
    case_eyebrow: "Case study",
    case_title: "How the project was structured",
    case_subtitle: "From informal orders to a reliable sales journey",
    case_1: "Problem: scattered orders across multiple channels, frequent errors, difficult follow-up.",
    case_2: "Approach: requirement framing, conversion-focused mockups, payment integration, and email automation.",
    case_3: "Tracked metrics: cart completion rate, processing time, support request volume.",
    case_4: "Result: clearer checkout flow and simpler day-to-day operations for the team.",
    about_eyebrow: "About",
    about_title: "The profile behind the projects",
    about_p1: "I am a web developer focused on local e-commerce. My goal is simple: turn purchase intent into real sales with a clear, fast, and reassuring journey.",
    about_p2: "I combine design, development, and SEO optimization to deliver a useful website from day one, then stay available for ongoing improvements.",
    gallery_eyebrow: "Real snapshots",
    gallery_title: "Screens from the delivered website",
    gallery_alt_1: "Catalog view with product filters and item cards",
    gallery_alt_2: "Product page with details, price, and add-to-cart button",
    gallery_alt_3: "Checkout journey with summary and payment step",
    gallery_cap_1: "Catalog view",
    gallery_cap_2: "Product view",
    gallery_cap_3: "Checkout view",
    skills_eyebrow: "Business value",
    skills_title: "What I can do for your business",
    skill_1_t: "E-commerce website creation",
    skill_1_d: "Online stores built to convert and simplify buying.",
    skill_2_t: "Online payment integration",
    skill_2_d: "Clear and reliable checkout flows to sell without friction.",
    skill_3_t: "Backend and user management",
    skill_3_d: "Customer accounts, security, and essential data management.",
    skill_4_t: "Order and email automation",
    skill_4_d: "Automatic confirmations and tracking to save time.",
    contact_eyebrow: "Available for projects",
    contact_title: "Let's talk about your project",
    contact_proof: "Available for 1 to 2 projects this month. Reply within 24h.",
    contact_urgency: "Please fill out this form to receive a more accurate proposal.",
    label_name: "Full name",
    label_email: "Business email",
    label_company: "Company",
    label_project_type: "Project type",
    label_budget: "Estimated budget",
    label_timeline: "Expected timeline",
    label_desc: "Project description",
    opt_select: "Select an option",
    opt_type_1: "Premium showcase website",
    opt_type_2: "Full e-commerce website",
    opt_type_3: "Conversion-focused redesign",
    opt_type_4: "Sales funnel / landing page",
    opt_budget_select: "Select a range",
    opt_budget_1: "Under €1,000",
    opt_budget_2: "€1,000 - €3,000",
    opt_budget_3: "€3,000 - €5,000",
    opt_budget_4: "€5,000+",
    ph_email: "name@company.com",
    ph_company: "Your business name",
    ph_desc: "Goals, offer, priorities, timeline...",
    send_btn: "Receive a proposal",
    mail_note: "Or email directly: oriel.studio.dev@gmail.com",
    trust_eyebrow: "Credibility",
    trust_title: "My collaboration method",
    testi_1: "\"Clear framing from day one: goals, priorities, and timeline validated before production starts.\"<cite>- Step 1: strategic framing</cite>",
    testi_2: "\"Regular check-ins, concrete deliverables, and post-launch follow-up to keep improving results.\"<cite>- Step 2: execution & follow-up</cite>",
    testi_3: "\"Polished delivery, conversion-oriented decisions, and smooth communication from kickoff to launch.\"<cite>- Step 3: delivery & optimization</cite>",
    why_eyebrow: "Why me",
    why_title: "A simple, results-oriented approach",
    why_1_t: "Clear solution",
    why_1_d: "Simple and effective decisions, no unnecessary complexity.",
    why_2_t: "Tailored to your business",
    why_2_d: "The website fits your real needs, not a generic template.",
    why_3_t: "Fast launch",
    why_3_d: "A concrete production plan to deliver without delays.",
    why_4_t: "Support and maintenance",
    why_4_d: "You are not alone after launch.",
    process_eyebrow: "Process",
    process_title: "How it works",
    process_1: "We discuss your project and goals.",
    process_2: "I build your e-commerce website with the right automations.",
    process_3: "Launch, final tests, and post-launch follow-up.",
    final_title: "Need a website to sell online?",
    final_text: "Let's discuss your project starting today.",
    final_btn: "Discuss my project",
    footer_copy: "&copy; <span id=\"year\"></span> Oriel. All rights reserved.",
    form_error: "Please complete the required fields.",
    form_sending: "Sending...",
    form_success: "Thanks, your request has been sent.",
    form_server_error: "Sending failed. Please try again in a moment.",
    form_network_error: "Unable to reach the server. Check your connection and try again.",
    mail_subject: "New project",
    mail_body_intro: "New request from portfolio",
    mail_name: "Name",
    mail_email: "Email",
    mail_company: "Company",
    mail_project: "Project type",
    mail_budget: "Budget",
    mail_timeline: "Timeline",
    mail_desc: "Description",
    not_provided: "Not provided",
    not_specified: "Not specified"
  }
};

const storedLang = localStorage.getItem("portfolio_lang");
const browserLang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
let currentLang = storedLang || browserLang;
if (!i18n[currentLang]) {
  currentLang = "fr";
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("portfolio_lang", lang);

  document.title = dict.title;
  const metaMap = {
    "meta-description": dict.meta_description,
    "meta-og-title": dict.meta_og_title,
    "meta-og-description": dict.meta_og_description,
    "meta-twitter-title": dict.meta_twitter_title,
    "meta-twitter-description": dict.meta_twitter_description
  };

  Object.entries(metaMap).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) {
      node.setAttribute("content", value);
    }
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || dict[key] === undefined) return;
    if (key.startsWith("testi_") || key === "footer_copy") {
      node.innerHTML = dict[key];
      if (key === "footer_copy") {
        const year = document.getElementById("year");
        if (year) year.textContent = String(new Date().getFullYear());
      }
    } else {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (!key || dict[key] === undefined) return;
    node.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (!key || dict[key] === undefined) return;
    node.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    if (!key || dict[key] === undefined) return;
    node.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
  });
}

const nodes = document.querySelectorAll(".reveal");
const cascadeDelayMap = new Map();
document.querySelectorAll(".why-grid .cascade-reveal").forEach((node, index) => {
  cascadeDelayMap.set(node, index * 90);
});
document.querySelectorAll(".service-list .cascade-reveal").forEach((node, index) => {
  cascadeDelayMap.set(node, index * 90);
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

nodes.forEach((node, index) => {
  if (cascadeDelayMap.has(node)) {
    node.style.transitionDelay = `${cascadeDelayMap.get(node)}ms`;
  } else {
    node.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  }
  observer.observe(node);
});

const langButtons = document.querySelectorAll(".lang-btn");
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang") || "fr";
    applyLanguage(selectedLang);
  });
});

const leadForm = document.getElementById("lead-form");
const feedback = document.getElementById("form-feedback");

if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dict = i18n[currentLang];

    if (window.location.protocol === "file:") {
      if (feedback) {
        feedback.textContent =
          currentLang === "fr"
            ? "Le formulaire backend ne fonctionne pas en file://. Lance le site via http://localhost."
            : "Backend form does not work on file://. Run the site via http://localhost.";
      }
      return;
    }

    if (!leadForm.checkValidity()) {
      if (feedback) {
        feedback.textContent = dict.form_error;
      }
      leadForm.reportValidity();
      return;
    }

    const formData = new FormData(leadForm);
    const payload = {
      nom: String(formData.get("nom") || ""),
      email: String(formData.get("email") || ""),
      entreprise: String(formData.get("entreprise") || dict.not_provided),
      typeProjet: String(formData.get("type_projet") || ""),
      budget: String(formData.get("budget") || ""),
      delai: String(formData.get("delai") || dict.not_specified),
      description: String(formData.get("description") || "")
    };

    if (feedback) {
      feedback.textContent = dict.form_sending;
    }
    const submitButton = leadForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        if (feedback) {
          feedback.textContent = dict.form_server_error;
        }
        return;
      }

      if (feedback) {
        feedback.textContent = dict.form_success;
      }
      leadForm.reset();
    } catch (_error) {
      if (feedback) {
        feedback.textContent = dict.form_network_error;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

applyLanguage(currentLang);



