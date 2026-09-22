import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { ThemeMode } from '../types';
import {
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  CheckCircle2,
  Send,
  MessageSquare
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  theme: ThemeMode;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  theme,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const isBauhaus = theme === 'bauhaus';

  const copyText = (val: string, key: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      id="contact-dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg my-auto rounded-none overflow-hidden transition-all ${
          isBauhaus
            ? 'bg-[#fdfbf7] border-4 border-[#1a1a1a] shadow-[10px_10px_0px_#1a1a1a]'
            : 'bg-white border border-neutral-300 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b-2 ${
            isBauhaus
              ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
              : 'bg-[#8b003a] text-white border-[#6e002d]'
          }`}
        >
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#ffcc00]" />
            <h3 className="font-display font-bold text-base uppercase tracking-tight">
              Get in Touch with Gracy C
            </h3>
          </div>
          <button
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

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Quick contact direct action cards */}
          <div className="space-y-2.5">
            {/* Email item */}
            <div
              className={`p-3 border flex items-center justify-between transition-colors ${
                isBauhaus
                  ? 'bg-white border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isBauhaus ? 'bg-[#ffcc00] text-[#1a1a1a]' : 'bg-[#8b003a] text-white'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-500 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyText(personalInfo.email, 'email')}
                className={`p-1.5 text-xs border transition-colors ${
                  isBauhaus
                    ? 'bg-neutral-100 hover:bg-[#ffcc00] border-[#1a1a1a]'
                    : 'bg-white hover:bg-pink-50 border-neutral-300 text-[#8b003a]'
                }`}
                title="Copy Email"
              >
                {copiedKey === 'email' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone item */}
            <div
              className={`p-3 border flex items-center justify-between transition-colors ${
                isBauhaus
                  ? 'bg-white border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isBauhaus ? 'bg-[#0055ff] text-white' : 'bg-[#8b003a] text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-500 block">
                    Mobile Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyText(personalInfo.phone, 'phone')}
                className={`p-1.5 text-xs border transition-colors ${
                  isBauhaus
                    ? 'bg-neutral-100 hover:bg-[#ffcc00] border-[#1a1a1a]'
                    : 'bg-white hover:bg-pink-50 border-neutral-300 text-[#8b003a]'
                }`}
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Links */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 border flex items-center gap-2 justify-center font-display font-bold uppercase transition-colors ${
                  isBauhaus
                    ? 'bg-white border-[#1a1a1a] hover:bg-[#ffcc00]'
                    : 'bg-neutral-50 border-neutral-200 hover:bg-pink-50 text-[#8b003a]'
                }`}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 border flex items-center gap-2 justify-center font-display font-bold uppercase transition-colors ${
                  isBauhaus
                    ? 'bg-white border-[#1a1a1a] hover:bg-[#ffcc00]'
                    : 'bg-neutral-50 border-neutral-200 hover:bg-pink-50 text-[#8b003a]'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="pt-2 border-t border-neutral-200">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800 mb-2.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#e63b2e]" />
              <span>Send Quick Inquiry / Role Proposal</span>
            </h4>

            {formSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been prepared for Gracy C.</span>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-neutral-300 focus:border-[#1a1a1a] outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-neutral-300 focus:border-[#1a1a1a] outline-none"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell Gracy about your project or job opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-2 border-neutral-300 focus:border-[#1a1a1a] outline-none resize-none"
                />
                <button
                  type="submit"
                  className={`w-full py-2.5 font-display font-bold uppercase text-xs flex items-center justify-center gap-2 border-2 transition-all ${
                    isBauhaus
                      ? 'bg-[#ffcc00] text-[#1a1a1a] border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:bg-amber-400'
                      : 'bg-[#8b003a] text-white border-[#8b003a] hover:bg-[#a00043]'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
