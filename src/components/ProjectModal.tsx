import React, { useState } from 'react';
import { CreativeProject, ThemeMode } from '../types';
import {
  X,
  ExternalLink,
  Layers,
  Sparkles,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Calendar,
  Users,
  Compass,
  Coffee,
  Wifi,
  Tv,
  Star
} from 'lucide-react';

interface ProjectModalProps {
  project: CreativeProject | null;
  theme: ThemeMode;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  theme,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'design-spec'>('demo');
  const [foodCategory, setFoodCategory] = useState<'all' | 'bowls' | 'specials'>('all');
  const [cartCount, setCartCount] = useState<number>(1);
  const [hotelNights, setHotelNights] = useState<number>(3);
  const [selectedRoom, setSelectedRoom] = useState<string>('ocean-suite');

  if (!project) return null;

  const isBauhaus = theme === 'bauhaus';
  const isFigmaFood = project.type === 'figma';

  const foodItems = [
    {
      id: 1,
      name: 'Organic Avocado Green Bowl',
      category: 'bowls',
      price: 12.5,
      calories: '420 kcal',
      tag: 'Chef Special',
      desc: 'Quinoa base, sliced Hass avocado, edamame, and tahini dressing.'
    },
    {
      id: 2,
      name: 'Artisan Smoked Salmon Toast',
      category: 'specials',
      price: 14.0,
      calories: '380 kcal',
      tag: 'Bestseller',
      desc: 'Sourdough bread, cream cheese, capers, fresh dill, cold smoked salmon.'
    },
    {
      id: 3,
      name: 'Mediterranean Falafel Harvest',
      category: 'bowls',
      price: 11.0,
      calories: '490 kcal',
      tag: 'Vegan',
      desc: 'Crispy herb falafels, roasted chickpeas, cucumber mint tzatziki.'
    }
  ];

  const hotelRooms = [
    {
      id: 'ocean-suite',
      name: 'Deluxe Ocean Vista Suite',
      price: 240,
      capacity: '2 Guests',
      sqft: '650 sq ft',
      highlight: 'Panoramic balcony + Private Jacuzzi'
    },
    {
      id: 'garden-villa',
      name: 'Tropical Garden Pool Villa',
      price: 360,
      capacity: '4 Guests',
      sqft: '1,200 sq ft',
      highlight: 'Private plunge pool + Butler service'
    },
    {
      id: 'zen-room',
      name: 'Zen Minimalist King',
      price: 180,
      capacity: '2 Guests',
      sqft: '450 sq ft',
      highlight: 'Hinoki wood bath + Mountain view'
    }
  ];

