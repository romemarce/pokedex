// import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
// import { useState } from 'react'
// import { getLocalStorage, saveLocalStorage } from '../localstorage';
// import IconComponent from './IconComponent';
import { Link } from "react-router-dom";

export const AppContainer = ({ children }: any) => {
  const creditsUrl = "https://www.romerodev.com.ar/";
  // let localStorage = getLocalStorage()

  // const [darkmode, setDarkMode] = useState(localStorage.darkmode);

  // const toggleTheme = () => {
  //   localStorage.darkmode = !darkmode
  //   saveLocalStorage(localStorage)
  //   setDarkMode(!darkmode);
  // }

  return (
    // <section className={`app-container ${darkmode ? 'darkmode': ''}`}>
    <section className={`app-container`}>
      <section className="page-container">
        {/* <header className='header'>
          <button onClick={toggleTheme}>
            <IconComponent icon={darkmode ? faSun : faMoon} size="1x" />
          </button>
        </header> */}
        {children}
        <footer className="footer">
          <Link className="credit-url" to={creditsUrl} target="_blank">
            RomeroDev
          </Link>
        </footer>
      </section>
    </section>
  );
};
