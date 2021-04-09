import React, { useState, useEffect } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "gatsby"
import { SidebarData } from "./sidebar-data"
import * as headerStyles from "./navbar.module.scss"
import { IconContext } from "react-icons"
import Footer from "./../footer"
import { Stack, SocialLinks } from "./styles"
import logo from "./../../Images/esomorning/logo.png"




const NavBar = props => {
  const [sidebar, setSidebar] = useState(false)


  const showSidebar = () => setSidebar(!sidebar)

  const useTransparentHook = height => {
    const [isTransparent, setTransparent] = useState(true)
    useEffect(() => {
      function onScroll() {
        if (window.pageYOffset > height) {
          setTransparent(false)
          return
        }
        setTransparent(true)
      }
      window.addEventListener("scroll", onScroll)
      return () => window.removeEventListener("scroll", onScroll)
    }, [height])
    return isTransparent
  }

  const isTransparent = useTransparentHook(80)
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={headerStyles.navbar}>
          <div className={headerStyles.logo}>
            <img width="100%" height="100%" src={logo} alt="logo" />
            <ul
              className={headerStyles.navList}
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                margin: "auto",
              }}
            >
              <li>
                <Link
                  style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
                  className={(headerStyles.link)}
                  to="/"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    width: "max-content",
                  }}
                  className={(headerStyles.link)}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
                  className={(headerStyles.link)}
                  to="/hympsongs"
                >
                  Hymp Songs
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
                  className={(headerStyles.link)}
                  to="/createsong"
                >
                  Add Songs
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "rgb(255, 255, 255)", fontSize: "14px" }}
                  className={(headerStyles.link)}
                  to="/info"
                >
                  Information
                </Link>
              </li>
            </ul>
          </div>
          <div className={(headerStyles.endNav)}>
            <Stack>
              <SocialLinks
                color="red"
                href={
                  "https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw"
                }
                download
              >
                <i className="fab fa-youtube"></i>
              </SocialLinks>
              <SocialLinks
                color="pink"
                href="https://www.instagram.com/animatestv/"
              >
                <i className="fab fa-instagram"></i>
              </SocialLinks>
              <SocialLinks
                color="rgb(34,78,212)"
                href="https://www.facebook.com/animatestv"
              >
                <i className="fab fa-facebook"></i>
              </SocialLinks>
              <SocialLinks
                color="rgb(95 181 252)"
                href="https://twitter.com/AniMatesTV_"
              >
                <i className="fab fa-twitter"></i>
              </SocialLinks>
            </Stack>
            <Link to="#" className={headerStyles.menuBars}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
        </div>

        <nav
          className={
            sidebar
              ? headerStyles.navMenu.active
              : headerStyles.navMenu
          }
        >
          <ul className={headerStyles.navMenuItems} onClick={showSidebar}>
            <li className={headerStyles.navbarToggle}>
              <Link to="#" className={headerStyles.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      {props.children}
      <Footer />
    </>
  )
}

export default NavBar
