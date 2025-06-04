"use client";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";

const Email = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Emailing...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInfo),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setFormInfo({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Something's not working right now.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always looking for new experiences! My inbox is always open,
          so feel free to say hi!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/HavishGuntreddi">
            <Image src={GithubIcon} width={121} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/havish-guntreddi-a8070a2a1">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      {/* Contact Form + Info in the right column */}
      <div className="w-full lg:w-full max-w-none z-10">
        <h2 className="text-xl font-bold mb-4 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            name="name"
            value={formInfo.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 bg-black border border-gray-600 text-white placeholder-gray-400 rounded"
          />
          <input
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full p-3 bg-black border border-gray-600 text-white placeholder-gray-400 rounded shadow-sm"
          />
          <textarea
            name="message"
            value={formInfo.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 bg-black border border-gray-600 text-white placeholder-gray-400 rounded shadow-sm"
          />
          <button
            type="submit"
            className="cursor-pointer w-full p-3 bg-black border border-gray-600 text-white placeholder-gray-400 rounded hover:bg-gray-900"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
