
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import { PRODUCTS } from './constants';

const HomePage: React.FC = () => {
  return (
    <>
      <CategoryBar />
      <main className="container mx-auto px-4 py-8 lg:py-12 animate-fade-in">
        <div className="mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-900 mb-1">
            Tortas
          </h2>
          <p className="text-gray-400 font-semibold text-sm">
            12 porciones - 21 cms de diámetro aprox
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </main>
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <Header />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      <footer className="bg-gray-100 py-16 mt-20 border-t border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex flex-col mb-6">
              <h1 className="text-2xl font-black italic tracking-tighter text-red-600">
                ALMUDENA
              </h1>
              <div className="h-1 w-16 bg-red-600 rounded-full mt-[-2px]"></div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              La mejor pastelería fina, hecha con los mejores ingredientes y mucho amor. Encuentra tortas, galletas y más.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-6 text-gray-900">Nosotros</h4>
            <ul className="text-sm text-gray-500 space-y-3">
              <li className="hover:text-red-600 cursor-pointer transition-colors">Nuestra Historia</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Trabaja con nosotros</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-6 text-gray-900">Atención</h4>
            <ul className="text-sm text-gray-500 space-y-3">
              <li className="hover:text-red-600 cursor-pointer transition-colors">Preguntas Frecuentes</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Libro de Reclamaciones</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Políticas de Privacidad</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-6 text-gray-900">Síguenos</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:border-red-600 hover:text-red-600 transition-all cursor-pointer">
                <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:border-red-600 hover:text-red-600 transition-all cursor-pointer">
                <span className="font-bold text-xs">IG</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:border-red-600 hover:text-red-600 transition-all cursor-pointer">
                <span className="font-bold text-xs">TK</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-200 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          © 2024 Almudena Pastelería S.A.C - Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
};

export default App;
