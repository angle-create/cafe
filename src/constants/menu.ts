export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'drink' | 'food' | 'dessert';
};

export const menuItems: MenuItem[] = [
  {
    id: 'coffee-1',
    name: 'ブレンドコーヒー',
    description: '厳選された豆をブレンドした、バランスの取れた味わい',
    price: 500,
    image: '/images/menu/blend-coffee.jpg',
    category: 'drink',
  },
  {
    id: 'coffee-2',
    name: 'カフェラテ',
    description: '濃厚なエスプレッソと滑らかなスチームミルクのハーモニー',
    price: 550,
    image: '/images/menu/cafe-latte.jpg',
    category: 'drink',
  },
  {
    id: 'coffee-3',
    name: 'カプチーノ',
    description: 'きめ細かい泡立ちのミルクフォームが特徴',
    price: 550,
    image: '/images/menu/cappuccino.jpg',
    category: 'drink',
  },
  {
    id: 'food-1',
    name: 'アボカドトースト',
    description: '新鮮なアボカドと季節の野菜を贅沢にトッピング',
    price: 900,
    image: '/images/menu/avocado-toast.jpg',
    category: 'food',
  },
  {
    id: 'food-2',
    name: 'クロックムッシュ',
    description: 'ベシャメルソースとチーズの濃厚な味わい',
    price: 1100,
    image: '/images/menu/croque-monsieur.jpg',
    category: 'food',
  },
  {
    id: 'food-3',
    name: 'シーザーサラダ',
    description: 'ロメインレタスと自家製ドレッシングの王道サラダ',
    price: 800,
    image: '/images/menu/caesar-salad.jpg',
    category: 'food',
  },
  {
    id: 'dessert-1',
    name: 'ガトーショコラ',
    description: '濃厚なチョコレートの風味とまろやかな口当たり',
    price: 600,
    image: '/images/menu/gateau-chocolat.jpg',
    category: 'dessert',
  },
  {
    id: 'dessert-2',
    name: 'ニューヨークチーズケーキ',
    description: 'なめらかな口当たりと程よい酸味が特徴',
    price: 650,
    image: '/images/menu/cheesecake.jpg',
    category: 'dessert',
  },
  {
    id: 'dessert-3',
    name: 'アップルパイ',
    description: 'シナモンの香り豊かな自家製アップルパイ',
    price: 600,
    image: '/images/menu/apple-pie.jpg',
    category: 'dessert',
  },
]; 