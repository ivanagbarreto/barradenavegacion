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
          <img
            className={styles.logoImg}
            width={32}
            height={32}
            src="https://mega.io/es/wp-content/themes/megapages/megalib/images/megaicon.svg"
            alt="MEGA Logo"
          />
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
                          <p>
                            Protect passwords and access them on any device
                          </p>
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
                          <p>Sync your files with MEGA</p>
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
                            Creatives, contractors, consultants, and entrepreneurs
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
                            Startups, merchants, family businesses, and retailers
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
                          <p>Guidance and support for MEGA products</p>
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
                          <p>The latest news, tips, and ideas from MEGA</p>
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
                            Find out how we keep your data accesible anytime, anywhere
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
                            Check out our source code and software development kit
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
