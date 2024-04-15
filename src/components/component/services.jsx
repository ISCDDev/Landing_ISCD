"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animacion from "../../../public/animacionweb.json";
import animacion2 from "../../../public/animacionweb2.json";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Services() {
  const { scrollYProgress } = useScroll();
  console.log("framer");
  console.log(scrollYProgress);
  return (
    <>
      <section
        className="w-full pt-12 md:pt-20 lg:pt-20 text-black bg-white pb-40"
        id="inicio"
      >
        <div className="container space-y-12 px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm ">
                Conócenos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-iscd">
                  Sobre Nosotros
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ISCD (Information Security Consulting Development) nace en
                  2022 con la visión de llenar un vacío en el mercado
                  ecuatoriano de ciberseguridad.
                </p>
              </div>
            </motion.div>
            <div className="grid gap-4 md:gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <CardHeader className="flex flex-col">
                    <LockIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold tracking-tighter">
                    Misión
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Proteger y fortalecer la infraestructura digital de cada
                      organización, ofreciendo soluciones personalizadas,
                      fiables y escalables, que excedan las expectativas de
                      nuestros clientes, promoviendo un desarrollo seguro en la
                      era digital.
                    </p>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <CardHeader className="flex flex-col gap-1">
                    <ShieldCheckIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold tracking-tighter">
                    Visión
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Ser líderes en el ámbito de la ciberseguridad del Ecuador.
                    </p>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <CardHeader className="flex flex-col gap-1">
                    <UsersIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold tracking-tighter">
                      Valores
                    </h3>

                    <ul className="list-disc text-sm text-gray-500 leading-relaxed ms-5">
                      <li>Honestidad</li>
                      <li>Profesionalismo</li>
                      <li>Conocimiento</li>
                      <li>Productividad</li>
                    </ul>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden z-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover filter brightness-100 grayscale opacity-10"
          autoPlay
          loop
          muted
          playsInline
          src="/wallpaper2.mp4"
        ></video>
        <section
          className="w-full pt-12 md:pt-24 lg:pt-32 text-black bg-white pb-10 z-30 flex justify-center"
          id="servicios"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
              <motion.div
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center flex justify-center items-center"
                style={{ maxWidth: "100%", height: "auto" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <Lottie
                  animationData={animacion2}
                  style={{ width: "100%", height: "100%" }}
                />
              </motion.div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm "
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    Filosofía
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-iscd"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    Zero Trust
                  </motion.h2>
                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    Presentamos nuestra filosofía Zero Trust. En un mundo
                    digitalizado y en constante evolución, confiar es un riesgo.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-12 md:pt-24 lg:pt-32 text-black bg-white pb-10 flex justify-center">
          <div className="container flex flex-col items-center px-4">
            <div className="grid items-center gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
              <div className="flex items-center justify-center lg:order-last">
                <motion.div
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center flex justify-center items-center"
                  style={{ maxWidth: "100%", height: "auto" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Lottie
                    animationData={animacion}
                    style={{ width: "100%", height: "100%" }}
                  />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center space-y-4 lg:order-first xl:ms-20 lg:ms-20">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    Filosofía
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-iscd"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    ¿Qué es?
                  </motion.h2>
                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2 }}
                  >
                    Es un enfoque de seguridad que no asume confianza en nadie,
                    y verifica cada solicitud antes de permitir el acceso a la
                    red o a los datos.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
