export interface EquipmentCategory {
  id: string;
  categoryTitle: string;
  categorySubtitle: string;
  description: string;
  iconName: string;
  items: EquipmentItem[];
  capabilities: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  quantity: string;
  units: number;
  specs: string;
  application: string;
  badge?: string;
}

export const EQUIPMENT_DATA: EquipmentCategory[] = [
  {
    id: 'excavation-drilling',
    categoryTitle: 'Earthmoving, Excavation & Drilling',
    categorySubtitle: 'Heavy Mechanized Production & High-Efficiency Blast Rigs',
    description: 'Our core extraction division features heavy hydraulic excavators, high-payload wheel loaders, and precision DTH diamond drilling units built for tough strata.',
    iconName: 'Hammer',
    items: [
      {
        id: 'tata-hitachi-300',
        name: 'Tata Hitachi 300 Excavator',
        quantity: '1 No.',
        units: 1,
        specs: 'Heavy 30-Ton Operating Class, Reinforced Rock Bucket',
        application: 'Deep excavation, primary rock breakout & heavy overburden stripping',
        badge: 'Heavy Production'
      },
      {
        id: 'sany-215',
        name: 'SANY 215 Hydraulic Excavator',
        quantity: '4 Nos.',
        units: 4,
        specs: '21.5-Ton Operating Weight, Fuel Efficient Powertrain',
        application: 'High-cycle mineral extraction, face loading & trenching',
        badge: 'Fleet Backbone'
      },
      {
        id: 'wheel-loader-3t',
        name: '3-Ton Wheel Loader',
        quantity: '1 No.',
        units: 1,
        specs: 'High Breakout Force, High-Dump Heavy Bucket',
        application: 'Crusher feeding, rapid stockyard loading & siding dispatch',
        badge: 'Material Handling'
      },
      {
        id: 'dth-drill',
        name: 'DTH Diamond Drill Machines',
        quantity: '3 Units',
        units: 3,
        specs: '150 mm Diameter Blast Hole Drilling Capability',
        application: 'Production blast-hole drilling, bench preparation & strata penetration',
        badge: '150mm Blast Hole'
      }
    ],
    capabilities: [
      'High monthly overburden breakout and loading rate',
      'Continuous 150mm diameter blast hole drilling in hard strata',
      'Rapid truck turnaround with matched excavator-loader sizing',
      'Telemetry-monitored equipment health & scheduled preventive maintenance'
    ]
  },
  {
    id: 'exploration-testing',
    categoryTitle: 'Exploration & Testing',
    categorySubtitle: 'Deep Exploration Rig & Comprehensive Core Analysis',
    description: 'Advanced deep-core drilling capabilities supported by professional geological sampling and NABL partner laboratory testing.',
    iconName: 'Compass',
    items: [
      {
        id: 'adv-drill-rig',
        name: 'Advanced Exploration Drill Machine',
        quantity: 'Active Unit',
        units: 1,
        specs: 'Deep drilling capability up to 500–650 metres depth',
        application: 'Wireline core drilling, stratigraphic mapping & mineral strike verification',
        badge: '500–650m Depth'
      },
      {
        id: 'core-logging-gear',
        name: 'Geological Investigation & Core Logging',
        quantity: 'Standard Suite',
        units: 1,
        specs: 'NQ / HQ / PQ Core Barrel Systems, Core Boxes & Logging Tools',
        application: 'Geotechnical core logging, RQD evaluation & stratigraphy classification',
        badge: 'Precision Sampling'
      },
      {
        id: 'resource-assessment',
        name: 'Resource Assessment & Sampling Kit',
        quantity: 'Full Array',
        units: 1,
        specs: 'DGPS, Total Station, Portable XRF & Density Kits',
        application: 'In-situ sampling, geological block modeling & resource estimation',
        badge: 'Resource Evaluation'
      }
    ],
    capabilities: [
      'Exploration drilling up to 500–650 metres in complex geological formations',
      'High core recovery percentage preserving lithological boundaries',
      'Structured geological sample cataloging and chain-of-custody protocols',
      'Direct integration with NABL laboratory testing data'
    ]
  },
  {
    id: 'hauling-site-development',
    categoryTitle: 'Hauling & Site Development',
    categorySubtitle: 'Massive Tipper Fleet & Specialized Site Construction Fleet',
    description: 'Unmatched dispatch capability driven by a 40-unit Tata Hyva fleet, supported by graders, compactors, and water suppression units for all-weather haul road management.',
    iconName: 'Truck',
    items: [
      {
        id: 'tata-hyva-40',
        name: 'Tata Hyva Heavy Tippers',
        quantity: '40 Nos.',
        units: 40,
        specs: 'Heavy-Duty Multi-Axle Dumpers, High Payload Capacity',
        application: 'Continuous mineral haulage, overburden dispatch & siding delivery',
        badge: '40 Units Dedicated'
      },
      {
        id: 'water-tanker',
        name: 'Heavy Water Tanker',
        quantity: '1 No.',
        units: 1,
        specs: 'High-Volume Capacity with Pressurized Spray Jets',
        application: 'Active haul road dust suppression & site wet suppression',
        badge: 'Environmental Compliance'
      },
      {
        id: 'motor-grader',
        name: 'Motor Grader',
        quantity: '1 No.',
        units: 1,
        specs: 'Precision Articulated Blade, Heavy Grading Power',
        application: 'Haul road leveling, slope profiling, ditching & surface leveling',
        badge: 'Haul Road Maintenance'
      },
      {
        id: 'soil-compactor',
        name: 'Soil Compactor',
        quantity: '1 No.',
        units: 1,
        specs: 'Heavy Vibratory Roller, Deep Soil Densification',
        application: 'Ground stabilization, road compaction & dump yard consolidation',
        badge: 'Ground Stabilization'
      }
    ],
    capabilities: [
      'High-tonnage daily mineral transport with 40 heavy tippers',
      'All-weather haul road construction and smooth surface maintenance',
      'Proactive dust suppression ensuring DGMS and SPCB environmental standards',
      'Rapid site leveling, box-cut preparation and perimeter grading'
    ]
  },
  {
    id: 'technical-laboratory',
    categoryTitle: 'Technical & Laboratory Support',
    categorySubtitle: 'NABL-Registered Laboratory Testing & Engineering Support',
    description: 'End-to-end analytical testing and technical advisory through certified NABL laboratory partners and seasoned mining engineering experts.',
    iconName: 'FlaskConical',
    items: [
      {
        id: 'nabl-partners',
        name: 'NABL-Registered Laboratory Partners',
        quantity: 'Strategic Network',
        units: 1,
        specs: 'ISO/IEC 17025 Certified Partner Facilities',
        application: 'Mineral sample testing, chemical assays, proximate/ultimate analysis',
        badge: 'Certified Testing'
      },
      {
        id: 'geological-eval',
        name: 'Geological Data & Core Evaluation',
        quantity: 'Integrated Service',
        units: 1,
        specs: 'Multi-parameter petrographic and mineralogical analysis',
        application: 'Quality grading, impurity profiling & metallurgical characterization',
        badge: 'Data Evaluation'
      },
      {
        id: 'tech-consultancy',
        name: 'Technical Consultancy & Exploration Support',
        quantity: 'Specialist Cell',
        units: 1,
        specs: 'Senior Mining Engineers, Geologists & DGMS Compliance Experts',
        application: 'Mine planning, statutory filings, blast design optimization & auditing',
        badge: 'Expert Consultancy'
      }
    ],
    capabilities: [
      'NABL-accredited mineral sample testing & certified chemical reports',
      'Comprehensive core sample assays for thermal & industrial minerals',
      'Statutory compliance reviews aligned with DGMS & IBM regulations',
      'Full technical backup during exploration and operational execution'
    ]
  }
];

export const TOTAL_FLEET_METRICS = {
  totalHyvas: 40,
  totalExcavators: 5, // 1 Tata Hitachi + 4 SANY
  drillMachines: 4, // 3 DTH + 1 Advanced Exploration
  drillingDepthMax: '500–650m',
  blastHoleDia: '150mm',
  siteVehicles: 3, // 1 Grader + 1 Compactor + 1 Water Tanker + 1 Loader
};
