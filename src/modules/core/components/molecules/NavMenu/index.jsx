import { NavLink } from 'react-router-dom';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Characters
          </NavLink>      
        </div>
      </div>

      <div className="Search-container mvl-navbar--right "></div>
      <NavLink className="mvl-navbar-item--text " to="/search"> 
        <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon"/>
        </NavLink>     
    </nav>
  );
}

function SearchPage() {
  return (
      <div className="mvl-container-search">    
      <input className="mvl-container-search-left" type="text" placeholder="SEARCH"/>
      <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon2"/>
      {/* <select className="mvl-container-select-Movie" type="select" id="select">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select className="mvl-container-select-TV" type="select" id="select">
      <option value="">none</option>
        <option value="none"></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select> */}
     </div>

   
        

     
     
  );
}

export {SearchPage};
  

    

     

     
 