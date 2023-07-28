import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {


  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-white/50">
        <Link
            to="banner"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center link"
          >
            <BiHomeAlt className="text-2xl" />
          </Link>

          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-4}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center link"
          >
            <BiUser className="text-2xl" />
          </Link>

          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={1}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center link"
          >
            <BsClipboardData className="text-2xl" />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center link"
          >
            <BsChatSquare className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
