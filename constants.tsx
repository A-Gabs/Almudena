
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
    id: 'cheesecake-maracuya',
    name: 'Cheesecake de maracuyá',
    description: 'Delicioso cheesecake de maracuyá horneado sobre una base de galletas, crema de queso, decorado con detalles de chantilly y jalea de maracuyá.',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'blue-velvet',
    name: 'Blue velvet',
    description: 'Torta de tres capas de suave blue velvet, rellena con un mix de frosting, fudge casero y moras silvestres.',
    price: 119.00,
    image: 'https://i.pinimg.com/1200x/c0/e1/77/c0e177322d2ad5a714c0fc8d77057b28.jpg',
    category: 'tortas'
  },
  {
    id: 'cheesecake-frutos-rojos',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Cheesecake de frutos rojos horneado sobre una base de galletas, decorado con detalles de chantilly, mermelada artesanal y frutos rojos.',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'pie-limon',
    name: 'Pie de limón',
    description: 'Base de galleta, delicioso relleno con un toque acidito de limón.',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'red-velvet',
    name: 'Red velvet',
    description: 'Elegante torta de tres capas de suave red velvet, rellena con frosting de queso crema, fudge casero y blueberries.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'crocante-manzana',
    name: 'Crocante de manzana',
    description: 'Hecho a base de manzana en láminas con canela, cubierto de crumble.',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'tres-leches-chocolate',
    name: 'Tres leches de chocolate',
    description: 'Delicado bizcochuelo bañado en leche chocolatada, cubierto y decorado con una cremosa capa de chantilly de chocolate y coco.',
    price: 99.00,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'cheesecake-nutella',
    name: 'Cheesecake de nutella',
    description: 'Cheesecake horneado sobre una base de galletas de chocolate con crema de queso y avellanas. Decorado con detalles de crema de avellanas, fudge casero y brownies.',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1616031037011-087000171abe?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'merengado-chirimoya',
    name: 'Merengado de chirimoya',
    description: 'Discos de merengue rellenos con chirimoya sobre una capa de manjar blanco y crema chantilly.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'merengado-fresas',
    name: 'Merengado de vainilla y fresas',
    description: 'Discos de merengue rellenos con fresas sobre una capa de manjar blanco y crema chantilly.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'bruselina-fresas',
    name: 'Bruselina de chocolate & fresas',
    description: 'Crocantes discos de galleta de chocolate, rellenos con crema chantilly, fudge casero y fresas.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'dulzura-pecanas',
    name: 'Dulzura de pecanas',
    description: 'Bizcochuelo de pecanas rellenos de manjar blanco, decorado con cobertura blanca rallada y pecanas picadas.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'turron-chocolate',
    name: 'Turrón de chocolate',
    description: 'Tres capas de turrón de chocolate con crocantes trozos de brownie, relleno de nuestro fudge casero.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  },
  {
    id: 'tres-leches-clasica',
    name: 'Tres leches clásica',
    description: 'Suave bizcochuelo bañado en tres tipos de leche y decorado con fresas cubiertas en chocolate bitter.',
    price: 99.00,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
    category: 'tortas'
  }
];
