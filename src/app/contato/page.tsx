"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import Header from "../components/header/header";

export default function Contato() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formattedData = `
      Primeiro Nome: ${formData.firstName}
      Sobrenome: ${formData.lastName}
      Empresa: ${formData.company}
      Email: ${formData.email}
      Seu número: ${formData.phoneNumber}
      Mensagem: ${formData.message}
    `;

    window.location.href = `mailto:garcia.ac.cristian@gmail.com?subject=Contato&body=${encodeURIComponent(
      formattedData,
    )}`;
  };

  return (
    <>
      <Header />

      <section className="bubbles lg:min-h-screen">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div className="section-contato px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Entre em Contato
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Fique à vontade para entrar em contato através das plataformas
              abaixo:
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://api.whatsapp.com/send?phone=5592986032632"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-[#25D366] hover:text-green-500"
              >
                <FaWhatsapp size={32} />
              </a>
              <a
                href="https://t.me/Cristian_GarciaM"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="text-[#0088cc] hover:text-blue-500"
              >
                <FaTelegram size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-contato px-6 lg:px-8">
          <div className="mx-auto text-center">
            <p className="text-lg leading-8 text-gray-600">
              Ou envie um email, os dados não são obrigatórios!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-4 max-w-xl sm:my-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Nome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Sobrenome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6"
                >
                  Empresa
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Seu principal Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6"
                >
                  Seu número
                </label>{" "}
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
                    >
                      <option>BR</option>
                      <option>US</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Mensagem
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#1f2937]  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="flex items-end bg-[#1f2937] font-sans font-normal">
        <div className="mt-4 w-full font-sans text-white ">
          <div className="md:flex-no-wrap container mx-auto flex ">
            <div className="mx-auto flex-shrink-0">
              <Link
                className="flex items-center justify-center  "
                href="/"
                aria-label="Voltar para o início"
              >
                <Image
                  src={"/images/Cristian_cyberpunk_8k-Dois.png"}
                  alt="imagem do menu"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
              </Link>
              <p className="mt-2 text-sm font-medium text-[#00d8ff]">
                Web Developer
              </p>
              <div className="mt-4">
                <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0">
                  <a
                    className="ml-3 cursor-pointer hover:text-black"
                    href="https://github.com/dev-garcia"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <BsGithub />
                  </a>

                  <a
                    className="ml-3 cursor-pointer hover:text-black"
                    href="https://www.linkedin.com/in/cristian-garcia-web/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <BsLinkedin />
                  </a>

                  <a
                    className="ml-3 cursor-pointer hover:text-black"
                    href="https://api.whatsapp.com/send?phone=5592986032632"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                  <a
                    className="ml-3 cursor-pointer hover:text-black"
                    href="https://t.me/Cristian_GarciaM"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                  >
                    <FaTelegram />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-5 py-4">
            <p className="mt-4 text-sm capitalize md:mb-4 xl:text-center">
              © 2024 Cristian Garcia.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
