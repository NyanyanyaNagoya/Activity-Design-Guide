/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Search } from 'lucide-react';
import { activities, categories } from './data';
import { Activity } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('adg_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('adg_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const filteredActivities = activities.filter(a => {
    if (showFavorites && !favorites.includes(a.id)) return false;
    if (!showFavorites && selectedCategory && a.categoryId !== selectedCategory) return false;
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return a.title.toLowerCase().includes(q) 
        || a.description.toLowerCase().includes(q)
        || a.jpTitle.includes(q);
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9F8F6] text-[#1C1C1C] font-sans relative overflow-x-hidden">
      {/* Background Graphic Accent */}
      <div className="fixed top-0 right-0 w-1/3 h-full bg-[#EAE7E2] opacity-50 pointer-events-none z-0 hidden lg:block"></div>

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 lg:w-72 xl:w-80 border-r border-[#1C1C1C]/10 flex flex-col pt-8 md:h-screen md:sticky md:top-0 z-10 shrink-0 bg-[#F9F8F6]">
        <div className="px-8 pb-8 border-b border-[#1C1C1C]/10">
          <h1 className="text-[clamp(1.4rem,6.5vw,2.25rem)] md:text-[1.25rem] lg:text-[1.5rem] xl:text-3xl font-serif italic tracking-tight text-[#2D2926] leading-tight whitespace-nowrap xl:whitespace-normal">
            Activity Design Guide
          </h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-6 md:gap-6">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-6">
            <button
              onClick={() => { setSelectedCategory(null); setShowFavorites(false); }}
              className={`text-[11px] uppercase tracking-widest font-bold text-left transition-colors flex items-center ${
                selectedCategory === null && !showFavorites
                  ? 'text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 w-max' 
                  : 'text-[#8C8279] hover:text-[#1C1C1C]'
              }`}
            >
              <span>List of Methods</span>
            </button>
            
            <button
              onClick={() => { setSelectedCategory(null); setShowFavorites(true); }}
              className={`text-[11px] uppercase tracking-widest font-bold text-left transition-colors flex items-center gap-2 ${
                showFavorites 
                  ? 'text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 w-max' 
                  : 'text-[#8C8279] hover:text-[#1C1C1C]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showFavorites ? 'fill-[#1C1C1C]' : ''}`} />
              <span>Favorites</span>
            </button>
          </div>
          
          <div className={`mt-4 md:mt-0 ${showFavorites ? 'hidden md:block' : ''}`}>
            <div className="flex flex-col gap-5">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => { setSelectedCategory(category.id); setShowFavorites(false); }}
                  className={`group flex text-left transition-colors ${
                    selectedCategory === category.id 
                      ? 'text-[#1C1C1C]' 
                      : 'text-[#8C8279] hover:text-[#1C1C1C]'
                  }`}
                >
                  <span className={`text-[11px] uppercase tracking-widest font-bold ${
                    selectedCategory === category.id ? 'border-b border-[#1C1C1C] pb-0.5 w-max' : ''
                  }`}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto relative z-10 w-full overflow-x-hidden">
        <header className="mb-4 xl:mb-12 border-b-0 xl:border-b border-[#1C1C1C]/10 pb-0 xl:pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-4 xl:mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C8279] mb-2">
                {showFavorites ? 'Your Collection' : (selectedCategory ? 'Selected Section' : 'Overview')}
              </span>
              <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-serif italic tracking-tight text-[#2D2926] whitespace-nowrap">
                {showFavorites 
                  ? 'Favorites'
                  : (selectedCategory 
                      ? categories.find(c => c.id === selectedCategory)?.name 
                      : 'All Activities')}
              </h2>
            </div>
            
            <div className="relative w-full md:w-48 lg:w-64 xl:w-80 shrink-0">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 pl-8 pr-4 text-sm font-serif italic text-[#1C1C1C] placeholder:text-[#8C8279]/50 focus:outline-none focus:border-[#1C1C1C] transition-colors"
              />
              <Search className="w-4 h-4 text-[#8C8279] absolute left-0 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="group relative cursor-pointer bg-white/40 border border-[#1C1C1C]/10 p-8 flex flex-col transition-all duration-300 hover:bg-white/80 hover:shadow-sm scale-[1.03] md:scale-100"
              >
                <div className="absolute top-6 right-6 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(activity.id);
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      favorites.includes(activity.id) ? 'text-[#1C1C1C]' : 'text-[#8C8279] hover:text-[#1C1C1C]'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(activity.id) ? 'fill-[#1C1C1C]' : ''}`} />
                  </button>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-serif leading-tight text-[#2D2926] mb-2 pr-10">{activity.title}</h3>
                <p className="text-sm text-[#8C8279] mb-6 font-serif italic">{activity.jpTitle}</p>
                
                <p className="text-[16px] md:text-sm text-[#5E5852] leading-relaxed line-clamp-3 mt-auto">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Footer Decorative */}
        <footer className="mt-16 pt-8 border-t border-[#1C1C1C]/10 flex justify-between items-end text-[#8C8279] pb-8 md:pb-0">
          <div className="text-[10px] uppercase tracking-[0.2em]">
            Copyright © 2026 Albert Pai. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Activity Detail Modal / Overlay */}
      <AnimatePresence>
        {selectedActivity && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="fixed inset-0 bg-[#F9F8F6]/90 backdrop-blur-sm z-40"
            />
            
            {/* Detail Pane / Drawer */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="fixed inset-y-0 right-0 w-full max-w-4xl bg-[#F9F8F6] shadow-2xl z-50 overflow-y-auto border-l border-[#1C1C1C]/10"
            >
              <div className="sticky top-0 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#1C1C1C]/10 px-8 lg:px-12 py-6 flex items-center justify-between z-10">
                <span className="text-[11px] md:text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C8279]">Activity Details</span>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => toggleFavorite(selectedActivity.id)}
                    className={`transition-colors flex items-center gap-2 text-[11px] md:text-[10px] uppercase tracking-widest font-bold ${
                      favorites.includes(selectedActivity.id) ? 'text-[#1C1C1C]' : 'text-[#8C8279] hover:text-[#1C1C1C]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(selectedActivity.id) ? 'fill-[#1C1C1C]' : ''}`} />
                    <span className="hidden sm:inline">{favorites.includes(selectedActivity.id) ? 'Saved' : 'Save'}</span>
                  </button>
                  <div className="w-[1px] h-4 bg-[#1C1C1C]/10"></div>
                  <button 
                    onClick={() => setSelectedActivity(null)}
                    className="text-[#8C8279] hover:text-[#1C1C1C] transition-colors"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>
              </div>

              <div className="p-8 lg:p-16 flex flex-col gap-10">
                
                <section className="flex flex-col">
                  <div className="mb-10">
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.9] mb-4 text-[#1C1C1C]">{selectedActivity.title}</h2>
                    <p className="text-[19px] md:text-lg text-[#8C8279] font-serif italic leading-snug">
                      {selectedActivity.jpTitle}
                    </p>
                  </div>
                  
                  <div className="p-6 md:p-8 border border-[#1C1C1C]/10 bg-white/40">
                    <p className="text-[21px] md:text-2xl font-sans text-[#2D2926] leading-snug mb-4">{selectedActivity.description}</p>
                    <p className="text-[15px] md:text-sm text-[#5E5852]">{selectedActivity.jpDescription}</p>
                  </div>
                </section>

                <section>
                  <h4 className="text-[11px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#1C1C1C] border-b border-[#1C1C1C] pb-2 mb-8">
                    Implementation Steps
                  </h4>
                  <div className="flex flex-col gap-6">
                    {selectedActivity.steps.map((step, idx) => (
                      <div key={idx} className="group">
                        <div className="text-[12px] md:text-[11px] font-bold tracking-tighter mb-2 flex items-center gap-2 text-[#1C1C1C]">
                          <span className="w-6 h-[2px] shrink-0 bg-[#1C1C1C]"></span>
                          STEP {idx + 1}
                        </div>
                        <p className="text-[15px] md:text-sm text-[#5E5852] leading-snug">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-[11px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#1C1C1C] border-b border-[#1C1C1C] pb-2 mb-8">
                    Phrasing Guide
                  </h4>
                  
                  <div className="flex flex-col gap-8">
                    {selectedActivity.roles.map((role, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                        <div className="w-full md:w-32 flex-shrink-0">
                          <span className="text-[13px] md:text-xs font-bold uppercase tracking-widest text-[#A67C52] block mb-1">{role.name}</span>
                          <span className="text-[12px] md:text-[11px] uppercase tracking-wider text-[#8C8279]">{role.jpName}</span>
                        </div>
                        <div className="flex-1 md:border-l border-[#1C1C1C]/10 md:pl-8 space-y-3">
                          {role.phrases.map((phrase, pIdx) => (
                            <p key={pIdx} className="text-[15px] md:text-sm text-[#5E5852] leading-snug">
                              "{phrase}"
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