  const currentRoom = hotelRooms.find((r) => r.id === selectedRoom) || hotelRooms[0];

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl my-auto rounded-none overflow-hidden transition-all ${
          isBauhaus
            ? 'bg-[#fdfbf7] border-4 border-[#1a1a1a] shadow-[10px_10px_0px_#1a1a1a]'
            : 'bg-white border border-neutral-300 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b-2 ${
            isBauhaus
              ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-[#6e002d]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 border ${
                isBauhaus
                  ? 'bg-[#ffcc00] text-[#1a1a1a] border-white'
                  : 'bg-white/20 text-white border-white/30'
              }`}
            >
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-sm sm:text-base tracking-tight truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className={`p-1 border transition-colors ${
              isBauhaus
                ? 'bg-[#e63b2e] text-white border-white hover:bg-red-700'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher: Interactive Demo vs Specs */}
        <div
          className={`flex border-b text-xs font-display font-bold uppercase ${
            isBauhaus
              ? 'bg-[#f5f0e8] border-[#1a1a1a]'
              : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-5 py-2.5 flex items-center gap-1.5 transition-all ${
              activeTab === 'demo'
                ? isBauhaus
                  ? 'bg-[#ffcc00] text-[#1a1a1a] border-b-3 border-[#1a1a1a]'
                  : 'bg-white text-[#8b003a] border-b-2 border-[#8b003a]'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('design-spec')}
            className={`px-5 py-2.5 flex items-center gap-1.5 transition-all ${
              activeTab === 'design-spec'
                ? isBauhaus
                  ? 'bg-[#ffcc00] text-[#1a1a1a] border-b-3 border-[#1a1a1a]'
                  : 'bg-white text-[#8b003a] border-b-2 border-[#8b003a]'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Design Specs & Deliverables</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'demo' ? (
            <div>
              {/* Interactive Demo View */}
              {isFigmaFood ? (
                /* FOOD PROTOTYPE SIMULATOR */
                <div
                  className={`p-4 sm:p-6 border-2 rounded-none ${
                    isBauhaus
                      ? 'bg-white border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]'
                      : 'bg-neutral-50 border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-lg text-neutral-900 tracking-tight">
                          Gourmet Greens & Co.
                        </span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Open Now • 25 min delivery
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Interactive Food Ordering Prototype created in Figma
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 border font-display font-bold text-xs ${
                        isBauhaus
                          ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a]'
                          : 'bg-[#8b003a] text-white border-[#8b003a]'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{cartCount} in Bag</span>
                    </div>
                  </div>

                  {/* Filter chips */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => setFoodCategory('all')}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        foodCategory === 'all'
                          ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                      }`}
                    >
                      All Items
                    </button>
                    <button
                      onClick={() => setFoodCategory('bowls')}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        foodCategory === 'bowls'
                          ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                      }`}
                    >
                      Power Bowls
                    </button>
                    <button
                      onClick={() => setFoodCategory('specials')}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        foodCategory === 'specials'
                          ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                      }`}
                    >
                      Chef Specials
                    </button>
                  </div>

                  {/* Food items list */}
                  <div className="space-y-3">
                    {foodItems
                      .filter((item) => foodCategory === 'all' || item.category === foodCategory)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-neutral-400 transition-colors"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-display font-bold text-sm text-neutral-900">
                                {item.name}
                              </h5>
                              <span className="text-[10px] font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
                            <span className="text-[11px] font-mono text-neutral-400 mt-0.5 inline-block">
                              {item.calories}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="font-display font-bold text-base text-neutral-900">
                              ${item.price.toFixed(2)}
                            </span>
                            <button
                              onClick={() => setCartCount((prev) => prev + 1)}
                              className={`px-3 py-1.5 text-xs font-display font-bold uppercase flex items-center gap-1 border transition-all ${
                                isBauhaus
                                  ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] hover:bg-amber-300'
                                  : 'bg-[#8b003a] text-white border-[#8b003a] hover:bg-[#a00043]'
                              }`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Cart checkout footer bar */}
                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">
                      Total: ${(cartCount * 12.5).toFixed(2)} (incl. delivery)
                    </span>
                    <button
                      onClick={() => alert('Figma Prototype Interaction: Order simulated successfully!')}
                      className={`px-4 py-2 font-display font-bold text-xs uppercase border ${
                        isBauhaus
                          ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-neutral-800'
                          : 'bg-[#8b003a] text-white border-[#8b003a] hover:bg-[#72002f]'
                      }`}
                    >
                      Simulate Checkout Flow →
                    </button>
                  </div>
                </div>
              ) : (
                /* HOTEL CHAN LANDING PAGE SIMULATOR */
                <div
                  className={`p-4 sm:p-6 border-2 rounded-none ${
                    isBauhaus
                      ? 'bg-white border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]'
                      : 'bg-neutral-50 border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-lg text-neutral-900 tracking-tight">
                          Hotel Chan — Seaside Retreat
                        </span>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Clean, mobile-first responsive landing page developed with HTML, CSS, JS
                      </p>
                    </div>

                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200">
                      98/100 Lighthouse
                    </span>
                  </div>

                  {/* Room selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                    {hotelRooms.map((room) => (
                      <button
                        key={room.id}
                        onClick={() => setSelectedRoom(room.id)}
                        className={`p-3 text-left border transition-all ${
                          selectedRoom === room.id
                            ? isBauhaus
                              ? 'bg-[#fffde6] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                              : 'bg-[#fff2f5] border-2 border-[#8b003a]'
                            : 'bg-white border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <h6 className="font-display font-bold text-xs text-neutral-900 truncate">
                          {room.name}
                        </h6>
                        <p className="text-xs font-bold text-[#8b003a] mt-1">
                          ${room.price} <span className="text-[10px] text-neutral-500 font-normal">/ night</span>
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-0.5">{room.sqft} • {room.capacity}</p>
                      </button>
                    ))}
                  </div>

                  {/* Active room details & amenities */}
                  <div className="p-3.5 bg-neutral-100/70 border border-neutral-200 mb-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-display font-bold text-neutral-900">
                        {currentRoom.name}
                      </span>
                      <span className="text-neutral-600 font-medium">
                        Highlight: {currentRoom.highlight}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-[11px] text-neutral-600 mt-2">
                      <span className="flex items-center gap-1">
                        <Wifi className="w-3 h-3 text-neutral-500" /> High-speed WiFi
                      </span>
                      <span className="flex items-center gap-1">
                        <Coffee className="w-3 h-3 text-neutral-500" /> Complimentary Breakfast
                      </span>
                      <span className="flex items-center gap-1">
                        <Tv className="w-3 h-3 text-neutral-500" /> 4K Smart TV
                      </span>
                      <span className="flex items-center gap-1">
                        <Compass className="w-3 h-3 text-neutral-500" /> Guided Ocean Excursion
                      </span>
                    </div>
                  </div>

                  {/* Booking calculator */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-200">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-neutral-600">Nights:</span>
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => setHotelNights((n) => Math.max(1, n - 1))}
                          className="px-2 py-1 bg-neutral-200 hover:bg-neutral-300 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-mono font-bold">{hotelNights}</span>
                        <button
                          onClick={() => setHotelNights((n) => n + 1)}
                          className="px-2 py-1 bg-neutral-200 hover:bg-neutral-300 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-display font-bold text-neutral-900">
                        Total: ${(currentRoom.price * hotelNights).toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => alert(`Hotel Chan Reservation Demo: ${hotelNights} nights selected in ${currentRoom.name}!`)}
                      className={`px-4 py-2 font-display font-bold text-xs uppercase border ${
                        isBauhaus
                          ? 'bg-[#0055ff] text-white border-[#1a1a1a] hover:bg-blue-700'
                          : 'bg-[#8b003a] text-white border-[#8b003a] hover:bg-[#72002f]'
                      }`}
                    >
                      Instant Reserve →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* DESIGN SPECIFICATION TAB */
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-white border border-neutral-200">
                <h4 className="font-display font-bold text-sm text-neutral-900 mb-1">
                  Project Overview & Scope
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {project.details.summary}
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200">
                <h4 className="font-display font-bold text-sm text-neutral-900 mb-2">
                  Key Technical & Design Highlights
                </h4>
                <ul className="space-y-1.5 text-neutral-700">
                  {project.details.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-white border border-neutral-200">
                  <span className="font-display font-bold uppercase text-[10px] text-neutral-500">
                    Role & Responsibility
                  </span>
                  <p className="font-display font-bold text-sm text-neutral-900 mt-1">
                    {project.details.role}
                  </p>
                </div>
                <div className="p-3.5 bg-white border border-neutral-200">
                  <span className="font-display font-bold uppercase text-[10px] text-neutral-500">
                    Tools & Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-neutral-100 text-neutral-800 text-[10px] font-bold border border-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          className={`px-5 py-3 border-t flex items-center justify-between text-xs ${
            isBauhaus ? 'bg-[#f5f0e8] border-[#1a1a1a]' : 'bg-neutral-100 border-neutral-200'
          }`}
        >
          <span className="text-neutral-500 font-mono text-[11px]">
            Designed by Gracy C • Visual & UI Designer
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 font-display font-bold text-xs uppercase border border-neutral-400 bg-white hover:bg-neutral-100"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
