// Site content types for Firestore documents - organized by component

// Blog post types
export interface BlogPostTranslation {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  canonicalUrl: string;
  og: {
    title: string;
    description: string;
  };
  introduction: string;
  main_content: string;
  summary: string;
  conclusion: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  status: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  og: { type: string };
  translations: {
    es: BlogPostTranslation;
    en: BlogPostTranslation;
  };
}

// Header component content
export interface HeaderContent {
  logoText: string;
  navigation: {
    services: string;
    about: string;
    contact: string;
  };
  ctaButton: string;
}

// Hero section content
export interface HeroContent {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
}

// About section content
export interface AboutContent {
  title: string;
  description1: string;
  description2: string;
  cardTitle: string;
  cardItems: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

// Services section content
export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

// Contact section content
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface ContactForm {
  title: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
  buttonText: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
  form: ContactForm;
}

// Footer content
export interface FooterContent {
  brandDescription: string;
  contactInfo: ContactInfo;
  services: string[];
  quickLinks: {
    about: string;
    services: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  copyright: string;
}

// Main homepage content structure
export interface HomepageContent {
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  contact: ContactContent;
  footer: FooterContent;
}

export interface SiteContentDocument {
  language: string;
  lastUpdated: Date;
  homepage: HomepageContent;
}

// Default fallback content
export const defaultHomepageContent: HomepageContent = {
  header: {
    logoText: "Abogado Gentile",
    navigation: {
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    ctaButton: "Schedule Consultation"
  },
  
  hero: {
    title: "Trusted Legal Support for Your Fresh Start in Spain",
    subtitle: "With over 10 years of experience in Barcelona, we specialize in immigration law, debt relief under the Second Chance Law, and business formation for expatriates and entrepreneurs.",
    primaryButton: "Schedule Your Consultation",
    secondaryButton: "Learn About Our Services"
  },
  
  about: {
    title: "Experienced Lawyers for Expats in Spain",
    description1: "With more than a decade of practice in Barcelona, Abogado Gentile is a law firm dedicated to helping expatriates, families, and self-employed professionals navigate the Spanish legal system.",
    description2: "Our team combines international expertise with local insight, offering clear, practical, and multilingual legal advice. Whether you are applying for residency, starting a company, or looking for debt forgiveness, we ensure you receive personalized solutions and full legal protection.",
    cardTitle: "Why Choose Abogado Gentile",
    cardItems: [
      "Specialists in immigration, business law, and debt cancellation",
      "Tailored strategies that simplify complex procedures",
      "Trusted by international clients seeking a fresh start"
    ],
    highlights: [
      {
        title: "Over 10 Years Experience",
        description: "Helping expats and entrepreneurs navigate Spanish legal system"
      },
      {
        title: "Multilingual Team",
        description: "Fluent in English, Spanish, and Italian"
      },
      {
        title: "Personalized Solutions",
        description: "Tailored strategies for your unique situation"
      },
      {
        title: "Trusted by International Clients",
        description: "Proven track record of successful outcomes"
      }
    ]
  },
  
  services: {
    title: "Our Legal Services",
    subtitle: "Comprehensive legal support tailored to expatriates, entrepreneurs, and individuals seeking a fresh start in Spain.",
    services: [
      {
        title: "Immigration & Extranjería",
        description: "Complete support for residency permits, visas, family reunification, and Golden Visa applications.",
        features: ["Residency permits", "Work and student visas", "Family reunification", "N.I.E. number assistance"],
        buttonText: "Learn More"
      },
      {
        title: "Second Chance Law",
        description: "Debt relief and cancellation under Spain's Ley de la Segunda Oportunidad for individuals and autónomos.",
        features: ["Debt restructuring", "Complete debt cancellation", "Creditor negotiations", "Legal protection"],
        buttonText: "Learn More"
      },
      {
        title: "Business Formation",
        description: "End-to-end support for starting and managing your business in Spain.",
        features: ["Company registration", "Tax ID and permits", "Contract drafting", "Fiscal advice"],
        buttonText: "Learn More"
      },
      {
        title: "Criminal Defense",
        description: "24/7 legal assistance for detainees with specialized support for expats.",
        features: ["24/7 legal assistance", "Detention representation", "Rights protection", "Expat support"],
        buttonText: "Learn More"
      },
      {
        title: "Intellectual Property",
        description: "Protect your innovations with trademark, copyright, and patent registration.",
        features: ["Trademark registration", "Copyright protection", "Patent applications", "Digital IP protection"],
        buttonText: "Learn More"
      },
      {
        title: "Cultural Associations",
        description: "Legal guidance for forming and managing cultural associations and non-profits.",
        features: ["Formation and registration", "Bylaws drafting", "Legal compliance", "Event permits"],
        buttonText: "Learn More"
      }
    ]
  },
  
  contact: {
    title: "Contact Abogado Gentile Today",
    subtitle: "Schedule your consultation and let us help you secure your future in Spain.",
    contactInfo: {
      phone: "+34 645 04 58 64",
      email: "abogadogentile@icab.cat",
      address: "Gran Via de les Corts Catalanes, 594 - Atico I\n08007 Barcelona, Spain",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    form: {
      title: "Schedule Your Consultation",
      fields: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        service: "Service Needed",
        message: "Message"
      },
      buttonText: "Send Message"
    }
  },
  
  footer: {
    brandDescription: "Trusted legal support for expatriates, entrepreneurs, and individuals seeking a fresh start in Spain.",
    contactInfo: {
      phone: "+34 645 04 58 64",
      email: "abogadogentile@icab.cat",
      address: "Gran Via de les Corts Catalanes, 594 - Atico I\n08007 Barcelona, Spain",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    services: [
      "Immigration Law",
      "Second Chance Law",
      "Business Formation",
      "Criminal Defense",
      "Intellectual Property"
    ],
    quickLinks: {
      about: "About Us",
      services: "Our Services",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    copyright: "© 2024 Abogado Gentile. All rights reserved. | Professional legal services in Barcelona, Spain."
  }
};
