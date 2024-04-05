"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import RandomTextEffect from "@/components/component/random-text";
import Link from "next/link";
export function HeroSection() {
  return (
    <div>
      <section className="py-48 lg:py-40 xl:py-24 overlay">
        <div className="container px-4 space-y-10 text-center md:space-y-16 lg:space-y-20">
          <div className=" space-y-20">
            {/* <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl/relaxed lg:text-7xl/relaxed xl:text-5xl/relaxed text-white font-digital-desolation">
              Information Security Consulting Development
            </h1> */}
            
            <RandomTextEffect
              originalText="Information Security Consulting Development"
              className="text-4xl font-extrabold tracking-tighter sm:text-4xl md:text-4xl/relaxed lg:text-5xl/relaxed xl:text-7xl/relaxed text-white font-arimo cursor-pointer"
            />
            <motion.p
              className="mx-auto max-w-[800px] md:text-lg lg:text-lg xl:text-lg pb-12 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Somos una comunidad de especialistas tecnológicos dedicados a
              fortalecer la seguridad cibernética de nuestros clientes desde sus
              elementos clave
            </motion.p>

            <Link href="#inicio">
              <motion.button
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-md font-medium text-white backdrop-blur-3xl font-extrabold">
                  Empezemos
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
