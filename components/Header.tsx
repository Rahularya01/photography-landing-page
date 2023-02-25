import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
// Link
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href={"/"} className="max-w-[200px]">
          <Image src={Logo} alt="Alina Lee" />
        </Link>
        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            href={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            href={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
        {/* Social Links */}
        <Socials />
        {/* Mobile Nav */}
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
