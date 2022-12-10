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

function SearchPage() {
  return (
      <div className="mvl-container-search">   
      <input className="mvl-container-search-left" type="text" placeholder="SEARCH"/>
      <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon2"/> 
       
        <div className="mvl-container-search-MOVIE">   
        <select className="mvl-container-select-Movie" multiple size="8"  >
                <option value="1">lola</option>
                <option value="2">lola</option>
                <option value="3">lola</option>
                <option value="4">lola</option>
                <option value="5">lola</option>
                <option value="6">lola</option>
                <option value="7">lola</option>
                <option value="8">lola</option>  

                <div className="filters__buttons">
                <div className='filters__button-left'></div>
                <div className='filters__button-right'>
                <button type='button' className="filters__button"></button>
                <button type='button' className='filters__button'>Cancel</button>
            </div>
          </div>
          </select>

          <button className='TV' type=""> TV</button>

              <select className="mvl-container-select-TV" type="select"  />
                 
            </div>   
            </div>  
            
          
          );
        }

export {SearchPage};
