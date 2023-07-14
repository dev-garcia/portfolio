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
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#sobre"
          onClick={() => setActiveNav("#sobre")}
          className={activeNav === "#sobre" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#competencias"
          onClick={() => setActiveNav("#competencias")}
          className={activeNav === "#competencias" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#projetos"
          onClick={() => setActiveNav("#projetos")}
          className={activeNav === "#projetos" ? "active" : ""}
        >
          <BiCodeAlt />
        </a>
        <a
          href="#contato"
          onClick={() => setActiveNav("#contato")}
          className={activeNav === "#contato" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
