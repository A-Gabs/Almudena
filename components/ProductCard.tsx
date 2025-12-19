
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const isBlueVelvet = product.name === 'Blue velvet';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group border border-gray-100">
      <div className="relative overflow-hidden aspect-[1/1] sm:aspect-[4/3] lg:aspect-[1/1]">
        <Link to={`/producto/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </Link>
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:scale-110 transition-transform z-10"
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-600 text-red-600' : 'text-red-500 drop-shadow-sm'}`} />
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-600 text-[13px] leading-snug mb-4 flex-1 line-clamp-4 font-medium">
          {product.description}
        </p>
        
        <Link to={`/producto/${product.id}`}>
          <h3 className="font-bold text-[15px] text-gray-900 mb-6 min-h-[2.5rem] leading-tight hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-auto gap-2">
          <span className="text-lg font-bold text-[#E30613] whitespace-nowrap">
            S/ {product.price.toFixed(2)}
          </span>
          <Link 
            to={`/producto/${product.id}`}
            className="border border-red-500 text-red-500 px-7 py-1.5 rounded-full font-bold text-[13px] hover:bg-red-500 hover:text-white transition-all duration-300 flex-shrink-0 text-center"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
