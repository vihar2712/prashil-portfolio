import data from "../myData.json";
// import $ from "jquery";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [header, setHeader] = useState("affix-top")

const listenScrollEvent = (event) => {
  if (window.scrollY < 400) {
    return setHeader("affix-top")
  } else if (window.scrollY >= 400) {
    return setHeader("affix")
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);
  const [navClick, setNavClick] = useState(false);
  const [navShow, setNavShow] = useState(false);
  function showNav() {
    setNavClick(!navClick);
    setNavShow(!navShow);
    // $("ul.nav").toggleClass("show");
  }
  return (
    <nav className={"custom-navbar "+ header}>
      <div className="container">
        <a className="logo" href="#home">
          {data.name}
        </a>
        <ul className={navShow ? "nav show" : "nav"}>
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#skills">
              Skills
            </a>
          </li>
          <li className="item">
            <a className="link" href="#experience">
              Experience
            </a>
          </li>
          <li className="item">
            <a className="link" href="#projects">
              Projects
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button
          id="nav-toggle"
          onClick={showNav}
          className={
            navClick
              ? "hamburger hamburger--elastic is-active"
              : "hamburger hamburger--elastic"
          }
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
