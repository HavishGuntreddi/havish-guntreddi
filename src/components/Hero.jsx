"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Havish Guntreddi", 1000]}
              wrapper="span"
              speed={50}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 md:text-[17px] lg:text-xl">
            Aspiring AI/ML engineer and passionate full-stack developer
          </p>
          <div>
            <Link
              href="Resume.docx.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  text-white mt-3"
            >
              <span className="block text-base bg-amber-50 hover:bg-gray-300 rounded-full px-5 py-2 text-gray-800">
                View Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[350px] h-[250px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] relative">
            <Image
              src="/images/pfp.JPG"
              alt="hero image"
              className="rounded-4xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
