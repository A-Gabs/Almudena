
import { Product, Category, NavItem } from './types';

export const PRIMARY_RED = '#E30613';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nuestra carta', hasSubmenu: true },
  { label: 'Nosotros', hasSubmenu: false },
  { label: 'Catering', hasSubmenu: true },
  { label: 'Nuestras casas', hasSubmenu: true },
  { label: 'Contacto', hasSubmenu: false },
];

export const CATEGORIES: Category[] = [
  { id: 'navidad', label: 'Navidad' },
  { id: 'cucharear', label: 'Para Cucharear' },
  { id: 'kekes', label: 'Kekes Y Galletas' },
  { id: 'engreido', label: 'Para Tu Engreído' },
  { id: 'tortas', label: 'Tortas', active: true },
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'minimaria', label: 'Minimaria' },
  { id: 'porciones', label: 'Porciones' },
  { id: 'catering', label: 'Catering' },
];

export const PRODUCTS: Product[] = [
  {
    id: '17',
    name: 'Cheesecake de maracuyá',
    description: 'Delicioso cheesecake de maracuyá horneado sobre una base de galletas, crema de queso, decorado con detalles de chantilly y jalea de maracuyá.',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: '15',
    name: 'Blue velvet',
    description: 'Torta de tres capas de suave blue velvet, rellena con un mix de frosting, fudge casero y moras silvestres.',
    price: 119.00,
    image: 'https://i.pinimg.com/1200x/c0/e1/77/c0e177322d2ad5a714c0fc8d77057b28.jpg',
    category: 'tortas'
  },
  {
    id: '1',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Cheesecake de frutos rojos horneado sobre una base de galletas, decorado con detalles de chantilly, mermelada artesanal y frutos rojos.',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: '2',
    name: 'Pie de limón',
    description: 'Base de galleta, delicioso relleno con un toque acidito de limón.',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: '16',
    name: 'Red velvet',
    description: 'Elegante torta de tres capas de suave red velvet, rellena con frosting de queso crema, fudge casero y blueberries.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  }
];
