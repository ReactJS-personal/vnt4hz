import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import useSound from "use-sound";
import hoverSound from "../../assets/sounds/hoverSound.mp3";
import modeOff from "../../assets/sounds/modeOff.mp3";
import modeOn from "../../assets/sounds/modeOn.mp3";
import DataPfl from "../../utils/DataPft";
import ScrollProgress from "../HeaderProgress";
import Sparkles from "../Sparkles";
import ToggleDarkMode from "../ToggleDarkMode";
import "./Header.css";

function Header(props) {
  const pathName = props?.location?.pathname;
  const theme = props.theme;
  const toggleTheme = props.toggleTheme;
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const handleMenuClick = () => setClick(!click);
  const handleMenuClose = () => setClick(false);
  const [playOn] = useSound(modeOn);
  const [playOff] = useSound(modeOff);
  const multipleDarkModeOn = () => {
    toggleTheme();
    playOn();
  };
  const multipleDarkModeOff = () => {
    toggleTheme();
    playOff();
  };
  const [playHover] = useSound(hoverSound);
  // handle scroll navbar
  const changeScrollLogo = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", changeScrollLogo);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className={clsx("header", scrollNav && "sticky")}
      >
        <Nav.Link
          onClick={handleMenuClose}
          eventKey="1"
          as={NavLink}
          to="/"
          className="header_navLink"
        >
          <Navbar.Brand className="header_homepage">
            <h6 className="LogoNTV">
              <span
                style={{ fontSize: "22px" }}
                className={scrollNav ? "handleLogoScroll" : "LogoHide"}
              >
                &#847;{" "}
              </span>
              <span
                style={{ fontSize: "22px" }}
                className={scrollNav ? "handleLogoScroll" : "LogoHide"}
              >
                &#847;{" "}
              </span>
              <span
                style={{ fontSize: "22px" }}
                className={scrollNav ? "handleLogoScroll" : "LogoHide"}
              >
                &lt;
              </span>
              <Sparkles enabled>
                <span className={scrollNav === false ? "" : "LogoHide"}>N</span>
                <span className={scrollNav === false ? "" : "LogoHide"}>
                  T{" "}
                </span>
                <span className={scrollNav ? "handleLogoCl" : ""}>V</span>
                <span className={scrollNav ? "handleLogoCl" : ""}>i</span>
                <span className={scrollNav ? "handleLogoCl" : ""}>n</span>
                <span className={scrollNav ? "handleLogoCl" : ""}>h</span>
              </Sparkles>
              <span
                className={
                  scrollNav ? "handleLogoScroll handleLogoCl" : "LogoHide"
                }
              >
                &#499;{" "}
              </span>
              <span className={scrollNav ? "handleLogoScroll" : "LogoHide"}>
                &#847;
              </span>
              <span className={scrollNav ? "handleLogoScroll" : "LogoHide"}>
                {" "}
                &frasl;{" "}
              </span>
              <span
                style={{ fontSize: "22px" }}
                className={scrollNav ? "handleLogoScroll" : "LogoHide"}
              >
                &gt;
              </span>
            </h6>
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleMenuClick}
          className={click ? "nav-toggle-changeIcon" : ""}
        />

        <Navbar.Collapse>
          <Nav className="header-icon_left">
            <Nav.Link
              onClick={handleMenuClick}
              eventKey="2"
              as={NavLink}
              to="/"
              className={
                pathName === "/"
                  ? "header-homepageIcon_active"
                  : "header-homepageIcon"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={handleMenuClick}
              eventKey="3"
              as={NavLink}
              to="/pflio"
              className={
                pathName === "/pflio"
                  ? "header-homepageIcon_active"
                  : "header-homepageIcon"
              }
            >
              Project
            </Nav.Link>

            <Nav.Link
              onClick={handleMenuClick}
              eventKey="3"
              as={NavLink}
              to="/blog"
              className={
                pathName === "/blog"
                  ? "header-homepageIcon_active"
                  : "header-homepageIcon"
              }
            >
              Blog
            </Nav.Link>

            <Nav.Link
              onClick={handleMenuClick}
              eventKey="3"
              as={NavLink}
              to="/contact"
              className={
                pathName === "/contact"
                  ? "header-homepageIcon_active"
                  : "header-homepageIcon"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="header-icon_right">
            {Object.keys(DataPfl.social).map((key, likekey) => (
              <a
                key={likekey}
                href={DataPfl.social[key].link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playHover()}
              >
                {DataPfl.social[key].icon}
              </a>
            ))}

            <Nav.Link
              onClick={handleMenuClick}
              eventKey="1"
              className="header_navLink"
            >
              {theme === "light" ? (
                // <NightsStayIcon
                //   className="darkMode"
                //   onClick={multipleDarkModeOn}
                // />
                <ToggleDarkMode Click={multipleDarkModeOn} />
              ) : (
                // <WbSunnyOutlinedIcon
                //   className="darkMode2"
                //   onClick={multipleDarkModeOff}
                // />
                <ToggleDarkMode Click={multipleDarkModeOff} />
              )}
            </Nav.Link>
          </div>
        </Navbar.Collapse>
        {/* scroll progress bar style with styled-components                                   */}
        <ScrollProgress />
      </Navbar>
    </>
  );
}

export default withRouter(Header);
