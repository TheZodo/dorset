"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "./HText";
import emailjs from "@emailjs/browser";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    (window.location.href = `mailto:kaputokalan@gmail?subject=${data.subject}&body=Hi My name is ${data.name}, ${data.message}`);

  // const onSubmit = async (e: any) => {
  //   const isValid = await trigger();
  //   if (!isValid) {
  //     e.preventDefault();
  //   }
  // };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kb5ngah",
        "template_npgedq8",
        e.currentTarget,
        "JxnLB6MQqcZFYl_na"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  const contactInput = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-100 text-gray-900`;

  return (
    <section
      id="contact"
      className="  relative mx-auto  flex h-full flex-col items-center justify-evenly bg-gray-20 p-10 text-center md:flex-row md:text-left"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* Header*/}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Get In Touch</span> and Get Your
            Loan Today!
          </HText>
        </motion.div>
        {/* Form and Static */}
        <div className="mt-10 justify-between gap-8 ">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              onSubmit={sendEmail}
              //   className="mx-auto flex w-fit flex-col space-y-2"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className={`${contactInput}`}
              />

              <input
                name="user_subject"
                placeholder="Subject"
                className={`${contactInput}`}
                type="text"
              />

              <input
                name="user_email"
                placeholder="Email"
                className={`${contactInput}`}
                type="email"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                cols={50}
                className={`${contactInput}`}
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-white "
              >
                Submit
              </button>
            </form>
          </motion.div>
          <div className="mt-20 flex flex-col space-y-10">
            <div className=" flex items-center justify-center text-center ">
              <HText>Or Reach Us Through The Following</HText>
            </div>
            <div className="space-y-10">
              <div className="flex items-center justify-center space-x-5">
                <PhoneIcon className="h-7 w-7 animate-pulse text-primary-500" />
                <p className="text-2xl">+260 976 799 357 / +260 973 480 167 </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                <MapPinIcon className="h-7 w-7 animate-pulse text-primary-500" />
                <p className="text-2xl">
                  3rd Floor, Premium House, Kamwala , Independence Avenue
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                <EnvelopeIcon className="h-7 w-7 animate-pulse text-primary-500" />
                <p className="text-2xl">
                  hndebele@dorsetcap.com / vvumisa@dorsetcap.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
