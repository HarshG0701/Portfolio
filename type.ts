
export interface NavItem {
  id: string;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  details: string;
}
