import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="flex items-end bg-[#1f2937] font-sans font-normal"
    >
      <div className="mt-4 w-full font-sans text-white ">
        <div className="md:flex-no-wrap container mx-auto flex ">
          <div className="mx-auto flex-shrink-0">
            <Link
              className="flex items-center justify-center"
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
                  <BsGithub size="32" />
                </a>

                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://www.linkedin.com/in/cristian-garcia-web/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin size="32" />
                </a>

                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://api.whatsapp.com/send?phone=5592986032632"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size="32" />
                </a>

                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://t.me/Cristian_GarciaM"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <FaTelegram size="32" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-4">
          <p className="mt-4 text-sm capitalize md:mb-32 xl:text-center">
            © 2024 Cristian Garcia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
