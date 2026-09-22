import React, { useState } from 'react';
import { ThemeMode, ScreenView, CreativeProject } from './types';
import { HeaderNav } from './components/HeaderNav';
import { ScreenOne } from './components/ScreenOne';
import { ScreenTwo } from './components/ScreenTwo';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { FileDown, ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('bauhaus');
  const [screenView, setScreenView] = useState<ScreenView>('all');
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const isBauhaus = theme === 'bauhaus';

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isBauhaus ? 'bg-[#f5f0e8] text-[#1a1a1a]' : 'bg-[#f7f5f6] text-[#2d2d2d]'
      }`}
    >
      {/* Top Application Navigation */}
      <HeaderNav
        currentTheme={theme}
        onThemeChange={setTheme}
        currentScreen={screenView}
        onScreenChange={setScreenView}
        onOpenContact={() => setIsContactOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
        {/* Style & Mode notice header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs no-print">
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-xs ${
                isBauhaus ? 'bg-[#ffcc00] border border-[#1a1a1a]' : 'bg-[#8b003a]'
              }`}
            />
            <span className="font-display font-bold uppercase tracking-wider">
              {isBauhaus
                ? 'Bauhaus — Neo-Brutalist Architecture Active'
                : 'Original Carmine Crimson Mockup Active'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-neutral-500">
            <span>Viewing:</span>
            <span className="font-display font-bold text-neutral-900 uppercase">
              {screenView === 'all'
                ? 'Continuous 2-Page Poster View'
                : screenView === 'screen1'
                ? 'Page 1: Experience & Education'
                : 'Page 2: Skills & Creative Works'}
            </span>
          </div>
        </div>

        {/* The Two Document Screens */}
        <div className="space-y-10 sm:space-y-12">
          {/* SCREEN 1 (PAGE 1) */}
          {(screenView === 'all' || screenView === 'screen1') && (
            <div className="relative">
              {screenView === 'all' && (
                <div className="flex items-center justify-between mb-2 px-1 text-[11px] font-display font-bold uppercase text-neutral-500 tracking-wider no-print">
                  <span>Page 01 — Experience & Profile</span>
                  <span>Screen View 1</span>
                </div>
              )}
              <ScreenOne
                theme={theme}
                onOpenContact={() => setIsContactOpen(true)}
              />
            </div>
          )}

          {/* PAGE BREAK INDICATOR (WHEN IN ALL VIEW) */}
          {screenView === 'all' && (
            <div className="relative flex items-center justify-center py-2 no-print">
              <div className="w-full border-t-2 border-dashed border-neutral-300" />
              <div
                className={`absolute px-4 py-1 text-[11px] font-display font-bold uppercase tracking-widest border ${
                  isBauhaus
                    ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-white text-[#8b003a] border-[#8b003a] shadow-xs'
                }`}
              >
                Page Separator • Screen 02 Below
              </div>
            </div>
          )}

          {/* SCREEN 2 (PAGE 2) */}
          {(screenView === 'all' || screenView === 'screen2') && (
            <div className="relative page-break">
              {screenView === 'all' && (
                <div className="flex items-center justify-between mb-2 px-1 text-[11px] font-display font-bold uppercase text-neutral-500 tracking-wider no-print">
                  <span>Page 02 — Skills, Works & Certifications</span>
                  <span>Screen View 2</span>
                </div>
              )}
              <ScreenTwo
                theme={theme}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </div>
          )}
        </div>

        {/* Bottom Quick Controls & Floating Scroll to Top */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-neutral-300/60 text-xs no-print">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-display font-bold uppercase text-xs border-2 transition-all ${
                isBauhaus
                  ? 'bg-white text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-neutral-100'
                  : 'bg-white text-[#8b003a] border-neutral-300 hover:border-[#8b003a]'
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Export Clean PDF</span>
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-display font-bold uppercase text-xs border-2 transition-all ${
                isBauhaus
                  ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-amber-400'
                  : 'bg-[#8b003a] text-white border-[#8b003a] hover:bg-[#a00043]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Gracy C</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-display font-bold uppercase border-2 transition-all ${
              isBauhaus
                ? 'bg-white text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-neutral-100'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500'
            }`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to Top</span>
          </button>
        </div>
      </main>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact & Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        theme={theme}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
