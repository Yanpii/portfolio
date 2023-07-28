import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-8 ">
      <div className="container mx-auto"></div>
      <div className="flex justify-between items-center">
        <motion.img
          src="/image/logo.png"
          alt="Logo"
          className="h-20 w-auto rounded-full border border-white border-2"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />

        <Link href="/downloads/CV_JUAN_GONZALEZ.pdf" target="_blank" className="btn rounded-full font-primary text-white pt-3 font-bold h-[48px] px-6 text-sm">
          Download CV
        </Link>
      </div>
    </header>
  );
};

export default Header;
