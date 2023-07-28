import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
 
      <Header />

      <Navbar />

      <Banner />

      <About />

      <Portfolio />

      <Contact />

      <Footer />
    </div>
  );
}
