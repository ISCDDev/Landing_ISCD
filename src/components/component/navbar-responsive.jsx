import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function NavbarResponsive({ isMenuOpen, closeMenu })  {
  const handleInstagramClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "https://www.instagram.com/iscd.ecu?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr";
    }
  };

  return (
    <motion.div
    className="fixed top-0 left-0 w-full h-full overflow-y-hidden flex flex-col items-start justify-between bg-black text-white p-8 bg-opacity-50 backdrop-blur-lg z-40 pb-20"

      initial={{ opacity: 0, x: "100%" }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start space-y-6 pt-28">
        <Link
          className="text-3xl font-bold hover:underline underline-offset-4"
          href="#nosotros"
          onClick={closeMenu} 
        >
          <motion.p
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
          >Nosotros</motion.p>
         
        </Link>
        <Link
          className="text-3xl font-bold hover:underline underline-offset-4"
          href="#servicios"
          onClick={closeMenu} 
        >
          <motion.p
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1.4 }}
          >Servicios</motion.p>
        </Link>
        <Link
          className="text-3xl font-bold hover:underline underline-offset-4"
          href="#equipo"
          onClick={closeMenu} 
        >
           <motion.p
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1.8 }}
          >Equipo</motion.p>
        </Link>
        
        <Link
          className="text-3xl font-bold hover:underline underline-offset-4"
          href="#contacto"
          onClick={closeMenu} 
        >
          <motion.p
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 2.1 }}
          >Contacto</motion.p>
        </Link>
      </div>
      
      <motion.button
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 2.3 }}
          className="button bg-white rounded-full h-8 w-24 text-base justify-center text-black border"
          onClick={handleInstagramClick}
        >
          ¡Únete!
      </motion.button>
      <div className="flex flex-col items-start">
        <p className="text-2xl font-bold mb-4">Contacto</p>
        <div className="text-sm mb-4">
          <a href="mailto:iscd.ecu@gmail.com">
          iscd.ecu@gmail.com
          </a>
          </div>
        <p className="text-2xl font-bold mb-4">Teléfono</p>
        <div className="text-sm mb-6">
        <a href="https://wa.link/ic21kp">
          +593 99 681 2371
          </a>
          </div>
          
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/iscd.ecu?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
          <InstagramIcon className="text-pink-600" />
          </a>
          <a href="https://www.facebook.com/iscd.ecu?mibextid=JRoKGi">
          <FacebookIcon className="text-blue-700" />
          </a>
          <a href="http://www.linkedin.com/in/iscd-ecu-9bab942bb">
          <LinkedinIcon className="text-blue-600" />
          </a>


        </div>
      </div>
    </motion.div>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
