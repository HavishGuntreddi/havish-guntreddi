"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>React</li>
        <li>Unity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>West Forsyth High School</li>
      </ul>
    ),
  },
  /*
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li>
</li>
      </ul>
    ),
  },
  */
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pfp.JPG" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I'm Havish, an aspiring Computer Science student with a strong
            interest in software development, back-end development, and machine
            learning. I'm currently a senior in high school, hoping to attend
            Georgia Tech after graduation. I have a strong understanding in
            full-stack development with a focus in backend development. Through
            coursework and personal projects, I’ve gained hands-on experience
            with languages and frameworks such as JavaScript, Python, React,
            Node.js, Express.js, and MongoDB. When I’m not coding, I enjoy
            solving puzzles, staying active, and creating VR games. I'm always
            looking to learn something new and challeneg myself.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
