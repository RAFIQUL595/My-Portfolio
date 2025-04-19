import { useEffect, useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  // Update the active link based on scroll position and URL hash
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#projects", "#contact"];
      let currentSection = "#home";

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
        window.history.replaceState(null, null, currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set the active link based on the URL hash on initial load
    window.location.hash = activeLink;

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  // Add active class to the link based on the URL hash
  const hashLinkClass = (to) =>
    `text-lg relative pb-1 after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 ${activeLink === to
      ? "after:w-full bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
      : "after:w-0 hover:after:w-full hover:text-purple-300"
    }`;

  // Handle navigation click event and update the active link and URL hash
  const handleNavClick = (to) => {
    setActiveLink(to);
    window.history.replaceState(null, null, to);
  };

  // Generate the navigation links based on the sections array
  const navList = (
    <>
      {["#home", "#about", "#projects", "#contact"].map((section) => (
        <li key={section}>
          <NavHashLink
            smooth
            className={hashLinkClass(section)}
            to={section}
            onClick={() => handleNavClick(section)}
          >
            {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
          </NavHashLink>
        </li>
      ))}
    </>
  );

  return (
    // Navigation bar component with fixed position and responsive design
    <div className="navbar fixed container mx-auto z-10 backdrop-blur-md">
      <div className="navbar-start mx-5">
        <HashLink to="#home" className="text-xl">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-xl md:text-2xl">
            Rafiqul Islam
          </span>
        </HashLink>
      </div>
      <div className="navbar-end">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
          {navList}
        </ul>
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 absolute -left-20 top-10 mx-auto w-40 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;