
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Contato', id: 'contact' },
  ];

  const handleLinkClick = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-[#00F5FF] rounded-lg">
            <Cpu className="w-6 h-6 text-[#0B0E14]" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">NEXUS <span className="text-[#00F5FF]">FLOW</span></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.id)}
              className={`font-medium transition-colors ${currentPage === link.id ? 'text-[#00F5FF]' : 'text-[#94A3B8] hover:text-[#00F5FF]'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="px-6 py-2.5 bg-white text-[#0B0E14] font-bold rounded-full hover:bg-[#00F5FF] transition-all hover:scale-105 active:scale-95"
          >
            Solicitar Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg text-left ${currentPage === link.id ? 'text-[#00F5FF]' : 'text-[#94A3B8] hover:text-[#00F5FF]'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="w-full px-6 py-3 bg-[#00F5FF] text-[#0B0E14] font-bold rounded-lg"
          >
            Solicitar Demo
          </button>
        </div>
      )}
    </nav>
  );
};
