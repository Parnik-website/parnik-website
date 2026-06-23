export type NavItem = {
  label: string;
  href: string;
};

export type ProductCategory = {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon?: string;
};

export type Product = {
  id: string;
  title: string;
  category: string;
  partNumber?: string;
  description?: string;
  specs?: Record<string, string>;
};
