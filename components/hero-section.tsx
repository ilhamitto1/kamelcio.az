"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-chocolate-dark/40"></div>
      </div>
      
      <motion.div
        className="hero-content max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6"
          variants={itemVariants}
        >
          Kamelcio Chocolate
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Azərbaycanın ən dadlı və premium şokolad brendi. Hər bir şokolad parçasında əsl zövq və keyfiyyət.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a 
            href="#products" 
            className="btn-primary inline-block mr-4"
          >
            Məhsullarımız
          </a>
          <a 
            href="#about" 
            className="btn-secondary inline-block"
          >
            Haqqımızda
          </a>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#products" className="text-cream/80 hover:text-cream">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}