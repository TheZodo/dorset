"use client";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "./ActionButton";
import HomePageGraphic from "@/assets/hero.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-full"
        onViewportEnter={() => {
          setSelectedPage("Home" as SelectedPage);
        }}
      >
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
                <h1 className="text-3xl font-black md:text-5xl">
                  To create a tangible difference in the{" "}
                  <span className="text-primary-500">
                    {" "}
                    lives and communities{" "}
                  </span>{" "}
                  of the people we serve.
                </h1>
              </div>
            </div>
            <p className="mt-8 text-sm ">
              {" "}
              We firmly believe that we exist to make a positive difference in
              people&apos;s lives. Our primary aim is to contribute to the
              communities in which we operate and to make a meaningful impact on
              the lives of the people who call these communities home.{" "}
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
          >
            {/* <ActionButton setSelectedPage={setSelectedPage}> */}

            <a
              href="https://dorset-app.vercel.app/"
              className="rounded-lg bg-primary-500 px-5 py-3 font-bold text-secondary-500 hover:bg-secondary-500 hover:text-primary-500 "
            >
              Get a Loan
            </a>

            {/* </ActionButton> */}
            <AnchorLink
              className="text-sm font-bold text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.About)}
              href={`#about`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <Image alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
