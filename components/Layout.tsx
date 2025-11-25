import React from 'react';
import { ShoppingBag, Search, Menu, User, Globe, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, cartCount }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      {/* Sticky Blur Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                </div>
                <span className="font-semibold text-xl tracking-tight text-gray-900">Cyna</span>
              </Link>
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <Link to="/catalog" className={isActive('/catalog')}>Solutions</Link>
                <Link to="/search" className={isActive('/search')}>Recherche</Link>
                <Link to="/support" className={isActive('/support')}>Support</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
               <div className="hidden sm:flex items-center text-xs text-gray-500 space-x-1 cursor-pointer hover:text-gray-800 transition-colors">
                  <Globe size={14} />
                  <span>FR</span>
                  <ChevronDown size={10} />
               </div>
               <Link to="/search" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Search size={20} />
               </Link>
               <Link to="/cart" className="relative text-gray-500 hover:text-gray-900 transition-colors">
                  <ShoppingBag size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
               </Link>
               <Link to="/account" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <User size={20} />
               </Link>
               <button className="md:hidden text-gray-500">
                 <Menu size={24} />
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Acheter & Découvrir</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li><Link to="/catalog" className="hover:underline">Boutique</Link></li>
                <li><Link to="/catalog" className="hover:underline">Protection Mac</Link></li>
                <li><Link to="/catalog" className="hover:underline">Sécurité Cloud</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Compte</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li><Link to="/account" className="hover:underline">Gérer mon ID</Link></li>
                <li><Link to="/account" className="hover:underline">Compte Cyna</Link></li>
                <li><Link to="/account" className="hover:underline">iCloud.com</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Valeurs Cyna</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li><a href="#" className="hover:underline">Confidentialité</a></li>
                <li><a href="#" className="hover:underline">Accessibilité</a></li>
                <li><a href="#" className="hover:underline">Environnement</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">À propos de Cyna</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li><a href="#" className="hover:underline">Newsroom</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Carrières</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">Copyright © 2024 Cyna Inc. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-xs text-gray-600">
              <a href="#" className="hover:underline border-r border-gray-300 pr-4">Confidentialité</a>
              <a href="#" className="hover:underline border-r border-gray-300 pr-4">Conditions d'utilisation</a>
              <a href="#" className="hover:underline">Ventes et Remboursements</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};