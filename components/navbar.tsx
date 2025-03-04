"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, LocateIcon as ChocolateIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Ana Səhifə' },
    { href: '#products', label: 'Məhsullar' },
    { href: '#about', label: 'Haqqımızda' },
    { href: '#contact', label: 'Əlaqə' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'sticky-nav py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300',
        scrolled ? 'bg-cream/80 shadow-md' : 'bg-transparent'
      )}
    >
      <Link href="/" className="flex items-center space-x-2">
        <ChocolateIcon className="h-8 w-8 text-chocolate-dark" />
        <span className="text-xl font-bold text-chocolate-dark">Kamelcio</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-chocolate-dark hover:text-gold transition-colors duration-300 font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden text-chocolate-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-cream shadow-lg md:hidden z-50"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-chocolate-dark hover:bg-gold-light transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}