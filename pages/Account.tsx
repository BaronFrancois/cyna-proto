import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_USER, PRODUCTS } from '../constants';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Button } from '../components/Button';
import { Settings, Download, CreditCard, Shield } from 'lucide-react';

const data = [
  { name: 'Lun', threats: 2 },
  { name: 'Mar', threats: 5 },
  { name: 'Mer', threats: 1 },
  { name: 'Jeu', threats: 8 },
  { name: 'Ven', threats: 3 },
  { name: 'Sam', threats: 0 },
  { name: 'Dim', threats: 1 },
];

export const Account: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
               <h1 className="text-3xl font-bold text-gray-900">Bienvenue, {MOCK_USER.name}</h1>
               <p className="text-gray-500">{MOCK_USER.company}</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
               <Button variant="outline" size="sm" className="bg-white">
                  <Settings size={16} className="mr-2" /> Paramètres
               </Button>
               <Button size="sm">Gérer le plan</Button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-2 space-y-8">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-6 flex items-center">
                     <Shield className="mr-2 text-blue-600" size={20} /> Activité de Prévention des Menaces
                  </h3>
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                           <defs>
                              <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                           <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                           <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                           <Area type="monotone" dataKey="threats" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorThreats)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Abonnements Actifs</h3>
                  <div className="space-y-4">
                     {PRODUCTS.slice(0, 2).map(prod => (
                        <div key={prod.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                           <div className="flex items-center space-x-4">
                              <img src={prod.image} alt={prod.name} className="w-12 h-12 rounded-lg object-cover" />
                              <div>
                                 <div className="font-medium text-gray-900">{prod.name}</div>
                                 <div className="text-xs text-gray-500">Renouvellement le 24 Oct 2023</div>
                              </div>
                           </div>
                           <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Actif</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-8">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Liens Rapides</h3>
                  <div className="space-y-2">
                     <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 text-sm font-medium flex items-center justify-between group transition-colors">
                        <span>Facturation & Factures</span>
                        <CreditCard size={16} className="text-gray-400 group-hover:text-gray-900" />
                     </button>
                     <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 text-sm font-medium flex items-center justify-between group transition-colors">
                        <span>Télécharger Agent (macOS)</span>
                        <Download size={16} className="text-gray-400 group-hover:text-gray-900" />
                     </button>
                     <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 text-sm font-medium flex items-center justify-between group transition-colors">
                        <span>Télécharger Agent (Windows)</span>
                        <Download size={16} className="text-gray-400 group-hover:text-gray-900" />
                     </button>
                  </div>
               </div>
               
               <div className="bg-blue-600 p-6 rounded-3xl text-white shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Besoin d'aide ?</h3>
                  <p className="text-blue-100 text-sm mb-6">Notre équipe support 24/7 est prête à vous aider pour tout problème de configuration.</p>
                  <Link to="/support">
                     <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20 w-full border-none">Contacter le Support</Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};