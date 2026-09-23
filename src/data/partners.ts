export interface PartnerItem {
  id: string;
  name: string;
  category: 'Technical Consultancy' | 'Infrastructure & Construction' | 'Laboratory & Testing' | 'Civil & Allied Works';
  role: string;
  description: string;
  location?: string;
  verified: boolean;
}

export const STRATEGIC_NETWORK_STATS = {
  miningCompanies: '25+',
  strategicPartnerships: '35+',
  associatesCount: '50+',
  miningCompaniesLabel: 'Mining & Allied Companies',
  strategicPartnershipsLabel: 'Strategic Partnerships',
  associatesCountLabel: 'Direct & Indirect Associates'
};

export const VERIFIED_PARTNERS: PartnerItem[] = [
  {
    id: 'gemconultants',
    name: 'Gemconultants Bilaspur',
    category: 'Technical Consultancy',
    role: 'Mining & Geological Consultancy Partner',
    description: 'Specialized mining engineering and geological consultancy supporting mine planning, statutory approvals, and technical evaluations.',
    location: 'Bilaspur, Chhattisgarh',
    verified: true
  },
  {
    id: 'oriental-structural',
    name: 'Oriental Structural Engineers',
    category: 'Infrastructure & Construction',
    role: 'Strategic Infrastructure Associate',
    description: 'Premier infrastructure and engineering partner collaborating on major earthwork, structural development, and heavy civil corridors.',
    location: 'India',
    verified: true
  },
  {
    id: 'sk-laboratory',
    name: 'S.K Laboratory & Associates',
    category: 'Laboratory & Testing',
    role: 'NABL Analytical & Core Testing Partner',
    description: 'Accredited testing partner delivering rigorous mineral sample testing, chemical assays, and core sample evaluation.',
    location: 'India',
    verified: true
  },
  {
    id: 'aadhya-construction',
    name: 'Aadhya Construction',
    category: 'Civil & Allied Works',
    role: 'Civil & Earthwork Execution Partner',
    description: 'Collaborative civil contractor supporting mine site preparation, ground stabilization, and allied infrastructure projects.',
    location: 'India',
    verified: true
  }
];

export const NETWORK_NODES = [
  { title: 'Mining Companies', desc: 'Concession holders & PSU/Private leaseholders' },
  { title: 'OEM-Linked Vendors', desc: 'Heavy equipment manufacturers & spares supply chains' },
  { title: 'Equipment Owners', desc: 'Mobilized specialized fleet & heavy earthmoving assets' },
  { title: 'Consultants', desc: 'Senior geologists, DGMS specialists & planning engineers' },
  { title: 'Laboratories', desc: 'NABL accredited core & mineral testing facilities' },
  { title: 'Contractors', desc: 'Civil, blasting & specialized earthmoving teams' },
  { title: 'Logistics Providers', desc: 'Rail siding, bulk haulage & dispatch networks' },
  { title: 'Specialized Service Partners', desc: 'Environmental, safety & compliance experts' },
];
