export interface BusinessVertical {
  id: string;
  number: string;
  name: string;
  tagline: string;
  subtitle: string;
  slug: string;
  category: string;
  themeColor: string; // Accent color hex or class
  accentBg: string;
  accentText: string;
  accentBorder: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  capabilities: string[];
  status: 'Active Operations' | 'Expanding Portfolio' | 'Strategic Initiative' | 'Dedicated Vertical' | 'E-Marketplace';
  ctaText: string;
  legalNote?: string;
  isDetailedMining?: boolean;
}

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'mining',
    number: '01',
    name: 'Vijaybhumi Mining',
    tagline: 'From Depth to Destination – We Deliver',
    subtitle: 'Mining & Allied Ventures',
    slug: '/business/mining',
    category: 'Core Industrial Operations',
    themeColor: '#E67E22',
    accentBg: 'bg-orange-500/10',
    accentText: 'text-industrial-orange',
    accentBorder: 'border-industrial-orange/30',
    shortDescription: 'End-to-end mining capabilities spanning exploration, mine development, production, processing, transportation and allied technical services.',
    fullDescription: 'Vijaybhumi Mining & Allied Ventures Pvt. Ltd. delivers complete, technology-driven mining solutions across India. With proven operational capacity, comprehensive earthmoving and drilling fleet, advanced exploration drill rigs, and strong logistics networks, we execute integrated mining contracts from ground-zero feasibility through to destination delivery.',
    heroImage: '/images/vertical_mining.jpg',
    capabilities: [
      'Mineral Exploration & Core Drilling (up to 500–650m)',
      'Mine Planning & Geological Assessment',
      'Overburden Removal & Excavation',
      'Drilling & Controlled Blasting',
      'Crushing, Screening & Mineral Processing',
      'Material Handling & Stockyard Management',
      'Fleet Logistics with 40+ Heavy Hyva Tippers',
      'Contract Mining, MDO & Turnkey EPC Solutions'
    ],
    status: 'Active Operations',
    ctaText: 'EXPLORE MINING →',
    isDetailedMining: true
  },
  {
    id: 'properties',
    number: '02',
    name: 'Vijaybhumi Properties',
    tagline: 'Developing Opportunities for the Future',
    subtitle: 'Properties & Development',
    slug: '/business/properties',
    category: 'Real Estate & Land Infrastructure',
    themeColor: '#059669',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    shortDescription: 'Real estate development, land acquisition, and strategic property-focused business initiatives across emerging growth corridors.',
    fullDescription: 'Vijaybhumi Properties represents the Group’s strategic expansion into land acquisition, master planning, site infrastructure, and sustainable real estate development. Leveraging deep land management expertise and regional partnerships, we unlock long-term asset value.',
    heroImage: '/images/vertical_properties.jpg',
    capabilities: [
      'Strategic Land Acquisition & Assembly',
      'Master Site Planning & Ground Preparation',
      'Industrial & Commercial Land Development',
      'Infrastructure Linkages & Utility Planning',
      'Regulatory Clearances & Land Due Diligence'
    ],
    status: 'Expanding Portfolio',
    ctaText: 'EXPLORE PROPERTIES →',
    legalNote: 'Detailed property portfolio coming soon. All initiatives are executed strictly in compliance with statutory land and RERA frameworks.'
  },
  {
    id: 'solar',
    number: '03',
    name: 'Vijaybhumi Solar Energy',
    tagline: 'Building a Sustainable Future Through Clean Energy',
    subtitle: 'Solar & Renewable Energy',
    slug: '/business/solar-energy',
    category: 'Renewable Power & Clean Tech',
    themeColor: '#F59E0B',
    accentBg: 'bg-amber-500/10',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    shortDescription: 'Building a sustainable future through solar energy, renewable power projects, clean infrastructure, and strategic green investments.',
    fullDescription: 'In line with India’s energy transition, Vijaybhumi Solar Energy is focused on clean power initiatives, industrial solar installations, green infrastructure development, and long-term renewable asset investments.',
    heroImage: '/images/vertical_solar.jpg',
    capabilities: [
      'Solar Power Project Feasibility & Development',
      'Industrial Ground-Mounted & Rooftop Solutions',
      'Green Energy Infrastructure Integration',
      'Clean Power Strategic Partnerships',
      'Sustainable Energy Project Development'
    ],
    status: 'Strategic Initiative',
    ctaText: 'EXPLORE SOLAR →',
    legalNote: 'Project announcements and generation partnerships will be published as project pipelines are commissioned.'
  },
  {
    id: 'mining-limited',
    number: '04',
    name: 'Vijaybhumi Mining Limited',
    tagline: 'Dedicated Corporate Mining Architecture',
    subtitle: 'Mining Business Vertical',
    slug: '/business/mining-limited',
    category: 'Corporate Mining Entity',
    themeColor: '#C36B3B',
    accentBg: 'bg-amber-700/10',
    accentText: 'text-amber-500',
    accentBorder: 'border-amber-600/30',
    shortDescription: 'A dedicated Vijaybhumi mining business vertical focused on structured mining operations, governance, and institutional project delivery.',
    fullDescription: 'Vijaybhumi Mining Limited functions as an autonomous mining vertical within the Group architecture, positioned for large-scale concessions, institutional partnerships, and specialized mineral ventures.',
    heroImage: '/images/vertical_mining_limited.jpg',
    capabilities: [
      'Dedicated Mining Business Governance',
      'Large-Scale Concession Management Frameworks',
      'Structured Mineral Ventures',
      'Institutional Investor & Partner Interface'
    ],
    status: 'Dedicated Vertical',
    ctaText: 'EXPLORE →',
    legalNote: 'Corporate information and official filings will be published in accordance with statutory timelines.'
  },
  {
    id: 'bizhar-heritage',
    number: '05',
    name: 'BiZhar Heritage',
    tagline: 'Heritage • Craft • Cultural E-Marketplace',
    subtitle: 'Heritage • Craft • E-Marketplace',
    slug: '/business/bizhar-heritage',
    category: 'E-Commerce & Cultural Platform',
    themeColor: '#DC2626',
    accentBg: 'bg-rose-900/10',
    accentText: 'text-rose-400',
    accentBorder: 'border-rose-700/30',
    shortDescription: 'A Vijaybhumi Group-associated e-marketplace and brand ecosystem empowering regional artisans, traditional crafts, and indigenous heritage.',
    fullDescription: 'BiZhar Heritage bridges ancient artisanal heritage with modern e-commerce. As an associated brand of the Vijaybhumi Group, it showcases curated regional handicrafts, handlooms, and indigenous cultural artifacts, empowering artisan communities through sustainable digital trade.',
    heroImage: '/images/vertical_bizhar.jpg',
    capabilities: [
      'Curated Artisanal Crafts & Handlooms E-Marketplace',
      'Direct Artisan Empowerment & Fair Compensation',
      'Cultural Heritage Preservation Initiatives',
      'Sustainable Packaging & Pan-India Logistics',
      'Authentic Regional GI-Tagged Product Aggregation'
    ],
    status: 'E-Marketplace',
    ctaText: 'EXPLORE BRAND →',
    legalNote: 'Operates as an independent cultural business division under the Vijaybhumi Group umbrella.'
  }
];
