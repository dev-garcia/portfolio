"use client";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiCodeAlt } from "react-icons/bi";
import { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav className="font-sans">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          title="Início"
          aria-label="Ir para a seção de início"
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#sobre"
          onClick={() => setActiveNav("#sobre")}
          title="Sobre"
          aria-label="Ir para a seção sobre"
          className={activeNav === "#sobre" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#competencias"
          onClick={() => setActiveNav("#competencias")}
          title="Competências"
          aria-label="Ir para a seção de competências"
          className={activeNav === "#competencias" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#projetos"
          onClick={() => setActiveNav("#projetos")}
          title="Projetos"
          aria-label="Ir para a seção de projetos"
          className={activeNav === "#projetos" ? "active" : ""}
        >
          <BiCodeAlt />
        </a>
        <a
          href="#contato"
          onClick={() => setActiveNav("#contato")}
          title="Rodapé"
          aria-label="Ir para a seção do rodapé da página"
          className={activeNav === "#contato" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
