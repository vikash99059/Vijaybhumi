export interface MiningServiceGroup {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  offerings: string[];
  equipmentInvolved: string[];
  operationalBenefits: string[];
  image: string;
}

export const MINING_SERVICES: MiningServiceGroup[] = [
  {
    id: 'mining-exploration',
    number: '01',
    title: 'Mining & Exploration',
    subtitle: 'From Geological Assessment to Full-Scale Mine Operations',
    slug: '/services/mining-exploration',
    iconName: 'Compass',
    shortDesc: 'Complete geological investigations, deep core exploration drilling up to 500-650m, mine planning, and full mine development.',
    fullDesc: 'We provide end-to-end mineral exploration and mine development services. From initial greenfield surveys, geological mapping, and deep core drilling to mine planning, feasibility studies, and pit design, Vijaybhumi ensures scientifically backed resource realization.',
    offerings: [
      'Mineral Exploration & Resource Estimation',
      'Geological Assessment & Topographical Survey',
      'Mine Planning & 3D Pit Design',
      'Feasibility Studies & Bankable Detailed Project Reports',
      'Mine Development & Box-Cut Excavation',
      'Complete Open-Cast & Surface Mining Operations'
    ],
    equipmentInvolved: [
      'Advanced Exploration Drill Machines (up to 500–650m)',
      'Total Station & DGPS Surveying Systems',
      'Core Logging & Geological Sampling Kits',
      'NABL Laboratory Testing Support'
    ],
    operationalBenefits: [
      'Accurate ore-body delineation reducing geological risk',
      'Optimized stripping ratios and haul road layouts',
      'Statutory DGMS-compliant mine planning',
      'Accelerated time-to-production for mine owners'
    ],
    image: '/images/service_exploration.jpg'
  },
  {
    id: 'drilling-mineral-processing',
    number: '02',
    title: 'Drilling & Mineral Processing',
    subtitle: 'Precision Blast Hole Drilling, Excavation & Value-Added Sizing',
    slug: '/services/drilling-mineral-processing',
    iconName: 'Crosshair',
    shortDesc: 'DTH diamond blast-hole drilling (150mm), controlled blasting, heavy earth excavation, crushing, screening, and sizing.',
    fullDesc: 'Our heavy mechanized fleet drives high-efficiency drilling, precision blasting, overburden stripping, and downstream mineral processing. We convert raw in-situ ore into market-grade crushed and screened fractions with strict size compliance.',
    offerings: [
      'DTH Diamond Drilling (150 mm diameter capability)',
      'Controlled Blasting & Fragmentation Optimization',
      'Heavy Overburden Removal & Earthmoving',
      'Primary, Secondary & Tertiary Crushing',
      'Vibratory Screening & Precise Fraction Sizing',
      'Mineral Washing & Beneficiation Support'
    ],
    equipmentInvolved: [
      'DTH Diamond Drill Machines (3 Units - 150mm dia)',
      'Tata Hitachi 300 Heavy Excavator (1 Unit)',
      'SANY 215 Hydraulic Excavators (4 Units)',
      '3-Ton Wheel Loaders (1 Unit)',
      'Mobile Crushing & Screening Plants'
    ],
    operationalBenefits: [
      'Uniform fragmentation minimizing secondary blasting',
      'High monthly overburden handling rate',
      'Calibrated output sizes meeting thermal & metallurgical specs',
      'Strict dust suppression & environmental containment'
    ],
    image: '/images/service_drilling.jpg'
  },
  {
    id: 'logistics-mdo',
    number: '03',
    title: 'Logistics & MDO',
    subtitle: 'Stockyard Operations, Mineral Transport & Mine Developer-Operator',
    slug: '/services/logistics-mdo',
    iconName: 'Truck',
    shortDesc: 'Material handling, stockyard management, 40+ Tata Hyva tippers for rapid dispatch, Contract Mining, and comprehensive MDO solutions.',
    fullDesc: 'Mineral production requires uninterrupted evacuation. Vijaybhumi operates an expansive hauling network supported by 40+ Tata Hyva tippers, sophisticated stockyard management, and end-to-end Mine Developer & Operator (MDO) management contracts.',
    offerings: [
      'Pit-to-Stockyard & Stockyard-to-Siding Mineral Haulage',
      'Comprehensive Stockyard Management & Grade Segregation',
      'Rake Loading, Siding Management & Dispatch Logistics',
      'Contract Mining on Turnkey Tonnage Basis',
      'Full Mine Developer & Operator (MDO) Services',
      'Haul Road Construction & Compaction Maintenance'
    ],
    equipmentInvolved: [
      'Tata Hyva Heavy Tippers (40 Units dedicated fleet)',
      'Motor Grader (1 Unit for haul road leveling)',
      'Soil Compactor (1 Unit for road stability)',
      'Water Tankers (1 Unit for continuous dust suppression)',
      'Weighbridge & Dispatch Automation Support'
    ],
    operationalBenefits: [
      'Guaranteed mineral evacuation without siding bottlenecks',
      'Zero cross-contamination through strict grade yards',
      'Smooth, all-weather haul roads reducing tire & fuel wear',
      'Single-point accountability under MDO framework'
    ],
    image: '/images/service_logistics.jpg'
  },
  {
    id: 'allied-technical',
    number: '04',
    title: 'Allied & Technical Services',
    subtitle: 'NABL Laboratory Testing, Surveying, Safety & Statutory Compliance',
    slug: '/services/allied-technical',
    iconName: 'ShieldCheck',
    shortDesc: 'Equipment leasing, skilled statutory manpower, project management, surveying, DGMS compliance, and NABL laboratory sample testing.',
    fullDesc: 'We supplement mining operations with crucial technical and statutory services. Through NABL-registered laboratory partners, certified mining engineers, and environmental specialists, we ensure continuous statutory compliance and operational excellence.',
    offerings: [
      'Mining Equipment Fleet Deployment & Operators',
      'Statutory & Certified Mining Manpower Placement',
      'Comprehensive Project Management Consultancy',
      'Mine Surveying & Volumetric Laser Profiling',
      'DGMS Statutory Safety Compliance & Audits',
      'Environmental Management & Dust/Water Control Plans',
      'NABL Laboratory Mineral Testing & Core Sample Analysis'
    ],
    equipmentInvolved: [
      'NABL-Registered Partner Laboratory Infrastructure',
      'Total Stations & Photogrammetry Systems',
      'Environmental Monitoring Apparatus',
      'Safety, Rescue & Fire Suppression Gear'
    ],
    operationalBenefits: [
      'Certified chemical assay and physical test reports',
      'Full compliance with Mines Act and DGMS circulars',
      'Proactive hazard identification and zero-harm culture',
      'Precise volumetric billing and contractor auditing'
    ],
    image: '/images/service_technical.jpg'
  }
];

