import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
// import React from "react";
import { toggleTheme } from "./store/themeSlice";

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
      <nav className={`${styles.navbar} ${theme === "dark" ? styles.dark : styles.light}`}>
        <img
          className={styles.logoImg}
          width={32}
          height={32}
          src="https://mega.io/es/wp-content/themes/megapages/megalib/images/megaicon.svg"
          alt="MEGA Logo"
        />
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
              Productos
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
                  <h3 className={styles.menuTitle}>PRODUCTOS</h3>
                  <div className={styles.megaMenuColumns}>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 1************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-cloud fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Almacenamiento en la nube</h4>
                          <p>Guarda tus archivos en un lugar seguro</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-database fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Almacenamiento de objetos</h4>
                          <p>Almacenamiento expandible y compatible con S3</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-arrow-up-from-bracket fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          {" "}
                          <h4>Compartir</h4>
                          <p>Comparte tus archivos con amigos</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 2************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-shield fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>VPN</h4>
                          <p>Protege su privacidad en línea</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-folder-tree fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Backups</h4>
                          <p>Haz un backup de tus archivos de forma segura</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 3************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-lock fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4>Gestor de contraseñas</h4>
                          <p>
                            Protege las contraseñas y accede a ellas en
                            cualquier dispositivo
                          </p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-repeat fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Sincronizar</h4>
                          <p>Sincroniza tus archivos con MEGA</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 4************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-comment fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Chat y reuniones</h4>
                          <p>Conversaciones seguras y privadas</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-image fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Archivos multimedia</h4>
                          <p>Almacena y organiza tus archivos multimedia</p>
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
              Soluciones
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
                  <h3 className={styles.menuTitle}>SOLUCIONES</h3>
                  <div className={styles.megaMenuColumns}>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-face-smile fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Particulares</h4>
                          <p>Cuentas personales para usar a diario</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-video fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4> Autónomos</h4>
                          <p>
                            Creativos, contratistas, consultores y emprendedores
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-user-group fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Pequeño negocio</h4>
                          <p>
                            Empresas emergentes, comerciantes, empresas
                            familiares y minoristas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className={styles.navItem}>Business</li>
            <li className={styles.navItem}>Precios</li>
            <li
              className={styles.navItem}
              onClick={() => handleClick("recursos")}
            >
              Recursos
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
                  <h3 className={styles.menuTitle}>RECURSOS</h3>
                  <div className={styles.megaMenuColumns}>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 1************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-circle-info fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4> Centro de ayuda</h4>
                          <p>Guia y soporte para los productos de MEGA</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-globe fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Fiabilidad</h4>
                          <p>
                            Descubre como mantenemos tus datos accesibles en
                            cualquier momento y lugar
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 2************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-message fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4> Contáctanos</h4>
                          <p>¿Tenes preguntas? Contactanos</p>
                        </div>
                      </div>
                      <div className={styles.menuItem}>
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-code fa-lg"></i>
                        </div>
                        <div className={styles.textColumn}>
                          <h4> Desarrolladores</h4>
                          <p>
                            Consulta nuestro codigo fuente y nuestro kit de
                            desarrollo de software
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 3************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-pen-to-square fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4> Blog</h4>
                          <p>Las últimas noticias, consejos e ideas de MEGA</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.megaColumn}>
                      <div className={styles.menuItem}>
                        {/********* COLUMNA 4************/}
                        <div className={styles.iconColumn}>
                          <i className="fa-solid fa-shield fa-lg"></i>
                        </div>

                        <div className={styles.textColumn}>
                          <h4>
                            Programa de recompensas de vulnererabilidadess
                          </h4>
                          <p>Conversaciones seguras y privadas</p>
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
                <i
                  className="fa-solid fa-globe fa-lg"
                  
                ></i>
              
              
            <i
              onClick={handleToggleTheme}
              className={theme === "dark-mode" ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            ></i>
              
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonLogin}>Iniciar sesión</button>
              <button className={styles.buttonRegister}>Registrarse</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;