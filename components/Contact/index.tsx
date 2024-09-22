"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <section
      id="support"
      className=" mt-4  bg-mainBg px-4 pt-4 md:px-8 2xl:px-0"
    >
      <div className="mx-auto w-fit rounded-full bg-black px-6 py-2 text-base text-zinc-50 shadow-xl">
        🔆 Contact Us 🔆
      </div>
      <div className="relative mx-auto max-w-c-1390 px-10 py-7.5 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg  "></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="./images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-primary p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-15 text-3xl font-semibold text-white  ">
              Send a message
            </h2>

            <form method="POST">
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 text-white focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none   lg:w-1/2"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 text-white focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none   lg:w-1/2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 text-white focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none   lg:w-1/2"
                />

                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 text-white focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none   lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full border-b border-stroke bg-transparent text-white focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none  "
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-between ">
                <button
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-orange px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-btnHover"
                >
                  Send Message
                  <svg
                    className=" fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-charcoal  xl:text-sectiontitle2">
              Find us
            </h2>

            <div className="5 mb-7">
              <h3 className="mb-4  font-semibold text-charcoal ">
                Our Loaction
              </h3>
              <p className="h-full w-40 text-charcoal ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.662973407485!2d71.20298011116759!3d22.591705179392537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39590a8fe8f7e7d3%3A0x4daf87e828ea073d!2sKAVAN%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1726998380623!5m2!1sen!2sin"
                  className="border-0 sm:max-w-sm  md:max-w-md"
                  loading="lazy"
                ></iframe>
              </p>
              <p className="pt-4 text-charcoal">
                <span>
                  Nr. Amrut Ceramic,Haridham Society, Tarnetar road, Thangadh,
                  363 530
                </span>
              </p>
            </div>
            <div className="5 mb-7">
              <h3 className="mb-4  font-semibold text-charcoal ">
                Email Address
              </h3>
              <p className="text-charcoal">
                <span>kavanvparmar24@gmail.com</span>
              </p>
            </div>
            <div>
              <h4 className="mb-4  font-semibold text-charcoal ">
                Phone Number
              </h4>
              <p className="text-charcoal">
                <span>Kavan Parmar - +91 90169 75976</span>
              </p>
              <p className="text-charcoal">
                <span>Vinodbhai Parmar - +91 98256 36495</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
