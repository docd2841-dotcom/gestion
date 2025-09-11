import { Department, CompanyInfo, Bureau } from '../types';
import { Division } from '../types';

export const BUREAUS: { [key: string]: Bureau[] } = {
  'land-cadastral': [
    {
      id: 'legal-studies',
      name: 'Bureau Études Juridiques et Conseil Fonciers',
      nameEn: 'Legal Studies and Land Advisory Office',
      nameFr: 'Bureau Études Juridiques et Conseil Fonciers',
      color: 'bg-blue-600',
      icon: 'Scale'
    },
    {
      id: 'technical-studies',
      name: 'Bureau Études Techniques et Topographiques',
      nameEn: 'Technical and Topographic Studies Office',
      nameFr: 'Bureau Études Techniques et Topographiques',
      color: 'bg-blue-500',
      icon: 'Map'
    },
    {
      id: 'administrative-procedures',
      name: 'Bureau Procédures à Suivre Administratives',
      nameEn: 'Administrative Procedures Office',
      nameFr: 'Bureau Procédures à Suivre Administratives',
      color: 'bg-blue-700',
      icon: 'FileCheck'
    }
  ],
  'financing': [
    {
      id: 'financial-engineering',
      name: 'Bureau Montage Financier et Ingénierie de Projet',
      nameEn: 'Financial Engineering and Project Management Office',
      nameFr: 'Bureau Montage Financier et Ingénierie de Projet',
      color: 'bg-orange-600',
      icon: 'Calculator'
    },
    {
      id: 'partnerships',
      name: 'Bureau Partenariat Apport et Suivi Investisseur',
      nameEn: 'Partnership and Investor Relations Office',
      nameFr: 'Bureau Partenariat Apport et Suivi Investisseur',
      color: 'bg-orange-500',
      icon: 'Handshake'
    },
    {
      id: 'coordination',
      name: 'Bureau Coordination Technique et Administrative',
      nameEn: 'Technical and Administrative Coordination Office',
      nameFr: 'Bureau Coordination Technique et Administrative',
      color: 'bg-orange-700',
      icon: 'Network'
    }
  ],
  'sales-management': [
    {
      id: 'legal-regulation',
      name: 'Bureau Suivi Juridique et Régulation Foncier',
      nameEn: 'Legal Monitoring and Land Regulation Office',
      nameFr: 'Bureau Suivi Juridique et Régulation Foncier',
      color: 'bg-gray-600',
      icon: 'Shield'
    },
    {
      id: 'commercialization',
      name: 'Bureau Commercialisation et Réseau de Vente',
      nameEn: 'Marketing and Sales Network Office',
      nameFr: 'Bureau Commercialisation et Réseau de Vente',
      color: 'bg-gray-500',
      icon: 'TrendingUp'
    },
    {
      id: 'property-management',
      name: 'Bureau Gestion Immobilier et Locative',
      nameEn: 'Property and Rental Management Office',
      nameFr: 'Bureau Gestion Immobilier et Locative',
      color: 'bg-gray-700',
      icon: 'Home'
    }
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'land-cadastral',
    name: 'Département Gestion Foncier et Cadastrale',
    nameEn: 'Land and Cadastral Management Department',
    nameFr: 'Département Gestion Foncier et Cadastrale',
    color: 'bg-blue-700',
    icon: 'MapPin',
    description: 'Expertise complète en gestion foncière et cadastrale avec des services juridiques et techniques spécialisés pour tous vos besoins immobiliers.',
    descriptionEn: 'Complete expertise in land and cadastral management with specialized legal and technical services for all your real estate needs.',
    services: [
      'Études juridiques et conseil fonciers',
      'Études techniques et topographiques', 
      'Procédures administratives',
      'Régularisation foncière',
      'Bornage et délimitation'
    ],
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'financing',
    name: 'Département Financement Foncier et Immobilier',
    nameEn: 'Real Estate and Land Financing Department',
    nameFr: 'Département Financement Foncier et Immobilier',
    color: 'bg-orange-500',
    icon: 'CreditCard',
    description: 'Solutions financières innovantes et partenariats stratégiques pour concrétiser vos projets immobiliers et fonciers.',
    descriptionEn: 'Innovative financial solutions and strategic partnerships to realize your real estate and land projects.',
    services: [
      'Montage financier et ingénierie de projet',
      'Partenariat et suivi investisseur',
      'Coordination technique et administrative',
      'Études de faisabilité',
      'Recherche de financement'
    ],
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'sales-management',
    name: 'Département Vente et Gestion Immobilière',
    nameEn: 'Real Estate Sales and Management Department',
    nameFr: 'Département Vente et Gestion Immobilière',
    color: 'bg-gray-600',
    icon: 'Building',
    description: 'Commercialisation professionnelle et gestion complète de votre patrimoine immobilier avec un suivi juridique rigoureux.',
    descriptionEn: 'Professional marketing and complete management of your real estate portfolio with rigorous legal monitoring.',
    services: [
      'Suivi juridique et régulation foncier',
      'Commercialisation et réseau de vente',
      'Gestion immobilier et locative',
      'Évaluation immobilière',
      'Marketing immobilier'
    ],
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const DIVISIONS: Division[] = [
  {
    id: 'general-administration',
    name: 'Division Administration Générale',
    nameEn: 'General Administration Division',
    nameFr: 'Division Administration Générale',
    description: 'Gestion administrative globale, coordination des services et supervision des opérations quotidiennes de l\'entreprise.',
    descriptionEn: 'Global administrative management, service coordination and supervision of daily business operations.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-indigo-600'
  },
  {
    id: 'accounting-finance',
    name: 'Division Comptabilité et Finance',
    nameEn: 'Accounting and Finance Division',
    nameFr: 'Division Comptabilité et Finance',
    description: 'Gestion financière, comptabilité, contrôle budgétaire et analyse des performances économiques de l\'entreprise.',
    descriptionEn: 'Financial management, accounting, budget control and analysis of the company\'s economic performance.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-emerald-600'
  },
  {
    id: 'human-resources',
    name: 'Division Ressources Humaines',
    nameEn: 'Human Resources Division',
    nameFr: 'Division Ressources Humaines',
    description: 'Gestion du personnel, recrutement, formation, développement des compétences et bien-être des employés.',
    descriptionEn: 'Personnel management, recruitment, training, skills development and employee welfare.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-purple-600'
  },
  {
    id: 'marketing-communication',
    name: 'Division Marketing et Communication',
    nameEn: 'Marketing and Communication Division',
    nameFr: 'Division Marketing et Communication',
    description: 'Stratégies marketing, communication corporate, relations publiques et développement de la marque.',
    descriptionEn: 'Marketing strategies, corporate communication, public relations and brand development.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-rose-600'
  }
];

export const COMPANY_INFO: CompanyInfo = {
  name: 'GeoCasa Group',
  location: 'Yaoundé, Cameroun',
  openingHours: '08:00 - 18:00',
  phone: '+237 6XX XXX XXX',
  email: 'contact@geocasagroup.com'
};

export const TRANSLATIONS = {
  en: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    welcome: 'Welcome',
    selectLanguage: 'Select Language',
    selectDepartment: 'Select Department',
    dashboard: 'Dashboard',
    requests: 'Requests',
    settings: 'Settings',
    logout: 'Logout',
    openingHours: 'Opening Hours',
    location: 'Location',
    connectedAs: 'Connected as',
    device: 'Device',
    departments: {
      'land-cadastral': 'Land and Cadastral Management Department',
      'financing': 'Real Estate and Land Financing Department',
      'sales-management': 'Real Estate Sales and Management Department'
    }
  },
  fr: {
    login: 'Connexion',
    email: 'Email',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    welcome: 'Bienvenue',
    selectLanguage: 'Choisir la langue',
    selectDepartment: 'Sélectionner le département',
    dashboard: 'Tableau de bord',
    requests: 'Demandes',
    settings: 'Paramètres',
    logout: 'Déconnexion',
    openingHours: 'Heures d\'ouverture',
    location: 'Localisation',
    connectedAs: 'Connecté en tant que',
    device: 'Appareil',
    departments: {
      'land-cadastral': 'Département Gestion Foncier et Cadastrale',
      'financing': 'Département Financement Foncier et Immobilier',
      'sales-management': 'Département Vente et Gestion Immobilière'
    }
  }
};