import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import AboutLady from "@/assets/about-image.png";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function About({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-full"
        onViewportEnter={() => {
          setSelectedPage("About" as SelectedPage);
        }}
      >
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:mr-40 md:mt-16 md:justify-items-start">
          <Image alt="home-page-graphic" src={AboutLady} />
        </div>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5 ">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:left-20 before:z-[-1] md:before:content-dorsettext">
                <h1 className="text-5xl font-black">
                  <span className="text-secondary-500">
                    {" "}
                    Dorset Capital Limited{" "}
                  </span>{" "}
                  is registered money lending company that offers financial
                  solutions to employees, informal traders and small businesses
                </h1>
              </div>
            </div>
            <p className="mt-8 text-sm ">
              {" "}
              We strive to perform well beyond expectations, operating with
              technical expertise and commitment to deliver tailored financial
              products that ensure client satisfaction and encourage client
              growth Our clients can benefit from a be spoke service that is
              tailored to each customer’s needs{" "}
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="my-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
