export type BranchStatus = "open" | "closed" | "opens-soon" | "closes-soon";

export type ServiceFilter = "all" | "blood" | "imaging" | "genomics";

export interface BranchHours {
  label: string;
  value: string;
}

export interface Branch {
  id: string;
  name: string;
  label?: string;
  address: string;
  status: BranchStatus;
  statusText: string;
  hours: string;
  phone: string;
  services: ServiceFilter[];
  city: string;
  isHeadquarters?: boolean;
  weekdayHours?: string;
  weekendHours?: string;
  specialNote?: string;
  directionsUrl?: string;
  mapsEmbedUrl?: string;
}

export const serviceFilters: { id: ServiceFilter; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "blood", label: "Blood Tests" },
  { id: "imaging", label: "Imaging" },
  { id: "genomics", label: "Genomics" },
];

export const branches: Branch[] = [
  {
    id: "hq",
    name: "SM MediLabs – Jaffna Town",
    label: "Main Headquarters",
    address: "Jaffna-Kankesanturai Rd, Jaffna, Sri Lanka",
    status: "open",
    statusText: "OPEN NOW",
    hours: "Mon–Sun: 06:30 AM – 09:00 PM",
    weekdayHours: "Mon–Fri: 06:30 AM – 09:00 PM",
    weekendHours: "Sat–Sun: 06:30 AM – 09:00 PM",
    phone: "+94 77 000 0000",
    services: ["all", "blood", "imaging", "genomics"],
    city: "Jaffna",
    isHeadquarters: true,
    directionsUrl: "https://maps.app.goo.gl/1L43egCcgGwABbp49",
  },
  {
    id: "trincomalee",
    name: "SM Medi Labs – Trincomalee",
    address: "531B, Nilaveli Road, Varothayanagar, Trincomalee",
    status: "open",
    statusText: "OPEN NOW",
    hours: "Mon–Sun: 06:30 AM – 09:00 PM",
    weekdayHours: "Mon–Fri: 06:30 AM – 09:00 PM",
    weekendHours: "Sat–Sun: 06:30 AM – 09:00 PM",
    phone: "+94 77 000 0001",
    services: ["all", "blood", "imaging"],
    city: "Trincomalee",
    directionsUrl: "https://maps.app.goo.gl/c2CZcCwPbicS45ME9",
    mapsEmbedUrl: "https://maps.google.com/maps?q=SM+Medi+Labs+Trincomalee&z=17&output=embed",
  },
];

export const headquarters = branches.find((b) => b.isHeadquarters)!;
export const otherBranches = branches.filter((b) => !b.isHeadquarters);

export function matchesServiceFilter(
  branchServices: ServiceFilter[],
  filter: ServiceFilter
): boolean {
  return filter === "all" || branchServices.includes(filter);
}

export function matchesCitySearch(branch: Branch, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  return (
    branch.city.toLowerCase().includes(q) ||
    branch.name.toLowerCase().includes(q) ||
    branch.address.toLowerCase().includes(q)
  );
}

export function getStatusStyles(status: BranchStatus) {
  switch (status) {
    case "open":
      return "bg-[#80F98B] text-[#007327]";
    case "opens-soon":
      return "bg-yellow-100 text-yellow-700";
    case "closes-soon":
      return "bg-orange-100 text-orange-600 border border-orange-200";
    case "closed":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-500";
  }
}