export interface BusinessModel {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  keyHighlights: string[];
}

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    id: 'contract-mining',
    name: 'Contract Mining',
    title: 'Contract Mining Operations',
    tagline: 'Performance-driven output with dedicated fleet and crew',
    description: 'We undertake complete or modular open-cast mining contracts on fixed rate per tonne/BCM terms, deploying equipment, management, and operators to hit targeted output schedules.',
    scope: [
      'Overburden removal and dumping',
      'Blast-hole drilling and charging',
      'In-situ mineral extraction and loading',
      'Internal pit-to-crusher transportation'
    ],
    keyHighlights: [
      'Zero capital investment required from mine leaseholder',
      'Strict monthly tonnage and grade commitments',
      'High-uptime maintenance routines for equipment'
    ]
  },
  {
    id: 'mdo',
    name: 'Mine Developer & Operator (MDO)',
    title: 'Integrated MDO Framework',
    tagline: 'End-to-end management from pit development to dispatch',
    description: 'Under the MDO model, Vijaybhumi takes full operational custody of the mining asset, executing mine development, statutory compliance, extraction, processing, and dispatch.',
    scope: [
      'Initial box-cut and mine infrastructure development',
      'Routine extraction, quality monitoring, and dispatch',
      'Liaison and statutory reporting with DGMS & IBM',
      'Local stakeholder management and workforce welfare'
    ],
    keyHighlights: [
      'Turnkey operational responsibility',
      'Transparent milestone-based reporting',
      'Long-term cost predictability for concession owners'
    ]
  },
  {
    id: 'epc',
    name: 'EPC (Engineering, Procurement & Construction)',
    title: 'Mining Infrastructure EPC',
    tagline: 'Turnkey mining infrastructure and processing facility creation',
    description: 'We execute turnkey engineering, procurement, and construction for critical mine-site infrastructure including crushing units, haul roads, weighbridges, and workshop yards.',
    scope: [
      'All-weather heavy-haul road network engineering',
      'Crushing and screening circuit erection',
      'Administrative, workshop, and fuel depot construction',
      'Drainage, sediment ponds, and environmental barriers'
    ],
    keyHighlights: [
      'Rapid commissioning using experienced civil/mining teams',
      'Strict engineering standards built for heavy axle loads',
      'Guaranteed handover on schedule'
    ]
  },
  {
    id: 'turnkey-solutions',
    name: 'Turnkey Solutions',
    title: 'Holistic Turnkey Mining Execution',
    tagline: 'Customized end-to-end project packages tailored to client goals',
    description: 'Custom integrated packages combining exploration, resource modeling, laboratory assays, statutory approvals assistance, mechanized extraction, and logistics under one contract.',
    scope: [
      'Comprehensive resource to market delivery',
      'Equipment deployment and technical supervision',
      'Quality control via NABL accredited laboratories',
      'Safety and environmental stewardship programs'
    ],
    keyHighlights: [
      'Single contract, unified accountability',
      'Maximized resource recovery with minimal losses',
      'Flexible engagement structures'
    ]
  }
];
