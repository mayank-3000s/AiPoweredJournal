import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = ({ token }) => {
  const [isAccess, setAccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Check token
  useEffect(() => {
    setAccess(!!token);
  }, [token]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll) {
        setShowHeader(true); // scroll up
      } else if (currentScroll > lastScroll + 10) {
        setShowHeader(false); // scroll down
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Spacer */}
      <div className="h-[72px]"></div>

      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-white shadow-sm"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 text-gray-800">
              <svg
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
              <h2 className="text-xl font-bold">ReflectAI</h2>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 translate-x-[15rem]">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/entries">Entries</NavLink>
              <NavLink to="/weekstats">Weekly Stats</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* Buttons Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {isAccess ? (
                <NavLink
                  to="/profile"
                  className="h-10 px-4 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center"
                >
                  Profile
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="h-10 px-4 rounded-lg text-gray-800 hover:bg-gray-100 flex items-center justify-center"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="h-10 px-4 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center"
                  >
                    Signup
                  </NavLink>
                </>
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <HiX className="w-6 h-6 text-gray-800" />
                ) : (
                  <HiMenu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md flex flex-col gap-2 px-6 py-4 z-40"
          >
            <NavLink onClick={() => setMenuOpen(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/entries">
              Entries
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/weekstats">
              Weekly Stats
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </NavLink>
            {isAccess ? (
              <NavLink
                onClick={() => setMenuOpen(false)}
                to="/profile"
                className="h-10 px-4 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center mt-2"
              >
                Profile
              </NavLink>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to="/login"
                  className="h-10 px-4 rounded-lg text-gray-800 hover:bg-gray-100 flex items-center justify-center"
                >
                  Login
                </NavLink>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to="/signup"
                  className="h-10 px-4 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center"
                >
                  Signup
                </NavLink>
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
