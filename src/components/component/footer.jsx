"use client";
import Image from 'next/image'
import { motion } from "framer-motion";
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <div className="space-y-8 xl:col-span-1">
          <Image
              alt="ISCD Hexagon Logo"
              className="h-10"
              height={40}
              width={40}
              src="/Logo2.svg"
             />

            <p className="text-gray-500 text-base">
              Making the cyber world safer one byte at a time.
            </p>
            <div className="flex space-x-6">
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Content
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Claim
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base text-gray-300 hover:text-white"
                      href="#"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-base text-gray-400 xl:text-center">
            © 2023 ISCD Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
