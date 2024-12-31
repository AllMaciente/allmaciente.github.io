import LinksIcon from "../linksIcon";
import "./desktop.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function DesktopHeader(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (props.fullScreen) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [props.fullScreen]);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <section className={!scrolled && "preScroll"}>
        <div className={`title ${scrolled ? "title-scrolled" : ""}`}>
          {!scrolled && <h3 className="color">Hello, I am </h3>}
          <h3>{!scrolled ? "Allan" : "All"} </h3>
          <h3>Maciente</h3>
        </div>
        <div className={scrolled ? "hide" : "preScroll"}>
          <section>
            <h1>Developer</h1>
            <LinksIcon />
          </section>
        </div>
      </section>
      <section>
        <nav className={!scrolled ? "hide" : "preScroll"}>
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
// Validação de props
DesktopHeader.propTypes = {
  fullScreen: PropTypes.bool,
};

// Valor padrão para a prop
DesktopHeader.defaultProps = {
  fullScreen: true,
};
