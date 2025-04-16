import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 font-tomorrow-regular backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-2 bg-purple-950/80 shadow-md" : "py-5 bg-purple-950/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-2"> {/* px-2 to move logo/title even more left */}
        <nav className="flex justify-between items-center font-inter">
          {/* Logo and Title - Aligned Left & Logo Shrinks on Scroll */}
          <div className="flex justify-start items-center space-x-3">
            <img
              src="/wie_logo.png"
              alt="WIE Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-10" : "h-8 sm:h-12"
              }`}
            />
            <Link
              to="/"
              className={`text-purple-200 font-bold tracking-wide font-cambo transition-all duration-300 ${
                scrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              IEEE WIE MUJ
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all ${
                    isActive
                      ? "text-purple-100 border-b-2 border-purple-400"
                      : "text-purple-300 hover:text-purple-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-300 hover:text-purple-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-purple-950/80 backdrop-blur-lg z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-2xl font-semibold px-4 py-2 transition-colors ${
                  isActive
                    ? "text-purple-100 border-b-2 border-purple-300"
                    : "text-purple-300 hover:text-white"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
