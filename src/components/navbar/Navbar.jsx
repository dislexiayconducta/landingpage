"use client";
import { Link } from "react-scroll";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-background-secondary">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="inicio"
              smooth
              className="text-neutral-b0 font-medium text-2xl cursor-pointer"
            >
              DislexiaConducta
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="nosotros" smooth>
                <Button variant="optionHeader" size="option">
                  Nosotros
                </Button>
              </Link>
              <Link to="para-ti" smooth>
                <Button variant="optionHeader" size="option">
                  Para quien
                </Button>
              </Link>
              <Link to="modalidades" smooth>
                <Button variant="optionHeader" size="option">
                  Modalidades
                </Button>
              </Link>
              <Link to="servicios" smooth>
                <Button variant="optionHeader" size="option">
                  Servicios
                </Button>
              </Link>
              <Link to="contacto" smooth>
                <Button variant="optionHeader" size="option">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
