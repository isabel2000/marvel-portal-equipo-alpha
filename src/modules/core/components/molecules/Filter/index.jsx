import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
// import Filter_2 from "../Filter_2";

export default function Filter() {
  return (
    <div className="mvl-character-gri-filters-2">
      <input  className=" mvl-container-search-left-2" type="text" placeholder="search" />
      <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon-2"/>
    

    <div className="Col">
      <div className="Contenedor_2">
         {/* <Filter_2/> */}
      </div>
    </div>
    
    </div>

  );
}















