"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';


// Product data
const products = [
  {
    id: 1,
    name: "Rəngli Bonbonlar",
    description: "Tərkib: Espresso, Sadə, Ağ, Princess, Moruq,Portağal, “Mango&Marakuya” tərkibli xüsusi qanajlardan hazırlanmış şokoladlar",
    price: "1 ədədi - 1.20 AZN",
    image: "/images/image1.jpg"
  },
  
  {
    id: 2,
    name: "Boyuk boy dubay shokoladi",
    description: "chiyelek, vishne ve malinali movcuddur",
    price: "20 AZN + 5 AZN (meyve ucun)",
    image: "/images/image2.jpg"
  },
  {
    id: 3,
    name: "Malinali shokolad",
    description: "Hem ag hem sudlu shokoladdan ibaretdir",
    price: "1 ededi - 1 AZN",
    image: "/images/image3.jpg"
  },
  {
    id: 4,
    name: "Orta boy dubay shokoladi",
    description: "chiyelek, vishne ve malinali movcuddur",
    price: "14 AZN + 4 AZN (meyve ucun)",
    image: "/images/image4.jpg"
  },
  {
    id: 5,
    name: "Gold double mini dubay shokoladi",
    description: "",
    price: "1 ededi 1.10 AZN",
    image: "/images/image5.jpg"
  },
  {
    id: 6,
    name: "Double mini dubay shokolad",
    description: "",
    price: "1 eded 1 AZN",
    image: "/images/image6.jpg"
  },
  {
    id: 7,
    name: "150 gr pletka dubay shokoladi",
    description: "",
    price: " 16 AZN",
    image: "/images/image7.jpg"
  },
  {
    id: 8,
    name: "Findiqli Rafaello toplari",
    description: "",
    price: "1 eded 0.50 AZN",
    image: "/images/image8.jpg"
  },
  {
    id: 9,
    name: "Mini dubay shokoladi ",
    description: "",
    price: "1 eded 2 AZN",
    image: "/images/image9.jpg"
  },
  {
    id: 10,
    name: "Rengli bonbon",
    description: "",
    price: "1 eded 2 AZN",
    image: "/images/imag11.jpg"
  }
];

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Məhsullarımız</h2>
          <p className="text-chocolate-medium max-w-3xl mx-auto">
            Ən keyfiyyətli kakao dənələrindən hazırlanmış premium şokoladlarımızı kəşf edin. Hər bir şokolad parçası əl ilə hazırlanır və xüsusi reseptlə yaradılır.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card cursor-pointer"
              onClick={() => openModal(product)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h3>
                <p className="text-chocolate-medium mb-4 line-clamp-2">{product.description}</p>
                <p className="text-gold font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-cream max-w-3xl w-full rounded-lg overflow-hidden relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-chocolate-dark hover:text-chocolate-medium z-10"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-chocolate-dark mb-4">{selectedProduct.name}</h3>
                <p className="text-chocolate-medium mb-6">{selectedProduct.description}</p>
                <p className="text-gold text-xl font-bold">{selectedProduct.price}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}