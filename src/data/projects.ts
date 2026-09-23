export interface ProjectItem {
  id: string;
  name: string;
  vertical: 'Mining' | 'Properties' | 'Solar Energy' | 'Strategic Ventures';
  location: string;
  status: 'Active' | 'Under Development' | 'Planned' | 'Portfolio Pipeline';
  description: string;
  image: string;
  scope: string[];
}

// Portfolio items adhering to strict accuracy policy - upcoming verified pipelines
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'integrated-mining-ops',
    name: 'Integrated Mining & Excavation Operations',
    vertical: 'Mining',
    location: 'Eastern Mining Corridor, India',
    status: 'Active',
    description: 'Comprehensive open-cast excavation, blast-hole drilling (150mm), and high-frequency dispatch utilizing dedicated 40-Hyva tipper fleet.',
    image: '/images/vertical_mining.jpg',
    scope: ['Overburden Stripping', 'Blast Hole Drilling', 'Mineral Transportation', 'Stockyard Management']
  },
  {
    id: 'deep-core-exploration',
    name: 'Deep Core Mineral Exploration Program',
    vertical: 'Mining',
    location: 'Central & Eastern Coalfields Region',
    status: 'Active',
    description: 'Wireline diamond core drilling up to 500–650 metres depth for stratigraphic delineation, geological modeling, and NABL laboratory sample testing.',
    image: '/images/service_drilling.jpg',
    scope: ['500–650m Core Drilling', 'Geological Logging', 'NABL Core Assays', 'Resource Delineation']
  },
  {
    id: 'strategic-land-corridor',
    name: 'Strategic Land & Industrial Corridor Initiative',
    vertical: 'Properties',
    location: 'Jharkhand Growth Corridors',
    status: 'Portfolio Pipeline',
    description: 'Master planning, land acquisition diligence, and preliminary site infrastructure development for future industrial and commercial uses.',
    image: '/images/vertical_properties.jpg',
    scope: ['Land Due Diligence', 'Site Preparation', 'Utility Linkages', 'Regulatory Clearances']
  },
  {
    id: 'industrial-solar-pipeline',
    name: 'Industrial Solar & Clean Energy Transition Initiative',
    vertical: 'Solar Energy',
    location: 'Industrial & Mining Sites, Eastern India',
    status: 'Portfolio Pipeline',
    description: 'Feasibility assessments and strategic partnership frameworks for ground-mounted solar installations and captive industrial renewable energy integration.',
    image: '/images/vertical_solar.jpg',
    scope: ['Solar Feasibility', 'Captive Power Assessment', 'Clean Grid Integration', 'Strategic Capital Alliances']
  }
];
