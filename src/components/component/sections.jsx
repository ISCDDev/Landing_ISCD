"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FormContact } from "./form-contact";
export function Sections() {
  return (
    <div className="flex flex-col w-full min-h-screen text-white">
      <main className="flex-1">
        <motion.section
          className="w-full py-80 flex justify-center"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        >
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-10 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tu seguridad, nuestra prioridad
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Nuestra meta es contribuir a un mundo más seguro y digitalizado,
                donde las empresas puedan desarrollar su potencial sin temor a
                los ciberataques.
              </p>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-40  bg-white text-black flex justify-center" id="servicios">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-iscd">
                Servicios
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Ofrecemos una gama de servicios para satisfacer sus necesidades de ciberseguridad.
              </p>
            </motion.div>
            <motion.div
              className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:gap-8"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height={200}
                  width={200}
                  src="/capacitacion.jpg"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                  Consultoria integral de ciberseguridad
                  </h3>
                  <p className="text-sm text-gray-500 pb-5 ">
                  Protección efectiva contra amenazas cibernéticas.
                  </p>
                  <a href="https://wa.link/8myb6x" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height={200}
                  src="/puertos.jpg"
                  width={200}
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Port assignment & document
                  </h3>
                  <p className="text-sm text-gray-500 pb-5 ">
                  Asignación segura de puertos y documentación detallada de la infraestructura de red
                  </p>
                  <a href="https://wa.link/3qkdmf" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/seguridadintegral.jpg"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                  Seguridad Integral
                  </h3>
                  <p className="text-sm text-gray-500  pb-5">
                  Implementación de soluciones integrales de seguridad.
                  </p>
                  <a href="https://wa.link/t8lu74" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/helpdesk.jpg"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Help Desk
                  </h3>
                  <p className="text-sm text-gray-500  pb-5">
                  Soporte técnico remoto y presencial
                  </p>
                  <a href="https://wa.link/z8n6ym" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/pentesting.png"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                  Hacking ético/Análisis de vulnerabilidades
                  </h3>
                  <p className="text-sm text-gray-500 pb-5">
                  Identificar y corregir vulnerabilidades (Sombrero blanco/negro).
                  </p>
                  <a href="https://wa.link/n8qt4i" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/siem.jpg"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                  Diseño e Implementación de TICs
                  </h3>
                  <p className="text-sm text-gray-500 pb-5 ">
                  Infraestructura robusta, eficiente y segura para soportar las operaciones empresariales.
                  </p>
                  <a href="https://wa.link/5072h3" className="bg-blue-iscd hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">¡Asesórate ahora ! </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-16 lg:py-24 bg-white text-black flex justify-center"
          id="equipo"
        >
          <motion.div
            className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 py-32"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className="space-y-5 mb-20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-iscd">
                Nuestro Equipo
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Profesionales de la ciberseguridad es nuestra garantía para un trabajo de ​calidad, contamos con experiencia profesional y la motivación para formar ​parte de tu equipo
              </p>
              <p className=" font-bold">Unidos, sumamos más de 15 años de experiencia profesional</p>
            </div>
            <div className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200">
                  <Image
                    width={200}
                    height={200}
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    src="/k.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Kendryck Pavón</h3>
                  
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200">
                  <Image
                    width={200}
                    height={200}
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    src="/g.png"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Gabriela Jácome
                  </h3>
                 
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200 ">
                  <Image
                    width={200}
                    height={200}
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    src="/Andres.png"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Andres Ortiz</h3>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        {/* <section className="w-full py-12 md:py-16 lg:py-24 bg-white text-black">
          <motion.div
            className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-iscd">
                Customer Testimonials
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our clients love the peace of mind that comes with ISCDs
                security solutions.
              </p>
            </div>
            <div className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/placeholder.svg"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 ">
                    ISCDs team of experts provided top-notch service. I
                    couldnt be happier with the level of security they
                    implemented at our company.
                  </p>
                  <p className="font-semibold tracking-tighter">Alice Smith</p>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Acme Corporation
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/placeholder.svg"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 ">
                    The ISCD team is always responsive and ready to help. Their
                    expertise has made a real difference in our security
                    posture.
                  </p>
                  <p className="font-semibold tracking-tighter">Bob Johnson</p>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Initech, Inc.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <Image
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  src="/placeholder.svg"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 ">
                    ISCDs team is incredibly knowledgeable and helped us
                    navigate the complex world of cybersecurity. I highly
                    recommend their services.
                  </p>
                  <p className="font-semibold tracking-tighter">Eve Williams</p>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Umbrella Corporation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section> */}



<FormContact />


        {/* <section className="w-full py-80 flex justify-center" id="contacto">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm ">
                  Contacto
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¡TU NUEVO ALIADO!
                </h2>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Contáctanos por Whatsapp hoy día y aprender mas sobre nuestros servicios.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                
                <motion.a
                  href="https://wa.link/ic21kp"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl font-bold">
                  ¡Contáctanos!
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section> */}
      </main>
    </div>
  );
}
