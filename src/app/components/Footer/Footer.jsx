import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="flex items-end bg-[#1f2937] font-sans font-normal"
    >
      <div className="mt-4 w-full font-sans text-white ">
        <div className="md:flex-no-wrap container mx-auto flex ">
          <div className="mx-auto flex-shrink-0  ">
            <Link
              className="flex items-center justify-center text-gray-900"
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
                  className="cursor-pointer hover:text-black"
                  href="https://www.facebook.com/profile.php?id=100022676791816"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://www.instagram.com/cristiangarci.a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://github.com/dev-garcia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  className="ml-3 cursor-pointer hover:text-black"
                  href="https://www.linkedin.com/in/cristian-garcia-web/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx={4} cy={4} r={2} stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-4">
          <p className="mt-4 text-sm capitalize md:mb-32 xl:text-center">
            © 2023 Cristian Garcia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
