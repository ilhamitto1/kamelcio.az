"use client";

import { motion } from 'framer-motion';
import { Award, Heart, Leaf } from 'lucide-react';

export function AboutSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <Award className="h-10 w-10 text-gold" />,
      title: "Premium Keyfiyyət",
      description: "Yalnız ən yaxşı kakao dənələrindən istifadə edirik və hər bir şokolad parçası əl ilə hazırlanır."
    },
    {
      icon: <Leaf className="h-10 w-10 text-gold" />,
      title: "Təbii İnqrediyentlər",
      description: "Bütün şokoladlarımız təbii inqrediyentlərdən hazırlanır, süni əlavələr və konservantlar olmadan."
    },
    {
      icon: <Heart className="h-10 w-10 text-gold" />,
      title: "Sevgi ilə Hazırlanır",
      description: "Hər bir şokolad parçası böyük sevgi və qayğı ilə hazırlanır, çünki biz şokolad sənətinə aşiqik."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-chocolate-dark text-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gold">Haqqımızda</h2>
          <p className="text-cream/80 max-w-3xl mx-auto">
            Kamelcio Chocolate 2020-cu ildən bəri Azərbaycanda premium şokolad istehsal edir. Biz şokolad sənətinə olan sevgimizi hər bir məhsulumuzda əks etdiririk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gold mb-4">Bizim Tarixçəmiz</h3>
            <p className="text-cream/80 mb-4">
              Kamelcio Chocolate 2010-cu ildə kiçik bir ailə müəssisəsi kimi fəaliyyətə başladı. İlk günlərdən biz yalnız ən yaxşı kakao dənələrindən istifadə etməyi və hər bir şokolad parçasını əl ilə hazırlamağı qərara aldıq.
            </p>
            <p className="text-cream/80">
              İllər keçdikcə, biz Azərbaycanın ən sevimli şokolad brendlərindən birinə çevrildik. Bu gün biz 10-dan çox fərqli şokolad növü təklif edirik və hər il yeni dadlar əlavə edirik.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gold mb-4">Bizim Missiyamız</h3>
            <p className="text-cream/80 mb-4">
              Bizim missiyamız insanlara ən yüksək keyfiyyətli şokoladı təqdim etməkdir. Biz inanırıq ki, yaxşı şokolad yalnız dadlı deyil, həm də sağlam olmalıdır.
            </p>
            <p className="text-cream/80">
              Biz kakao yetişdirən fermerlərlə birbaşa əməkdaşlıq edirik və onlara ədalətli qiymət ödəyirik. Biz həmçinin ətraf mühitə qayğı göstəririk və davamlı istehsal metodlarından istifadə edirik.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-chocolate-medium/20 p-8 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gold mb-3">{feature.title}</h3>
              <p className="text-cream/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}