export type BranchStatus = "open" | "closed" | "opens-soon";

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
    hours: "Mon–Fri: 06:00 AM – 09:00 PM",
    weekdayHours: "Mon–Fri: 06:00 AM – 09:00 PM",
    weekendHours: "Sat–Sun: 07:00 AM – 05:00 PM",
    phone: "+94 77 000 0000",
    services: ["all", "blood", "imaging", "genomics"],
    city: "Jaffna",
    isHeadquarters: true,
    directionsUrl: "https://maps.app.goo.gl/1L43egCcgGwABbp49",
  },
  {
    id: "northside",
    name: "Northside Express",
    address: "128 Northside Blvd, Suite 400, NY 10021",
    status: "open",
    statusText: "OPEN NOW",
    hours: "Mon–Sat: 07:00 AM – 08:00 PM",
    phone: "+1 (800) 555-0101",
    services: ["all", "blood"],
    city: "New York",
    directionsUrl: "https://maps.google.com",
  },
  {
    id: "southside",
    name: "Southside Hub",
    address: "890 Southside Drive, NY 10019",
    status: "opens-soon",
    statusText: "OPENS 8AM",
    hours: "Mon–Fri: 08:00 AM – 07:00 PM",
    phone: "+1 (800) 555-0102",
    services: ["all", "blood", "imaging"],
    city: "New York",
    directionsUrl: "https://maps.google.com",
  },
  {
    id: "airport",
    name: "Airport Clinical Lab",
    address: "Terminal 4, JFK International Airport, NY 11430",
    status: "open",
    statusText: "OPEN NOW",
    hours: "Daily: 24 Hours",
    phone: "+1 (800) 555-0103",
    services: ["all", "blood", "imaging", "genomics"],
    city: "Queens",
    specialNote:
      "24-Hour Emergency & Routine Diagnostics Available daily.",
    directionsUrl: "https://maps.google.com",
  },
  {
    id: "westside",
    name: "Westside Pediatric",
    address: "215 Westside Lane, Pediatric Wing, NY 10023",
    status: "open",
    statusText: "OPEN NOW",
    hours: "Mon–Sat: 08:00 AM – 06:00 PM",
    phone: "+1 (800) 555-0104",
    services: ["all", "blood"],
    city: "New York",
    directionsUrl: "https://maps.google.com",
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
      return "bg-[#e7f9ee] text-[#28a745]";
    case "opens-soon":
      return "bg-gray-100 text-gray-500";
    case "closed":
      return "bg-gray-100 text-gray-500";
  }
}
