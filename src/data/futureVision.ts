export interface StrategicArea {
  id: string;
  title: string;
  vertical: string;
  tagline: string;
  desc: string;
  bullets: string[];
  icon: string;
}

export const FUTURE_STRATEGIC_AREAS: StrategicArea[] = [
  {
    id: 'future-mining',
    title: 'INTEGRATED MINING EXPANSION',
    vertical: 'Mining & Allied Ventures',
    tagline: 'Scaling mechanized capacity, deep exploration, and MDO footprints',
    desc: 'Deepening our core competency by taking on larger multi-year MDO concessions, expanding our deep-core drilling capabilities, and modernizing heavy earthmoving fleets with intelligent telemetry.',
    bullets: [
      'Expansion into multi-commodity open-cast MDO contracts',
      'Advanced 3D geostatistical ore-body modeling integration',
      'Telemetry-enabled fleet dispatch automation and fuel monitoring',
      'Enhanced crushing and dry beneficiation circuit deployments'
    ],
    icon: 'Hammer'
  },
  {
    id: 'future-properties',
    title: 'PROPERTIES & INFRASTRUCTURE',
    vertical: 'Vijaybhumi Properties',
    tagline: 'Land acquisition, strategic land assembly, and commercial development',
    desc: 'Unlocking long-term real estate value by acquiring strategic land parcels in emerging industrial corridors, providing end-to-end master planning, and executing sustainable infrastructure developments.',
    bullets: [
      'Strategic land bank consolidation along emerging transit corridors',
      'Development of industrial parks and logistics warehouses',
      'Commercial mixed-use infrastructure planning',
      'Statutory compliance and land title diligence systems'
    ],
    icon: 'Building2'
  },
  {
    id: 'future-solar',
    title: 'SOLAR & RENEWABLE ENERGY',
    vertical: 'Vijaybhumi Solar Energy',
    tagline: 'Capitalizing on the green energy transition through solar installations',
    desc: 'Building a sustainable future through large-scale ground-mounted solar installations, captive industrial renewable power solutions, and clean energy investments.',
    bullets: [
      'Development of ground-mounted solar power parks',
      'Captive green power supply for mining and industrial clusters',
      'Renewable energy EPC and asset management capabilities',
      'Integration of energy storage and hybrid power models'
    ],
    icon: 'Sun'
  },
  {
    id: 'future-investments',
    title: 'STRATEGIC INVESTMENTS & VENTURES',
    vertical: 'Group Strategic Ventures',
    tagline: 'Long-term value creation across complementary high-growth industries',
    desc: 'Deploying patient corporate capital into high-growth ventures, supply chain technologies, digital mineral marketplaces, and regional cultural preservation initiatives.',
    bullets: [
      'Investments into mining technology and supply chain ventures',
      'Scaling BiZhar Heritage artisanal e-marketplace platform',
      'Co-investment frameworks with institutional partners',
      'Regional entrepreneurship and sustainable local employment'
    ],
    icon: 'TrendingUp'
  }
];

export const MINING_EASY_PLATFORM = {
  name: 'VIJAYBHUMI MINING EASY PLATFORM',
  status: 'Conceptual Development & Strategic Blueprint',
  tagline: 'The Digital Backbone for India’s Mining Ecosystem',
  summary: 'A futuristic digital marketplace and ecosystem platform conceptualized by Vijaybhumi Group to bridge mine leaseholders, certified operators, equipment owners, investors, and statutory consultants under one unified digital window.',
  keyPillars: [
    {
      title: 'Mining Opportunity Exchange',
      desc: 'Transparent listing of mineral blocks, joint development opportunities, and subcontracting packages.'
    },
    {
      title: 'Equipment & Fleet Aggregation',
      desc: 'On-demand matching of heavy earthmoving machinery, drilling rigs, and tipper fleets with active mine sites.'
    },
    {
      title: 'Technical & Laboratory Booking',
      desc: 'Direct digital interface with NABL laboratories, geological consultants, and statutory surveying experts.'
    },
    {
      title: 'Land & Project Diligence Vault',
      desc: 'Secure repository for geological reports, cadastral maps, and regulatory approval workflows.'
    }
  ],
  note: 'The platform is currently in strategic concept and architecture phase. Detailed feature rollouts and partner onboarding will be announced in due course.'
};
