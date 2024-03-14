import { useEffect, useState } from "react";
import "./../Css/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="Header" className={isScrolled ? "scrolled" : ""}>
      <div className="Buttons">
        <button className="header-button" onClick={scrollToTop}>
          Inicio
        </button>
        <button
          className="header-button"
          onClick={() => scrollToSection("proyectos")}
        >
          Proyectos
        </button>
        <button
          className="header-button"
          onClick={() => scrollToSection("experiencia")}
        >
          Experiencia
        </button>
      </div>
    </div>
  );
}

export default Header;
