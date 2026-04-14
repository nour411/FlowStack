import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../constants/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavBar = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center ">
          {/* left side of navbare */}
          <div className="flex items-center shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">
              Flow
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-transparent bg-clip-text">
                Stack
              </span>
            </span>
          </div>

          {/* middle side of navbare */}
          <nav className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* right side of navbare */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-emerald-400 to-emerald-700 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar} aria-label="Toggle menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed right-0 top-full z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-emerald-400 to-emerald-700"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
