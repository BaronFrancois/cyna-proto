import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { CheckCircle2, ChevronRight, Server, Shield, Zap } from 'lucide-react';

interface ProductDetailProps {
  addToCart: (productId: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) {
    return <div className="p-20 text-center">Produit introuvable. <Link to="/catalog" className="text-blue-600">Retour.</Link></div>;
  }

  return (
    <div className="bg-white">
      {/* Sticky Product Nav */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 py-3">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-gray-900">{product.name}</h2>
            <div className="flex items-center space-x-4">
               <span className="text-sm text-gray-500 hidden sm:inline">Dès {product.price}€/{product.period === 'monthly' ? 'mois' : 'an'}</span>
               <Button size="sm" onClick={() => addToCart(product.id)}>S'abonner</Button>
            </div>
         </div>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-20 text-center px-4">
         <div className="mb-6 inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
             <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nouvelle Version</span>
         </div>
         <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">{product.name}</h1>
         <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 font-light">
           {product.shortDescription}
         </p>
         
         <div className="mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ce que vous obtenez.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <Zap className="text-blue-600 w-8 h-8 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Temps Réel</h4>
                  <p className="text-gray-500">Analyse instantanée de chaque paquet et processus.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <Shield className="text-green-600 w-8 h-8 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Sécurisé</h4>
                  <p className="text-gray-500">Chiffrement bancaire pour tous vos logs.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <Server className="text-purple-600 w-8 h-8 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Évolutif</h4>
                  <p className="text-gray-500">Grandit automatiquement avec votre infrastructure.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Spécifications techniques.</h3>
            <div className="space-y-4">
               {product.features.map((feature, idx) => (
                 <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">{feature}</span>
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                 </div>
               ))}
               <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Déploiement</span>
                    <span className="text-gray-500 text-sm">Cloud Native</span>
               </div>
               <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Support</span>
                    <span className="text-gray-500 text-sm">Prioritaire 24/7</span>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-black text-white text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Mettez à niveau votre sécurité.</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Obtenez {product.name} pour seulement <span className="text-white font-semibold">{product.price}€</span> /{product.period === 'monthly' ? 'mois' : 'an'}.
            </p>
            <div className="flex justify-center space-x-4">
               <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={() => addToCart(product.id)}>Ajouter au Panier</Button>
            </div>
         </div>
      </section>
    </div>
  );
};