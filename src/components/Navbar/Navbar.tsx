import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
// import React from "react";
import { toggleTheme } from "./store/themeSlice";
import { NavLink } from "react-router-dom";

const useTheme = () => {
  const theme = useSelector((state: any) => state.theme.theme); // Obtener el tema desde Redux
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  useEffect(() => {
    document.body.className = theme; // Mantiene la aplicación del tema al body
  }, [theme]);

  return { theme, handleToggleTheme };
};

//export default useTheme;

const Navbar: React.FC = () => {
  const { theme, handleToggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveMenu(null);
    setIsDesktopMenuOpen(false);
  };

  const handleClick = (menu: string) => {
    setActiveMenu((prevActiveMenu) => {
      const shouldOpen = prevActiveMenu === menu ? null : menu;
      setIsDesktopMenuOpen(shouldOpen !== null);
      return shouldOpen;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
      setMenuOpen(false);
      setActiveMenu(null);
      setIsDesktopMenuOpen(false);
    };

    setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobileView && isDesktopMenuOpen && (
        <div
          className={styles.desktopOverlay}
          onClick={() => setActiveMenu(null)}
        ></div>
      )}
      {/*********** LOGO ****************/}
      <nav
        className={`${styles.navbar} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        <NavLink to="/" className={styles.logoLink}>
          <svg
            width="403"
            height="403"
            viewBox="0 0 403 403"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoImg}
          >
            <g clip-path="url(#clip0_31_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M201.5 403C90.272 403 0 312.728 0 201.5C0 90.272 90.272 0 201.5 0C312.728 0 403 90.272 403 201.5C403 312.728 312.728 403 201.5 403Z"
                fill="#5021FF"
              />
              <path
                d="M161.241 262V141.065H246.273V167.52H194.073V188.305H241.076V214.76H194.073V262H161.241Z"
                fill="white"
              />
              <path
                d="M76.0867 197.468C76.0796 220.286 82.0383 242.563 93.3666 262.198L75 329.288L143.627 311.286C162.536 321.6 183.825 327.038 205.489 327.046H205.544C276.89 327.046 334.97 268.958 335 197.571C335.012 162.975 321.557 130.443 297.117 105.97C272.674 81.5 240.174 68.0142 205.544 68C134.187 68 76.1152 126.08 76.0867 197.468ZM116.956 258.816L114.394 254.747C103.622 237.611 97.9369 217.809 97.945 197.476C97.9673 138.141 146.234 89.8665 205.585 89.8665C234.327 89.8787 261.339 101.088 281.655 121.427C301.971 141.767 313.15 168.806 313.143 197.563C313.116 256.899 264.849 305.179 205.544 305.179H205.502C186.192 305.169 167.253 299.98 150.737 290.176L146.807 287.844L106.082 298.526L116.956 258.816Z"
                fill="url(#paint0_linear_31_2)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_31_2"
                x1="13075"
                y1="26196.8"
                x2="13075"
                y2="68"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_31_2">
                <rect width="403" height="403" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
        {/*********** BOTON HAMBURGUESA ****************/}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {!menuOpen ? (
            <i className="fa-solid fa-bars fa-lg"></i>
          ) : (
            <i className="fa-solid fa-xmark fa-lg"></i>
          )}
        </div>
        {/********* MENU PRINCIPAL ************/}
        <div
          className={`${styles.menuContainer} ${menuOpen ? styles.active : ""}`}
        >
          <ul className={styles.navbarLinks}>
            <li
              className={styles.navItem}
              onClick={() => handleClick("productos")}
            >
              Products
              <span
                className={`${styles.chevronIcon} ${
                  activeMenu === "productos" ? styles.chevronUp : ""
                }`}
              >
                {/* Chevron down */}
                <i className="fa-solid fa-chevron-down fa-sm"></i>
              </span>
              {activeMenu === "productos" && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuContent}>
                    <h3 className={styles.menuTitle}>Products</h3>
                    <div className={styles.megaMenuColumns}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-cloud fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Cloud storage</h4>
                          <p>Keep your files in a safe place</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-shield fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>VPN</h4>
                          <p>Protect your privacy online</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-lock fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4>Password Manager</h4>
                          <p>Protect passwords and access them on any device</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-comment fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Chat and meetings</h4>
                          <p>Secure and private conversations</p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-database fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Object Storage</h4>
                          <p>Expandable and S3-compatible storage</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-folder-tree fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Backups</h4>
                          <p>Back up your files safely</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-repeat fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Synchronize</h4>
                          <p>Sync your files </p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-image fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Multimedia files</h4>
                          <p>Store and organize your media files</p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-arrow-up-from-bracket fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Share</h4>
                          <p>Share your files with friends</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className={styles.navItem}
              onClick={() => handleClick("soluciones")}
            >
              Solutions
              <span
                className={`${styles.chevronIcon} ${
                  activeMenu === "soluciones" ? styles.chevronUp : ""
                }`}
              >
                {/* Chevron down */}
                <i className="fa-solid fa-chevron-down fa-sm"></i>
              </span>
              {activeMenu === "soluciones" && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuContent}>
                    <h3 className={styles.menuTitle}>Solutions</h3>
                    <div className={styles.megaMenuColumnsSoluciones}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-face-smile fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Private users</h4>
                          <p>Personal accounts for daily use</p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-video fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Freelancers</h4>
                          <p>
                            Creatives, contractors, consultants, and
                            entrepreneurs
                          </p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-user-group fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Small Business</h4>
                          <p>
                            Startups, merchants, family businesses, and
                            retailers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className={styles.navItem}>
              {" "}
              <NavLink
                to="/business"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                Business
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/precios"
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                Prices
              </NavLink>
            </li>

            <li
              className={styles.navItem}
              onClick={() => handleClick("recursos")}
            >
              Resources
              <span
                className={`${styles.chevronIcon} ${
                  activeMenu === "recursos" ? styles.chevronUp : ""
                }`}
              >
                {/* Chevron down */}
                <i className="fa-solid fa-chevron-down fa-sm"></i>
              </span>
              {activeMenu === "recursos" && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuContent}>
                    <h3 className={styles.menuTitle}>Resources</h3>
                    <div className={styles.megaMenuColumns}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-circle-info fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Help Center</h4>
                          <p>Guidance and support </p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-message fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Contact Us</h4>
                          <p>Have questions? Contact us</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-pen-to-square fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Blog</h4>
                          <p>The latest news, tips, and ideas </p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-shield fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Vulnerability Rewards Program</h4>
                          <p>Report a bug or problem</p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-globe fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Reliability</h4>
                          <p>
                            Find out how we keep your data accesible anytime,
                            anywhere
                          </p>
                        </div>
                      </div>

                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-code fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Developers</h4>
                          <p>
                            Check out our source code and software development
                            kit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <div className={styles.rightContainer}>
            <div className={styles.iconContainer}>
              {" "}
              <i className="fa-solid fa-globe fa-lg"></i>
              <i
                onClick={handleToggleTheme}
                className={
                  theme === "dark-mode" ? "fa-solid fa-sun" : "fa-solid fa-moon"
                }
              ></i>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonLogin}>Log in</button>
              <button className={styles.buttonRegister}>Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
