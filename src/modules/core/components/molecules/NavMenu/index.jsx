import { NavLink } from 'react-router-dom';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo"  />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Characters" target="_bank" >
            Characters
          </NavLink>     
        </div>
      </div>

      <div className="Search-container mvl-navbar--right "></div>

      <div className="Search desktopNav__tabContainer" ></div>
         <a id="search" className="search desktopNav__tab" aria-label="búsqueda" href="/search"> 
            <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon" href="/search" 
            aria-hidden="true"/> 
        </a>
    </nav>
  );
}