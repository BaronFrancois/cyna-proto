import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-12">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
             <input 
                type="text" 
                placeholder="Rechercher des services Cyna..." 
                className="w-full text-4xl font-bold border-b-2 border-gray-200 py-4 focus:outline-none focus:border-blue-600 bg-transparent placeholder-gray-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
             />
             <SearchIcon className="absolute right-0 top-6 text-gray-400 w-8 h-8" />
          </div>

          <div className="flex flex-col md:flex-row gap-12">
             {/* Sidebar Filters */}
             <div className="w-full md:w-64 flex-shrink-0">
                <h3 className="font-semibold text-gray-900 mb-4">Filtrer par</h3>
                <div className="space-y-6">
                   <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Catégorie</h4>
                      <div className="space-y-2">
                        {['EDR', 'XDR', 'SOC', 'Network'].map(cat => (
                           <label key={cat} className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                              <span>{cat}</span>
                           </label>
                        ))}
                      </div>
                   </div>
                   <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Fourchette de Prix</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                         <span className="text-gray-400">0€</span>
                         <input type="range" min="0" max="1000" className="flex-grow h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                         <span className="text-gray-400">1k€+</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Results */}
             <div className="flex-grow">
                <h3 className="font-semibold text-gray-500 mb-6">{results.length} résultats trouvés</h3>
                <div className="grid grid-cols-1 gap-6">
                   {results.map(product => (
                      <div key={product.id} className="flex flex-col sm:flex-row bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                         <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="sm:ml-8 flex-grow">
                            <div className="flex justify-between items-start">
                               <div>
                                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">{product.category}</div>
                                  <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
                                  <p className="text-gray-500 text-sm mt-1">{product.shortDescription}</p>
                               </div>
                               <div className="text-right">
                                  <div className="font-semibold">{product.price}€</div>
                                  <div className="text-gray-400 text-xs">/{product.period === 'monthly' ? 'mois' : 'an'}</div>
                               </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                               <Link to={`/product/${product.id}`}>
                                  <Button size="sm" variant="outline" className="rounded-full">Voir Détails</Button>
                               </Link>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};