import "./styles.css";
import LinkedIn from "./../../assets/img/LinkedIn.svg";
import github from "./../../assets/img/github.svg";
import email from "./../../assets/img/email.svg";
import cv from "./../../assets/img/cv.svg";

export default function LinksIcon() {
  return (
    <div className="icon">
      <a href="https://github.com/AllMaciente" target="_blank">
        <img src={github} alt="" />
      </a>

      <a href="#">
        <img src={cv} alt="" />
      </a>

      <a href="https://www.linkedin.com/in/allan-m-0734162a9/" target="_blank">
        <img src={LinkedIn} alt="" />
      </a>

      <a href="mailto:allanmaciente06@gmail.com">
        <img src={email} alt="" />
      </a>
    </div>
  );
}
