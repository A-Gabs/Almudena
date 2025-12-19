
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === id);
  }, [id]);

  const [quantity, setQuantity] = useState(1);
  const [dedication, setDedication] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <Link to="/" className="text-red-600 font-bold hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') setQuantity(q => q + 1);
    else if (quantity > 1) setQuantity(q => q - 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Lado Izquierdo: Imagen y Galería */}
        <div className="relative group">
          {/* Botón atrás flotante en móvil o superior */}
          <button 
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md lg:hidden"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
            
            {/* Flechas de navegación (estilo carrusel de la imagen) */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronLeft className="w-6 h-6 text-gray-400" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Like button similar a la captura */}
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-6 right-6 p-2 bg-transparent z-10"
            >
              <Heart className={`w-8 h-8 drop-shadow-md ${isLiked ? 'fill-red-600 text-red-600' : 'text-red-500'}`} />
            </button>

            {/* Puntos de paginación */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Información */}
        <div className="flex flex-col space-y-6 lg:space-y-8 pt-4">
          <Link 
            to="/"
            className="hidden lg:flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Atrás
          </Link>

          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-red-600">Precio: S/ {product.price.toFixed(2)}</span>
          </div>

          {/* Sección Dedicatoria fiel a la imagen */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-gray-900 text-[13px] uppercase tracking-wide">
                ¿deseas colocar una dedicatoria?
              </h4>
              <span className="bg-gray-200 px-2.5 py-0.5 rounded-lg text-[10px] font-black text-gray-500">
                {dedication.length > 0 ? '1/1' : '0/1'}
              </span>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Dedicatoria"
                maxLength={30}
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-200 placeholder:text-gray-300 transition-all shadow-sm"
              />
            </div>
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tighter">
              máximo 30 caracteres
            </p>
          </div>

          {/* Selector de Cantidad y Botón de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <div className="flex items-center border-2 border-gray-100 rounded-full px-2 py-1 bg-white">
              <button 
                onClick={() => handleQuantityChange('dec')}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <Minus className="w-4 h-4" />
                </div>
              </button>
              <span className="w-10 text-center font-black text-xl text-gray-900">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('inc')}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            </div>

            <button className="flex-1 w-full bg-[#E30613] text-white rounded-full py-5 px-8 flex items-center justify-between hover:bg-red-700 transition-all shadow-xl hover:shadow-red-200 active:scale-[0.98]">
              <span className="font-bold text-[15px]">S/ {(product.price * quantity).toFixed(2)}</span>
              <span className="font-black text-[13px] uppercase tracking-wider">Endulzar mi carrito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
