import "./styles.css";
import { useEffect, useState } from "react";

function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Ativa o estado enquanto o scroll não está no topo
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <section>
        <div className={`title ${scrolled ? "title-scrolled" : ""}`}>
          {scrolled ? <></> : <h3 className="color">Hello, I'm</h3>}
          <h3>{scrolled ? "All" : "Allan"}</h3>
          <h3>Maciente</h3>
        </div>
        <div className={scrolled ? "hide" : "preScroll"}>
          <section>
            <h1>Developer</h1>
          </section>
        </div>
      </section>
    </header>
  );
}

export default function Cabecalho() {
  return <DesktopHeader />;
}
