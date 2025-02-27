import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/client';
// import { RiArrowDropDownFill } from 'react-icons/ri';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsName } from '../../../../marvel-characters/components/ItemInfo/itemnsName.jsx';
import CharacterGridPaginated from 'src/modules/marvel-characters/components/ItemGrid/index.jsx';



function ButtonArrow() {
  const [domain1, setDomain]=useState("");
  const [toggle, setToggle] = useState(false);
  const domainDefault="characters";
  const domain="series"
  let series=ItemsName({domain});
  
  const handleSelect=(e)=>{
    setDomain("series/"+e.target.value+"/characters");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  return (
    <div className="filters" >
      <Dropdown isOpen={toggle} toggle={handleToggle} >
        <DropdownToggle caret>
          SERIES
        </DropdownToggle>
        <DropdownMenu>
          <div className="movies">
            <ul className="movies__list">
              {series.map((item, index) => (
                <li key={index} onClick={handleSelect} className="movies__list--item">
                  <input value={item.id} type="radio" name="series"/>
                  <label className="movies__list--text">{item.title}</label>
                </li>
              ))}
            </ul>
            <div className="movies__buttons--container" onClick={handleToggle}>
              <div className="movies__buttons--left">
                <button className="movies__buttons" onClick={()=> HandleApply(domain1) }>
                  Apply
                </button>
              </div>
              <div className="movies__buttons--right">
                <button className="movies__buttons" onClick={()=> HandleApply(domainDefault) }>
                  Reset
                </button>
                <button className="movies__buttons" onClick={handleToggle}>
                  Close
                </button>
              </div>
            </div>
          </div>

        </DropdownMenu>
        
      </Dropdown>
    </div> 
    
  );
}
HandleApply.propTypes = {
  domain1: PropTypes.string
}
function HandleApply (domain1) {
  const name="";
  const order="";
  const itemsPerPage=24;
  console.log("hande "+domain1);
  const root2 = ReactDOM.createRoot(document.getElementById('container-grid'));
  root2.render(
    <CharacterGridPaginated nam={name} domain={domain1} order={order} itemsPerPage={itemsPerPage} />, 
   );

 
};

export  default ButtonArrow ;
