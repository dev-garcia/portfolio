import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Nav from "@/components/nav/nav";
import Projetos from "@/components/projetos/projetos";
import Sobre from "@/components/sobre/sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
}
