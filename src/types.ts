export interface RolePhrase {
  name: string;
  jpName: string;
  phrases: string[];
}

export interface Activity {
  id: string;
  title: string;
  jpTitle: string;
  categoryId: string;
  category: string;
  jpCategory: string;
  description: string;
  jpDescription: string;
  steps: string[];
  roles: RolePhrase[];
}

export interface Category {
  id: string;
  name: string;
  jpName: string;
  iconName: string;
}
