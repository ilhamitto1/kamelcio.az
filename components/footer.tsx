"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LocateIcon as ChocolateIcon, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-dark text-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ChocolateIcon className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold text-gold">Kamelcio</span>
            </Link>
            <p className="text-cream/80 mb-4">
              Premium şokolad istehsalçısı. 2020-cu ildən bəri Azərbaycanda fəaliyyət göstərir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gold mb-4">Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream/80 hover:text-gold transition-colors duration-300">Ana Səhifə</a>
              </li>
              <li>
                <a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-300">Məhsullar</a>
              </li>
              <li>
                <a href="#about" className="text-cream/80 hover:text-gold transition-colors duration-300">Haqqımızda</a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-gold transition-colors duration-300">Əlaqə</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gold mb-4">Məhsullar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-300">Klassik Şokoladlar</a>
              </li>
              <li>
                <a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-300">Fındıqlı Şokoladlar</a>
              </li>
              <li>
                <a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-300">Meyvəli Şokoladlar</a>
              </li>
              <li>
                <a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-300">Xüsusi Kolleksiya</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gold mb-4">Əlaqə</h3>
            <address className="not-italic text-cream/80">
              <p className="mb-2">Zig kucesi 93</p>
              <p className="mb-2"></p>
              <p className="mb-2">+994 55 609 29 01</p>
              <p>kamelcio@mail.ru</p>
            </address>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-chocolate-medium/30 text-center text-cream/60">
          <p>&copy; {currentYear} Kamelcio Chocolate. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}