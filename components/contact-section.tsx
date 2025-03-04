"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Çox qısadır!')
    .max(50, 'Çox uzundur!')
    .required('Adınızı daxil edin'),
  email: Yup.string()
    .email('Düzgün e-poçt ünvanı daxil edin')
    .required('E-poçt ünvanınızı daxil edin'),
  message: Yup.string()
    .min(10, 'Mesaj çox qısadır!')
    .required('Mesajınızı daxil edin'),
});

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values: any, { resetForm }: any) => {
    // In a real application, you would send the form data to a server
    console.log(values);
    setIsSubmitted(true);
    resetForm();
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Əlaqə</h2>
          <p className="text-chocolate-medium max-w-3xl mx-auto">
            Suallarınız və ya təklifləriniz var? Bizimlə əlaqə saxlayın və biz sizə ən qısa zamanda cavab verəcəyik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-chocolate-dark mb-6 flex items-center">
              <Send className="mr-2 h-6 w-6 text-gold" />
              Mesaj Göndərin
            </h3>
            
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-chocolate-medium mb-2 font-medium">Adınız</label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="input-field focus:ring-gold focus:border-gold"
                      placeholder="Adınızı daxil edin"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-chocolate-medium mb-2 font-medium">E-poçt</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="input-field focus:ring-gold focus:border-gold"
                      placeholder="E-poçt ünvanınızı daxil edin"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-chocolate-medium mb-2 font-medium">Mesajınız</label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows={5}
                      className="input-field focus:ring-gold focus:border-gold"
                      placeholder="Mesajınızı daxil edin"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Göndərilir...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Göndər
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-start"
              >
                <div className="bg-green-500 rounded-full p-1 mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Mesajınız uğurla göndərildi!</p>
                  <p className="text-sm">Tezliklə sizinlə əlaqə saxlayacağıq.</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-chocolate-dark mb-6">Əlaqə Məlumatları</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-dark">Ünvan</h4>
                    <p className="text-chocolate-medium">Zig kucesi 93</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Phone className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-dark">Telefon</h4>
                    <p className="text-chocolate-medium">+994 55 609 29 01</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Mail className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-dark">E-poçt</h4>
                    <p className="text-chocolate-medium">kamelcio@mail.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Clock className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-dark">İş saatları</h4>
                    <p className="text-chocolate-medium">Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                    <p className="text-chocolate-medium">Şənbə: 10:00 - 16:00</p>
                    <p className="text-chocolate-medium">Bazar: Bağlıdır</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.9122478339414!2d49.985168076008435!3d40.366470071447814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIxJzU5LjMiTiA0OcKwNTknMTUuOSJF!5e0!3m2!1sen!2slv!4v1741117578692!5m2!1sen!2slv"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}