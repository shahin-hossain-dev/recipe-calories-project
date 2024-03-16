import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className=" mt-12 lg:mt-24 bg-[#12132D0D] py-12 lg:p-24">
        <div className="flex flex-col items-center space-y-6">
          <a className="text-[#150B2B] text-2xl lg:text-3xl font-bold font-lexend">
            Recipe Calories
          </a>
          <p className="text-[#150B2B99] text-secondary-color mx-auto px-3 lg:w-6/12 text-base text-center inter-font">
            Explore endless culinary possibilities with Recipe Calories. Embrace
            the joy of cooking, one delicious recipe at a time.
          </p>
          <div className="flex gap-8 text-xl">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <hr className="border my-6" />
        <p className="text-secondary-color font-lg text-center">
          <small>2024, All Rights Reserved.</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
