
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [dedication, setDedication] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') setQuantity(q => q + 1);
    else if (quantity > 1) setQuantity(q => q - 1);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-800 font-medium mb-8 hover:text-red-600 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm">Atrás</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Image Gallery */}
        <div className="relative group">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
            
            {/* Gallery Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Favorite Button */}
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-6 right-6 p-1 z-10"
            >
              <Heart className={`w-8 h-8 ${isLiked ? 'fill-red-600 text-red-600' : 'text-red-500 drop-shadow-md'}`} />
            </button>

            {/* Dots Pagination */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col space-y-8 pt-2">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-700 text-[15px] leading-relaxed">
            {product.description}
          </p>

          <div className="text-2xl lg:text-3xl font-bold">
            <span className="text-red-600">Precio: </span>
            <span className="text-red-600">S/ {product.price.toFixed(2)}</span>
          </div>

          {/* Dedication Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900 text-sm">¿deseas colocar una dedicatoria?</h4>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-[10px] font-bold text-gray-600">0/1</span>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Dedicatoria"
                maxLength={30}
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-red-100 placeholder:text-gray-300 transition-all shadow-sm"
              />
            </div>
            <p className="text-[11px] text-gray-400 font-medium">máximo 30 caracteres</p>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <div className="flex items-center border border-gray-200 rounded-full px-2 py-1">
              <button 
                onClick={() => handleQuantityChange('dec')}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-10 text-center font-bold text-lg text-gray-900">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('inc')}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <button className="flex-1 w-full sm:w-auto bg-[#E30613] text-white rounded-full py-5 px-8 flex items-center justify-between hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 group">
              <span className="font-bold text-sm tracking-wide">S/ {(product.price * quantity).toFixed(2)}</span>
              <span className="font-bold text-sm tracking-wide uppercase">Endulzar mi carrito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
