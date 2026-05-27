export type DonutCategory = 'all' | 'glazed' | 'cake' | 'filled' | 'specialty' | 'kolache';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<DonutCategory, 'all'>;
  emoji: string;
  gradient: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
