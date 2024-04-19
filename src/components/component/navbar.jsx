"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavbarResponsive } from "@/components/component/navbar-responsive";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false); 
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth > 1280);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      <motion.header
        key="1"
        className="sticky top-0 z-50 flex h-20 w-full items-center px-4 md:px-6 font-arimo "
        initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.500), rgba(0,0,0,0))",
        }}
      >
        <div className="hidden xxl:flex items-center gap-1.5">
          <Link href="#">
            <Image src="/Logo1.svg" alt="ISCD" 
            height={48}
            width={48}
            />
          </Link>
          <p className="text-white text-xl font-arimo">ISCD</p>
        </div>

        <nav
          className="hidden xl:flex flex-1 justify-center text-lg font-medium gap-36 text-white ms-5"
          
        >
          <Link
            className="flex items-center gap-1.5 hover:underline underline-offset-4"
            href="#"
          ></Link>
          <Link className="flex items-center gap-1.5 linkeffect" href="#inicio">
            Inicio
          </Link>
          <Link
            className="flex items-center gap-1.5 linkeffect"
            href="#nosotros"
          >
            Nosotros
          </Link>
          <Link className="flex items-center gap-1.5 " href="#">
            <Image src="/Logo1.svg" alt="ISCD" 
            height={48}
            width={48}
            />
            <p className="text-white text-xl font-arimo">ISCD</p>
          </Link>
          <Link
            className="flex items-center gap-1.5 linkeffect"
            href="#servicios"
          >
            Servicios
          </Link>
        {/* <Link className="flex items-center gap-1.5 linkeffect" href="#contacto">
            Equipo
          </Link> */}


          <Link
            className="flex items-center gap-1.5 linkeffect"
            href="#contacto"
          >
            Contacto
          </Link>
        </nav>

        <div className="xl:hidden flex items-center justify-between flex-1">
          <div className="flex items-center">
            <Link href="#">
              <Image src="/Logo1.svg" alt="ISCD" 
              height={48}
              width={48}
              />
            </Link>
            <p className="text-white text-xl font-arimo ps-2">ISCD</p>
          </div>
          <motion.button
            onClick={toggleMenu}
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.button>
        </div>

        <motion.button
          className="button bg-white rounded-full h-8 w-24 text-base justify-center text-black border xl:block hidden"
          whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            window.location.href = "https://www.instagram.com/iscd.ecu?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr";
          }}
        >
         ¡Únete!
        </motion.button>
      </motion.header>

      {isMenuOpen && !isLargeScreen && <NavbarResponsive isMenuOpen={isMenuOpen} closeMenu={closeMenu} />}
    </>
  );
}
