export type Experience = {
  value: string;
  role: string;
  company: string;
  period: string;
  impact: string;
  detail: string;
  tags: string[];
};

type ResourceLink = {
  label: string;
  href: string;
  kind?: "activity" | "secondary";
};

export type EducationGroup = {
  title: string;
  description: string;
  items: {
    name: string;
    organization: string;
    detail: string;
    meta: string;
    status: string;
    badges?: string[];
    links?: ResourceLink[];
  }[];
};

export type StackGroup = {
  title: string;
  description: string;
  primary: string[];
  secondary: string[];
};
