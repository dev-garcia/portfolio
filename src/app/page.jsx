import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Sobre from "./components/Sobre/Sobre";
import Competencias from "./components/Competencias/Competencias";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Competencias />
      <Projetos />
      <Footer />
    </>
  );
}
