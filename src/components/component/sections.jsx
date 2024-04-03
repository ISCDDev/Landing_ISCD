"use client";
import Link from "next/link";
import { CarouselItem, Carousel } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Sections() {
  return (
    <div className="flex flex-col w-full min-h-screen text-white">
      <main className="flex-1">
        <motion.section
          className="w-full py-80"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        >
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-10 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Protegiendo tu negocio
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                ISCD provides comprehensive cybersecurity solutions to protect
                your organization from the latest threats.
              </p>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-40  bg-white text-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Otros Servicios
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                We offer a range of services to meet your cybersecurity needs.
              </p>
            </motion.div>
            <motion.div
              className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:gap-8"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Managed Security
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Let our experts handle your security.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Cloud Security</h3>
                  <p className="text-sm text-gray-500 ">
                    Protect your data in the cloud.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Endpoint Security
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Secure every device in your network.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Endpoint Security
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Secure every device in your network.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Endpoint Security
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Secure every device in your network.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Service"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">
                    Endpoint Security
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Secure every device in your network.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-24 bg-white text-black" id="nosotros">
          <motion.div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6"
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1.1 }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose ISCD?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Our team of cybersecurity experts is dedicated to keeping your
                data safe.
              </p>
            </div>
            <div className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-4 xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200">
                  <img
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Alice Smith</h3>
                  <p className="text-xs tracking-wide text-gray-500">
                    Security Analyst
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200">
                  <img
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Bob Johnson</h3>
                  <p className="text-xs tracking-wide text-gray-500">
                    Cybersecurity Expert
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200 ">
                  <img
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Eve Williams</h3>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Chief Information Security Officer
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full border border-gray-200 ">
                  <img
                    alt="Team member"
                    className="rounded-full aspect-square overflow-hidden object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tighter">Charlie Brown</h3>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Security Operations Center Analyst
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-24 bg-white text-black">
          <motion.div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6"
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 1.1 }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Customer Testimonials
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Our clients love the peace of mind that comes with ISCD's
                security solutions.
              </p>
            </div>
            <div className="grid max-w-sm mx-auto gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 ">
                    ISCD's team of experts provided top-notch service. I
                    couldn't be happier with the level of security they
                    implemented at our company.
                  </p>
                  <p className="font-semibold tracking-tighter">Alice Smith</p>
                  <p className="text-xs tracking-wide text-gray-500 ">
                    Acme Corporation
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-transform md:translate-y-2 md:scale-105 md:space-y-4 ">
                <img
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
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
                <img
                  alt="Avatar"
                  className="rounded-full aspect-square overflow-hidden object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 ">
                    ISCD's team is incredibly knowledgeable and helped us
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
        </section>
        <section className="w-full py-80" id="contacto">
          <motion.div className="container px-4 md:px-6"
          initial={{ opacity: 0,scale : 0.4}}
          whileInView={{ opacity: 1,  scale: 1}}
          transition={{ duration: 1.1 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm ">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to get started?
                </h2>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Contact us today to learn more about our services.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contact Us
                </Link> */}
                <motion.button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        
        >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl font-sphere-fez">
        Contactanos
        </span>
      </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function HelpCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function PhoneCallIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}
