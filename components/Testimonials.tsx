import React from "react";
import { motion } from "framer-motion";
import HText from "./HText";
import Testimonial from "./Testimonial";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const testimonials: Array<Testimonials> = [
  {
    name: "Ronna Mayawa ",
    quote:
      "Ronna owns a restaurant which she has been running some time and she heard about us through our marketers. She originally would get her funding through village banking but she opted for us because of the tenure and favourable terms. Her restaurant was not doing so well but she has been able to revive and stabilise her business since she started working with us. She also likes the fact that the regular payment reduces the financial burden of a bulk payment at the end of the loan.",
  },
  {
    name: "Mr. Simon Tito",
    quote:
      "Simon is a businessman that deals in dry foods and peanut butter making. Initially, he used to sell fruits and veggies before he went into the peanut butter making. With the business loans he has been given access to funding which he used to venture into the peanut butter making and it has proved to be very profitable. Simon likes the tailor made funding solutions that Dorset offers.",
  },
  {
    name: "Mr. Thomas Phiri",
    quote:
      "Thomas is in the clothing business and he is one of our first clients. His business has grown significantly since he started working with us. His stock levels have gone up and he also opened an additional store. Dorset has helped him grow and expand. He has been impressed by how Dorset is always available to help in times of need.",
  },
  {
    name: "Miss Kasweka",
    quote:
      "Miss Kasweka is a tailor and she sells clothes and fabric in her shop. Dorset provided solutions to working capital problems when business was slow. This has seen her business grow and increase revenue lines. Miss Kasweka likes Dorset because the loan officers took time to understand her problems before suggesting effective financing solutions. ",
  },
  {
    name: "Ms. Harriet Mamba",
    quote:
      "Harriet sells chitenges and ladies and gents clothes. She is the breadwinner of her household and has been able to sustain and grow her business through the loans she has had access to. Harriet likes Dorset because the team was available at the right time to help with funding.",
  },
];

export default function Testimonials({ setSelectedPage }: Props) {
  return (
    <section id="testimonials" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage("Testimonials" as SelectedPage);
        }}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>SOME OF OUR SUCCESS STORIES</HText>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {testimonials.map((testimonial: Testimonials) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              quote={testimonial.quote}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>{" "}
    </section>
  );
}
