import React from 'react';
import { ThemeMode, ScreenView } from '../types';
import { Printer, Mail, Layers, Eye, Sparkles, Share2 } from 'lucide-react';

interface HeaderNavProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  currentScreen: ScreenView;
  onScreenChange: (screen: ScreenView) => void;
  onOpenContact: () => void;
  onPrint: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentTheme,
  onThemeChange,
  currentScreen,
  onScreenChange,
  onOpenContact,
  onPrint,
}) => {
  const [copiedShare, setCopiedShare] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const isBauhaus = currentTheme === 'bauhaus';

  return (
    <header
      id="main-app-header"
      className={`sticky top-0 z-40 w-full border-b-2 px-4 py-3 transition-colors no-print ${
        isBauhaus
          ? 'bg-[#f5f0e8] border-[#1a1a1a] text-[#1a1a1a]'
          : 'bg-[#8b003a] border-[#6e002d] text-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand / Logo badge */}
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 flex items-center justify-center font-display font-bold text-sm border-2 ${
              isBauhaus
                ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                : 'bg-white text-[#8b003a] border-white shadow'
            }`}
          >
            GC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-base uppercase">
                Gracy C
              </span>
              <span
                className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 border ${
                  isBauhaus
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-[#fff2f5] text-[#8b003a] border-[#fff2f5]'
                }`}
              >
                Visual & UI
              </span>
            </div>
            <p
              className={`text-xs ${
                isBauhaus ? 'text-neutral-600' : 'text-pink-100'
              }`}
            >
              Interactive Portfolio & Resume Architecture
            </p>
          </div>
        </div>

        {/* Screen Switcher */}
        <div className="flex items-center gap-1.5 bg-black/5 p-1 rounded-sm border border-current/10">
          <button
            id="view-all-screens-btn"
            onClick={() => onScreenChange('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-bold uppercase transition-all ${
              currentScreen === 'all'
                ? isBauhaus
                  ? 'bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffcc00]'
                  : 'bg-white text-[#8b003a] shadow font-extrabold'
                : 'hover:bg-black/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Both Pages</span>
          </button>
          <button
            id="view-screen-1-btn"
            onClick={() => onScreenChange('screen1')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-bold uppercase transition-all ${
              currentScreen === 'screen1'
                ? isBauhaus
                  ? 'bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffcc00]'
                  : 'bg-white text-[#8b003a] shadow font-extrabold'
                : 'hover:bg-black/10'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Page 1: Experience</span>
          </button>
          <button
            id="view-screen-2-btn"
            onClick={() => onScreenChange('screen2')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-bold uppercase transition-all ${
              currentScreen === 'screen2'
                ? isBauhaus
                  ? 'bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffcc00]'
                  : 'bg-white text-[#8b003a] shadow font-extrabold'
                : 'hover:bg-black/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Page 2: Skills & Works</span>
          </button>
        </div>

        {/* Aesthetic Theme Switcher & Actions */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {/* Theme Toggle Button */}
          <div className="flex items-center border-2 border-current/30 p-0.5">
            <button
              id="theme-bauhaus-btn"
              onClick={() => onThemeChange('bauhaus')}
              title="Bauhaus — Neo-Brutalist Theme"
              className={`px-2.5 py-1 text-xs font-display font-bold uppercase flex items-center gap-1 transition-all ${
                isBauhaus
                  ? 'bg-[#ffcc00] text-[#1a1a1a] border border-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] inline-block"></span>
              <span>Bauhaus</span>
            </button>
            <button
              id="theme-carmine-btn"
              onClick={() => onThemeChange('carmine')}
              title="Original Carmine Crimson Theme (from mockup screenshot)"
              className={`px-2.5 py-1 text-xs font-display font-bold uppercase flex items-center gap-1 transition-all ${
                !isBauhaus
                  ? 'bg-white text-[#8b003a] border border-[#8b003a] shadow-[1px_1px_0px_rgba(0,0,0,0.2)] font-extrabold'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#8b003a] inline-block"></span>
              <span>Carmine</span>
            </button>
          </div>

          {/* Print button */}
          <button
            id="print-resume-btn"
            onClick={onPrint}
            title="Print or Save Resume as PDF"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-bold uppercase border-2 transition-all ${
              isBauhaus
                ? 'bg-white text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-neutral-100'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/40'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Share link button */}
          <button
            id="share-link-btn"
            onClick={handleShare}
            title="Copy link to clipboard"
            className={`p-1.5 text-xs border-2 transition-all ${
              isBauhaus
                ? 'bg-white text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-neutral-100'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/40'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* Contact button */}
          <button
            id="open-contact-modal-btn"
            onClick={onOpenContact}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-display font-bold uppercase border-2 transition-all ${
              isBauhaus
                ? 'bg-[#0055ff] text-white border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#0044cc]'
                : 'bg-white text-[#8b003a] border-white shadow hover:bg-pink-50'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>

      {copiedShare && (
        <div className="fixed bottom-4 right-4 z-50 bg-[#1a1a1a] text-white text-xs px-3 py-2 font-display font-bold border-2 border-white shadow-[3px_3px_0px_#ffcc00] animate-bounce">
          Link copied to clipboard!
        </div>
      )}
    </header>
  );
};
