import React from 'react';
import {
  designTools,
  designSkills,
  businessTools,
  creativeProjects,
  certifications,
  languages
} from '../data/resumeData';
import { ThemeMode, CreativeProject } from '../types';
import {
  Check,
  CheckCircle,
  ExternalLink,
  ShoppingCart,
  FileText,
  Sparkles,
  ArrowUpRight,
  Eye,
  Award
} from 'lucide-react';

interface ScreenTwoProps {
  theme: ThemeMode;
  onSelectProject: (project: CreativeProject) => void;
}

export const ScreenTwo: React.FC<ScreenTwoProps> = ({
  theme,
  onSelectProject,
}) => {
  const isBauhaus = theme === 'bauhaus';

  return (
    <article
      id="screen-page-2"
      className={`w-full max-w-[860px] mx-auto overflow-hidden transition-all print-container ${
        isBauhaus
          ? 'bg-[#fdfbf7] border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a]'
          : 'bg-white border border-neutral-200 shadow-xl'
      }`}
    >
      {/* ========================================================================= */}
      {/* 1. HEADER SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-2-header"
        className={`relative overflow-hidden p-6 sm:p-7 select-none transition-colors ${
          isBauhaus
            ? 'bg-[#1a1a1a] text-white border-b-4 border-[#1a1a1a]'
            : 'bg-[#8b003a] text-white border-b border-[#6e002d]'
        }`}
      >
        {/* Dot pattern background texture */}
        <div className="absolute inset-0 dot-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  isBauhaus ? 'bg-[#ffcc00]' : 'bg-pink-300'
                }`}
              />
              <span
                className={`text-[11px] sm:text-xs font-display font-bold tracking-widest uppercase ${
                  isBauhaus ? 'text-[#ffcc00]' : 'text-pink-200'
                }`}
              >
                SKILLS & CERTIFICATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
              Tools & Skills
            </h2>
          </div>

          <div
            className={`px-3 py-1 text-xs font-display font-bold uppercase tracking-wider border ${
              isBauhaus
                ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#ffffff] shadow-[2px_2px_0px_#ffffff]'
                : 'bg-white/10 text-white border-white/30 backdrop-blur-sm'
            }`}
          >
            Capabilities Matrix
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SKILLS SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-2-skills"
        className={`flex border-b ${
          isBauhaus ? 'border-[#1a1a1a]' : 'border-neutral-200'
        }`}
      >
        {/* Left vertical ribbon */}
        <div
          className={`w-10 sm:w-12 shrink-0 flex items-center justify-center font-display font-black text-[11px] sm:text-xs tracking-widest uppercase select-none ${
            isBauhaus
              ? 'bg-[#ffcc00] text-[#1a1a1a] border-r-3 border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-r border-[#8b003a]'
          }`}
        >
          <span className="writing-mode-vertical py-6 whitespace-nowrap">
            • SKILLS •
          </span>
        </div>

        {/* Content container */}
        <div className="flex-1 p-5 sm:p-6 space-y-6 bg-white">
          {/* Sub-Group 1: DESIGN TOOLS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-2 h-2 ${
                  isBauhaus ? 'bg-[#e63b2e]' : 'bg-[#8b003a]'
                }`}
              />
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800">
                DESIGN TOOLS
              </h3>
            </div>

            {/* Tool pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {/* Figma */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border select-none transition-all ${
                  isBauhaus
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#8b003a] text-white border-[#8b003a]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#f24e1e] inline-block" />
                <span>Figma</span>
              </div>

              {/* Photoshop */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border select-none transition-all ${
                  isBauhaus
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#1a1a1a] text-white border-neutral-800'
                }`}
              >
                <span className="px-1 py-0.2 bg-[#001e36] text-[#31a8ff] font-bold text-[10px] rounded-xs border border-[#31a8ff]/40">
                  Ps
                </span>
                <span>Adobe Photoshop</span>
              </div>

              {/* Illustrator */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border select-none transition-all ${
                  isBauhaus
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#1a1a1a] text-white border-neutral-800'
                }`}
              >
                <span className="px-1 py-0.2 bg-[#330000] text-[#ff9a00] font-bold text-[10px] rounded-xs border border-[#ff9a00]/40">
                  Ai
                </span>
                <span>Adobe Illustrator</span>
              </div>

              {/* Canva */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border select-none transition-all ${
                  isBauhaus
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#7d2ae8] text-white border-[#7d2ae8]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300 inline-block" />
                <span>Canva</span>
              </div>

              {/* GitHub */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border select-none transition-all ${
                  isBauhaus
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#24292e] text-white border-neutral-800'
                }`}
              >
                <span className="font-mono text-[10px] font-bold">git</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* Sub-Group 2: DESIGN SKILLS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-2 h-2 ${
                  isBauhaus ? 'bg-[#0055ff]' : 'bg-[#8b003a]'
                }`}
              />
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800">
                DESIGN SKILLS
              </h3>
            </div>

            {/* Design skills tags */}
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    isBauhaus
                      ? 'bg-white text-neutral-900 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#fff9e6]'
                      : 'bg-[#fff5f7] text-[#8b003a] border-[#ffccd8] hover:bg-[#ffe6ec]'
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Group 3: BUSINESS OPERATIONS & OFFICE TOOLS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-2 h-2 ${
                  isBauhaus ? 'bg-[#ffcc00]' : 'bg-[#8b003a]'
                }`}
              />
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800">
                BUSINESS OPERATIONS & OFFICE TOOLS
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-800">
              {/* Excel */}
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#107c41] shrink-0" />
                <span>MS Excel</span>
              </div>

              {/* PowerPoint */}
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#d83b01] shrink-0" />
                <span>PowerPoint</span>
              </div>

              {/* Word */}
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0078d4] shrink-0" />
                <span>Word</span>
              </div>

              {/* Quick Commerce Operations (B2B) */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  isBauhaus
                    ? 'bg-[#fffde6] text-neutral-900 border-[#1a1a1a]'
                    : 'bg-[#fff2f5] text-[#8b003a] border-[#ffd6e0]'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#e63b2e]" />
                <span>Quick Commerce Operations (B2B)</span>
              </div>

              {/* PO/SO Processing */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  isBauhaus
                    ? 'bg-[#fffde6] text-neutral-900 border-[#1a1a1a]'
                    : 'bg-[#fff2f5] text-[#8b003a] border-[#ffd6e0]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#8b003a]" />
                <span>PO/SO Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CREATIVE WORKS SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-2-creative-works"
        className={`flex border-b ${
          isBauhaus ? 'border-[#1a1a1a]' : 'border-neutral-200'
        }`}
      >
        {/* Left vertical ribbon */}
        <div
          className={`w-10 sm:w-12 shrink-0 flex items-center justify-center font-display font-black text-[11px] sm:text-xs tracking-widest uppercase select-none ${
            isBauhaus
              ? 'bg-[#e63b2e] text-white border-r-3 border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-r border-[#8b003a]'
          }`}
        >
          <span className="writing-mode-vertical py-6 whitespace-nowrap">
            • CREATIVE WORKS •
          </span>
        </div>

        {/* 2 Project cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 bg-white">
          {creativeProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`p-5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all relative ${
                isBauhaus
                  ? 'hover:bg-[#fffdf5]'
                  : 'hover:bg-[#fff9fa]'
              }`}
            >
              <div>
                {/* Header Tag and arrow */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 border ${
                      isBauhaus
                        ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a]'
                        : 'bg-[#fff2f5] text-[#8b003a] border-[#ffccd8]'
                    }`}
                  >
                    {project.tag}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isBauhaus
                        ? 'border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white'
                        : 'border-[#8b003a] group-hover:bg-[#8b003a] group-hover:text-white text-[#8b003a]'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-sm text-neutral-900 group-hover:text-[#8b003a] transition-colors mb-2">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Interactive CTA preview */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-neutral-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to test interactive prototype</span>
                </span>
                <span
                  className={`font-display font-bold uppercase text-[10px] ${
                    isBauhaus ? 'text-[#0055ff]' : 'text-[#8b003a]'
                  }`}
                >
                  Preview →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CERTIFICATIONS SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-2-certifications"
        className={`flex border-b ${
          isBauhaus ? 'border-[#1a1a1a]' : 'border-neutral-200'
        }`}
      >
        {/* Left vertical ribbon */}
        <div
          className={`w-10 sm:w-12 shrink-0 flex items-center justify-center font-display font-black text-[11px] sm:text-xs tracking-widest uppercase select-none ${
            isBauhaus
              ? 'bg-[#0055ff] text-white border-r-3 border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-r border-[#8b003a]'
          }`}
        >
          <span className="writing-mode-vertical py-6 whitespace-nowrap">
            • CERTIFICATIONS •
          </span>
        </div>

        {/* 2-column checklist of certifications */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 bg-white">
          {/* Column 1 */}
          <div className="p-5 divide-y divide-neutral-100">
            {certifications.slice(0, 4).map((cert) => (
              <div key={cert.id} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isBauhaus
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-[#8b003a] text-white'
                  }`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-neutral-900 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    <span>{cert.issuer}</span>
                    <span className="mx-1">•</span>
                    <span>{cert.date}</span>
                    {cert.grade && (
                      <span
                        className={`ml-1.5 font-bold ${
                          isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
                        }`}
                      >
                        • {cert.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="p-5 divide-y divide-neutral-100">
            {certifications.slice(4).map((cert) => (
              <div key={cert.id} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isBauhaus
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-[#8b003a] text-white'
                  }`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-neutral-900 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    <span>{cert.issuer}</span>
                    <span className="mx-1">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LANGUAGES SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-2-languages"
        className={`flex ${
          isBauhaus ? 'border-[#1a1a1a]' : 'border-neutral-200'
        }`}
      >
        {/* Left vertical ribbon */}
        <div
          className={`w-10 sm:w-12 shrink-0 flex items-center justify-center font-display font-black text-[11px] sm:text-xs tracking-widest uppercase select-none ${
            isBauhaus
              ? 'bg-[#ffcc00] text-[#1a1a1a] border-r-3 border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-r border-[#8b003a]'
          }`}
        >
          <span className="writing-mode-vertical py-4 whitespace-nowrap">
            • LANGUAGES •
          </span>
        </div>

        {/* Language rows with dot meters */}
        <div className="flex-1 p-5 sm:p-6 bg-white flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="font-display font-bold text-xs sm:text-sm text-neutral-900 min-w-16">
                {lang.name}
              </span>

              {/* Dot Rating */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((dot) => {
                  const isFilled = dot <= lang.dots;
                  return (
                    <span
                      key={dot}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isFilled
                          ? isBauhaus
                            ? 'bg-[#e63b2e]'
                            : 'bg-[#8b003a]'
                          : 'bg-neutral-200'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Proficiency Level */}
              <span className="text-xs text-neutral-500 font-medium">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
