"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Toaster, toast } from 'sonner'
export function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mleqaaql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
      
        toast.success('Formulario enviado correctamente')
      } else {
        
        toast.error('Hubo un problema al enviar el formulario')
      }
    } catch (error) {
  
      toast.error('Hubo un problema al enviar el formulario')
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      key="1"
      className="w-full py-12 md:py-24 lg:py-32 mt-36 mb-36 "
      id="contacto"
    >
      <Toaster richColors  />
      <div className="container px-4 md:px-6 pt-14">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4 py-10">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Contáctanos</h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
              Nuestros expertos en ciberseguridad están aquí para ayudarte a proteger tu negocio de las amenazas en
              línea. Completa el formulario a continuación y nos pondremos en contacto contigo al instante.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg dark:bg-gray-800 dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  className="rounded-md border-2 border-gray-600 bg-gray-700 px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
                <Input
                  className="rounded-md border-2 border-gray-600 bg-gray-700 px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  className="rounded-md border-2 border-gray-600 bg-gray-700 px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  type="tel"
                />
                <Input
                  className="rounded-md border-2 border-gray-600 bg-gray-700 px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa"
                />
              </div>
              <Textarea
                className="w-full rounded-md border-2 border-gray-600 bg-gray-700 px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={4}
              />
              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl font-bold">
                  Enviar
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
