import React from 'react';
import {
  personalInfo,
  experiences,
  additionalRoles,
  educationList
} from '../data/resumeData';
import { ThemeMode } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  CheckCircle2,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap
} from 'lucide-react';

interface ScreenOneProps {
  theme: ThemeMode;
  onOpenContact: () => void;
}

export const ScreenOne: React.FC<ScreenOneProps> = ({ theme, onOpenContact }) => {
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null);

  const isBauhaus = theme === 'bauhaus';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <article
      id="screen-page-1"
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
        id="page-1-header"
        className={`relative overflow-hidden p-6 sm:p-8 transition-colors ${
          isBauhaus
            ? 'bg-[#1a1a1a] text-white border-b-4 border-[#1a1a1a]'
            : 'bg-[#8b003a] text-white border-b border-[#6e002d]'
        }`}
      >
        {/* Decorative background geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 240"
            fill="none"
          >
            <circle
              cx="720"
              cy="120"
              r="180"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="720" cy="120" r="120" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="720" cy="120" r="60" stroke="#ffffff" strokeWidth="1" />
            <path
              d="M300 0 L550 240 M360 0 L610 240"
              stroke="#ffffff"
              strokeWidth="0.75"
              strokeOpacity="0.4"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar circular badge */}
          <div
            id="user-avatar-badge"
            className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center shrink-0 border-3 transition-transform hover:scale-105 select-none ${
              isBauhaus
                ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#ffffff] shadow-[4px_4px_0px_#0055ff]'
                : 'bg-[#69002a] text-white border-white/60 shadow-lg'
            }`}
          >
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
              {personalInfo.initials}
            </span>
            <span
              className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1 px-1.5 py-0.5 rounded-full ${
                isBauhaus ? 'bg-[#1a1a1a] text-[#ffcc00]' : 'bg-black/30 text-pink-200'
              }`}
            >
              {personalInfo.subBadge}
            </span>
          </div>

          {/* Title & Name & Contact information */}
          <div className="flex-1 text-center sm:text-left">
            {/* Tagline */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span
                className={`w-2.5 h-2.5 rounded-full inline-block ${
                  isBauhaus ? 'bg-[#ffcc00] animate-pulse' : 'bg-[#00c49f]'
                }`}
              ></span>
              <h2
                className={`text-xs sm:text-sm font-display font-bold tracking-widest uppercase ${
                  isBauhaus ? 'text-[#ffcc00]' : 'text-pink-200'
                }`}
              >
                {personalInfo.role}
              </h2>
            </div>

            {/* Display Name */}
            <h1
              id="user-full-name"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-none mb-4"
            >
              {personalInfo.name}
            </h1>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs font-medium">
              {/* Email */}
              <button
                id="contact-email-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Click to copy email"
                className={`flex items-center gap-1.5 px-2 py-1 transition-colors group rounded-sm ${
                  isBauhaus
                    ? 'hover:bg-white/10 text-neutral-200'
                    : 'hover:bg-white/15 text-pink-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5 opacity-80" />
                <span className="underline-offset-2 group-hover:underline">
                  {personalInfo.email}
                </span>
                {copiedItem === 'email' ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-70" />
                )}
              </button>

              {/* Phone */}
              <button
                id="contact-phone-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Click to copy phone"
                className={`flex items-center gap-1.5 px-2 py-1 transition-colors group rounded-sm ${
                  isBauhaus
                    ? 'hover:bg-white/10 text-neutral-200'
                    : 'hover:bg-white/15 text-pink-100'
                }`}
              >
                <Phone className="w-3.5 h-3.5 opacity-80" />
                <span>{personalInfo.phone}</span>
                {copiedItem === 'phone' ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-70" />
                )}
              </button>

              {/* Location */}
              <div className="flex items-center gap-1 px-1 text-neutral-200 opacity-90">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </div>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1 px-2 py-1 transition-colors hover:underline rounded-sm ${
                  isBauhaus ? 'text-[#ffcc00]' : 'text-white'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1 px-2 py-1 transition-colors hover:underline rounded-sm ${
                  isBauhaus ? 'text-[#ffcc00]' : 'text-white'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SUMMARY / PROFILE STATEMENTS */}
      {/* ========================================================================= */}
      <section
        id="page-1-summary"
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
          <span className="writing-mode-vertical py-4 whitespace-nowrap">
            • {personalInfo.categoryRibbon} •
          </span>
        </div>

        {/* Bullet points content */}
        <div
          className={`flex-1 p-5 sm:p-6 ${
            isBauhaus ? 'bg-[#fffdfa]' : 'bg-[#fff9fa]'
          }`}
        >
          <ul className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-neutral-800">
            {personalInfo.summaryBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span
                  className={`w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 ${
                    isBauhaus ? 'bg-[#e63b2e]' : 'bg-[#8b003a]'
                  }`}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-1-experience"
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
            • EXPERIENCE •
          </span>
        </div>

        {/* 2 Experience columns with Timeline middle marker */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 relative bg-white divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {/* Middle TIMELINE ribbon indicator (Desktop) */}
          <div
            className={`hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-1 py-3 text-[9px] font-display font-black tracking-widest uppercase border ${
              isBauhaus
                ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                : 'bg-white text-[#8b003a] border-[#8b003a]/30 shadow-sm'
            }`}
          >
            <span className="writing-mode-vertical">TIMELINE</span>
          </div>

          {/* Exp 1: Junior Associate */}
          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Header: Badge + Period + Location */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 flex items-center justify-center font-display font-black text-xs rounded-full ${
                      isBauhaus
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-[#1a1a1a] text-white'
                    }`}
                  >
                    {experiences[0].stepNumber}
                  </span>
                  <span className="font-display font-bold tracking-tight text-neutral-900">
                    {experiences[0].period}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                  <MapPin className="w-3 h-3 text-[#e63b2e]" />
                  <span>{experiences[0].location}</span>
                </div>
              </div>

              {/* Title & Company */}
              <h3 className="font-display font-bold text-base text-neutral-900">
                {experiences[0].title}
              </h3>
              <h4
                className={`font-display font-bold text-sm mb-3.5 ${
                  isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
                }`}
              >
                {experiences[0].company}
              </h4>

              {/* Bullets */}
              <ul className="space-y-2 text-xs text-neutral-700 leading-relaxed">
                {experiences[0].bulletPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className={`font-black shrink-0 ${
                        isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
                      }`}
                    >
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exp 2: Marketing Designer */}
          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Header: Badge + Period + Location */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 flex items-center justify-center font-display font-black text-xs rounded-full border ${
                      isBauhaus
                        ? 'bg-white text-[#1a1a1a] border-2 border-[#1a1a1a]'
                        : 'bg-white text-[#8b003a] border border-[#8b003a]'
                    }`}
                  >
                    {experiences[1].stepNumber}
                  </span>
                  <span className="font-display font-bold tracking-tight text-neutral-900">
                    {experiences[1].period}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                  <MapPin className="w-3 h-3 text-[#e63b2e]" />
                  <span>{experiences[1].location}</span>
                </div>
              </div>

              {/* Title & Company */}
              <h3 className="font-display font-bold text-base text-neutral-900">
                {experiences[1].title}
              </h3>
              <h4
                className={`font-display font-bold text-sm mb-3.5 ${
                  isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
                }`}
              >
                {experiences[1].company}
              </h4>

              {/* Bullets */}
              <ul className="space-y-2 text-xs text-neutral-700 leading-relaxed">
                {experiences[1].bulletPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className={`font-black shrink-0 ${
                        isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
                      }`}
                    >
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MORE ROLES SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-1-more-roles"
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
            • MORE ROLES •
          </span>
        </div>

        {/* 2x2 grid of roles */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 bg-white">
          {/* Top Row: Role 1 & Role 2 */}
          <div className="divide-y divide-neutral-200">
            {/* Role 1 */}
            <div className="p-4 sm:p-5">
              <h4 className="font-display font-bold text-sm text-neutral-900">
                {additionalRoles[0].title}
              </h4>
              <p
                className={`text-xs font-semibold mt-0.5 ${
                  isBauhaus ? 'text-[#0055ff]' : 'text-[#8b003a]'
                }`}
              >
                {additionalRoles[0].company}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
                <Calendar className="w-3 h-3 opacity-70" />
                <span>{additionalRoles[0].period}</span>
              </div>
            </div>

            {/* Role 3 */}
            <div className="p-4 sm:p-5">
              <h4 className="font-display font-bold text-sm text-neutral-900">
                {additionalRoles[2].title}
              </h4>
              <p
                className={`text-xs font-semibold mt-0.5 ${
                  isBauhaus ? 'text-[#0055ff]' : 'text-[#8b003a]'
                }`}
              >
                {additionalRoles[2].company}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
                <Calendar className="w-3 h-3 opacity-70" />
                <span>{additionalRoles[2].period}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Role 2 & Role 4 */}
          <div className="divide-y divide-neutral-200">
            {/* Role 2 */}
            <div className="p-4 sm:p-5">
              <h4 className="font-display font-bold text-sm text-neutral-900">
                {additionalRoles[1].title}
              </h4>
              <p
                className={`text-xs font-semibold mt-0.5 ${
                  isBauhaus ? 'text-[#0055ff]' : 'text-[#8b003a]'
                }`}
              >
                {additionalRoles[1].company}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
                <Calendar className="w-3 h-3 opacity-70" />
                <span>{additionalRoles[1].period}</span>
              </div>
            </div>

            {/* Role 4: Google Cloud Innovator (Featured) */}
            <div
              className={`p-4 sm:p-5 ${
                additionalRoles[3].highlight
                  ? isBauhaus
                    ? 'bg-[#fffde6]/50'
                    : 'bg-[#fff5f7]'
                  : ''
              }`}
            >
              <h4 className="font-display font-bold text-sm text-neutral-900">
                {additionalRoles[3].title}
              </h4>
              <p
                className={`text-xs font-semibold mt-0.5 ${
                  isBauhaus ? 'text-[#0055ff]' : 'text-[#8b003a]'
                }`}
              >
                {additionalRoles[3].company}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-600 mt-2">
                <span className="text-amber-500 font-bold">★</span>
                <span>{additionalRoles[3].period}</span>
              </div>
              {additionalRoles[3].note && (
                <p className="text-[11px] text-neutral-600 mt-1 italic">
                  {additionalRoles[3].note}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EDUCATION SECTION */}
      {/* ========================================================================= */}
      <section
        id="page-1-education"
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
            • EDUCATION •
          </span>
        </div>

        {/* 2 columns of education */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 bg-white">
          {/* Degree 1 */}
          <div className="p-5">
            <h4 className="font-display font-bold text-sm text-neutral-900 leading-snug">
              {educationList[0].degree}
            </h4>
            <p
              className={`text-xs font-semibold mt-1 ${
                isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
              }`}
            >
              {educationList[0].institution}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
              <Calendar className="w-3 h-3 opacity-70" />
              <span>
                {educationList[0].period} • {educationList[0].location}
              </span>
            </div>
          </div>

          {/* Degree 2 */}
          <div className="p-5">
            <h4 className="font-display font-bold text-sm text-neutral-900 leading-snug">
              {educationList[1].degree}
            </h4>
            <p
              className={`text-xs font-semibold mt-1 ${
                isBauhaus ? 'text-[#e63b2e]' : 'text-[#8b003a]'
              }`}
            >
              {educationList[1].institution}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
              <Calendar className="w-3 h-3 opacity-70" />
              <span>
                {educationList[1].period} • {educationList[1].location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM FOOTER BAR (PAGE 1) */}
      {/* ========================================================================= */}
      <footer
        id="page-1-footer"
        className={`px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider uppercase font-display font-bold select-none ${
          isBauhaus
            ? 'bg-[#1a1a1a] text-white border-t-3 border-[#1a1a1a]'
            : 'bg-[#1a1a1a] text-white'
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 ${
              isBauhaus ? 'bg-[#ffcc00]' : 'bg-[#e63b2e]'
            }`}
          />
          <span>GRACY C • VISUAL & UI DESIGNER</span>
        </div>
        <div className="text-[11px] font-mono tracking-tight text-neutral-300 mt-1 sm:mt-0">
          <span>{personalInfo.email}</span>
          <span className="mx-2">•</span>
          <span>{personalInfo.phone}</span>
        </div>
      </footer>
    </article>
  );
};
