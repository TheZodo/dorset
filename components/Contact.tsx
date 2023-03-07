"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "./HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) =>
  // 	(window.location.href = `mailto:kaputokalan@gmail?subject=${data.subject}&body=Hi My name is ${data.name}, ${data.message}`)

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const contactInput = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-100 text-gray-900`;

  return (
    <section
      id="contact"
      className="  relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* Header */}
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            perspiciatis.
          </p>
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
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/kaputokalan11@gmail.com"
              //   className="mx-auto flex w-fit flex-col space-y-2"
            >
              <input
                {...(register("name"), { required: true, maxLength: 100 })}
                placeholder="Name"
                className={`${contactInput}`}
                type="text"
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 ">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                placeholder="Email"
                className={`${contactInput}`}
                type="email"
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "Email is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                {...(register("message"), { required: true, maxLength: 2000 })}
                placeholder="Message"
                rows={4}
                cols={50}
                className={`${contactInput}`}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 ">
                  {errors.message.type === "required" && "Name is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
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
                  3rd Floor, Premium House, Kamwala , Opposite independence
                  Avenue
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
