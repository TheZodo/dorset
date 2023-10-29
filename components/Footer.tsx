import Image from "next/image";
import React from "react";
import Logo from "../assets/ddp.svg";
import DorsetLogo from "../assets/Dorset-Capital-Logo.png";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 grid basis-1/2 grid-cols-2 md:mt-0">
          <Image src={DorsetLogo} height={200} width={200} alt="Dorset Logo" />
          <Image src={Logo} height={200} width={200} alt="Dorset Logo" />
          <p className="my-5">
            Dorset Capital Limited is a registered money lending company that
            offers financial solutions to employees, informal traders and small
            businesses
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Follow Us On</h4>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100076248401528"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/dorsetpay/?hl=en"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p>
            7th Floor, Office 701 Premium House, Kamwala , Independence Avenue
          </p>
          <p>+260 976 799 357</p>
          <p>+260 973 480 167</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center text-center">
        {" "}
        &copy; {new Date().getFullYear()} Dorset Captial Limited. All rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
