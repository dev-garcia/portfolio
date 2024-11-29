"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <Disclosure className="bg-[#1f2937] font-sans" as="header">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                  <div className=" flex flex-1 items-center justify-center font-bold sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        <Link
                          href="/"
                          aria-label="Ir para a página de início"
                          title="início"
                          className="text-white hover:text-[#00d8ff]"
                        >
                          Home
                        </Link>
                        <Link
                          href="/contato"
                          aria-label="Ir para a página de contato"
                          title="contato"
                          className="text-white hover:text-[#00d8ff]"
                        >
                          Contato
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Link href="/" aria-label="Voltar para o início">
                            <Image
                              src={"/images/Cristian_cyberpunk_8k-Dois.png"}
                              alt="link para a home com imagem"
                              width={32}
                              height={32}
                              className="h-8 w-8 rounded-full"
                            />
                          </Link>
                        </MenuButton>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-12 pb-3 pt-2 font-bold">
                  <Link
                    href="/"
                    aria-label="Ir para a página de início"
                    title="início"
                    className="p-4 text-white hover:text-azulPiscina"
                  >
                    Home
                  </Link>
                  <Link
                    href="/contato"
                    aria-label="Ir para a página de contato"
                    title="contato"
                    className="text-white hover:text-azulPiscina"
                  >
                    Contato
                  </Link>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
};

export default Header;
