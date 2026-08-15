export const SITE_CONFIG = {
  name: 'Bharat Maps',
  tagline: 'Stay connected. Even when you\'re offline.',
  description: 'A decentralized offline network built for India — connecting nearby people through Bluetooth, mesh networking and offline maps.',
  version: '0.1.0 Beta',
  platform: 'Android',
  launchDate: 'August 15, 2026',
  independenceDay: '80th Independence Day of India',
  developers: ['Shardul Pande', 'Vishwas Tiwari'],
}

export const INDIA_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
]

export const FEATURES = [
  {
    id: 'messaging',
    title: 'Offline Messaging',
    description: 'Send messages to nearby Bharat Maps users without depending on cellular internet.',
    icon: 'MessageSquare',
    color: 'saffron',
  },
  {
    id: 'sos',
    title: 'SOS Signal',
    description: 'Broadcast an emergency signal to nearby participating devices. SOS → Nearby Devices → Relay → Nearby Users.',
    icon: 'AlertTriangle',
    color: 'red',
  },
  {
    id: 'location',
    title: 'Live Location',
    description: 'Share your location with nearby users through the local network without cloud dependency.',
    icon: 'MapPin',
    color: 'green',
  },
  {
    id: 'maps',
    title: 'Offline Maps',
    description: 'Access map information without continuously requiring an internet connection.',
    icon: 'Map',
    color: 'blue',
  },
  {
    id: 'navigation',
    title: 'Offline Navigation',
    description: 'Navigate using locally available map data and GPS/GNSS even without internet.',
    icon: 'Navigation',
    color: 'blue',
  },
  {
    id: 'nearby',
    title: 'Nearby People',
    description: 'See participating Bharat Maps devices around you, subject to privacy controls and permissions.',
    icon: 'Users',
    color: 'saffron',
  },
  {
    id: 'mesh',
    title: 'Mesh Network',
    description: 'Every participating device can potentially become another node in the network.',
    icon: 'Network',
    color: 'green',
  },
]

export const SCENARIOS = [
  {
    id: 'trekking',
    title: 'Trekking',
    emoji: '🏔️',
    headline: 'No mobile signal?',
    description: 'Stay connected with nearby members of your group using device-to-device communication.',
    gradient: 'from-slate-800 to-slate-900',
    accent: '#FF9933',
  },
  {
    id: 'disaster',
    title: 'Disaster Response',
    emoji: '🆘',
    headline: 'When infrastructure fails.',
    description: 'Nearby devices can form a local communication layer when conventional networks become unreliable.',
    gradient: 'from-red-950 to-slate-900',
    accent: '#ef4444',
  },
  {
    id: 'festivals',
    title: 'Festivals & Crowded Events',
    emoji: '🎉',
    headline: 'Lost in the crowd?',
    description: 'Keep track of your group and communicate locally even when networks are congested.',
    gradient: 'from-orange-950 to-slate-900',
    accent: '#f97316',
  },
  {
    id: 'rural',
    title: 'Rural Areas',
    emoji: '🌾',
    headline: 'Where connectivity is sparse.',
    description: 'Bharat Maps is useful where mobile connectivity may be inconsistent or unavailable.',
    gradient: 'from-green-950 to-slate-900',
    accent: '#138808',
  },
  {
    id: 'roadtrip',
    title: 'Road Trips',
    emoji: '🚗',
    headline: 'Navigate without data.',
    description: 'Offline maps, navigation and location sharing without continuously relying on mobile data.',
    gradient: 'from-blue-950 to-slate-900',
    accent: '#3b82f6',
  },
]

export const ROADMAP_PHASES = [
  { phase: '01', title: 'Android Beta', status: 'current', description: 'Initial Android application with BLE mesh, offline maps, and SOS.' },
  { phase: '02', title: 'Community Testing', status: 'upcoming', description: 'Structured testing with early adopters across different Indian environments.' },
  { phase: '03', title: 'Mesh Optimization', status: 'upcoming', description: 'Improving relay efficiency, range, and multi-hop performance.' },
  { phase: '04', title: 'Navigation Improvements', status: 'upcoming', description: 'Enhanced offline routing, turn-by-turn guidance, and map updates.' },
  { phase: '05', title: 'Large-Scale Field Testing', status: 'upcoming', description: 'Structured real-world validation across diverse Indian geographies.' },
  { phase: '06', title: 'Public Release', status: 'future', description: 'Wide public release with community-validated feature set.' },
]

export const TECH_STACK = [
  { key: 'BLE', label: 'Bluetooth Low Energy', description: 'Device discovery and short-range peer-to-peer communication.' },
  { key: 'MESH', label: 'Peer-to-Peer Relay', description: 'Multi-hop message routing through participating devices.' },
  { key: 'GNSS', label: 'Location Without Cellular', description: 'GPS/GNSS determines position independently of mobile internet.' },
  { key: 'MAPS', label: 'Local Map Data', description: 'Offline map tiles stored on-device for navigation without connectivity.' },
  { key: 'ANDROID', label: 'Current Platform', description: 'Native Android application with required system permissions for offline communication.' },
]
