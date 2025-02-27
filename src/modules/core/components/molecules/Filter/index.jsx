import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom/client';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ItemsName } from 'src/modules/marvel-characters/components/ItemInfo/itemnsName';
import ButtonArrow from '../Filter_series';
import { useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';


function OnChangeName(text){
  const resultsElem = document.getElementById('autocomplete-results')
  const order="";
  const itemsPerPage=24;
  const root3 = ReactDOM.createRoot(document.getElementById('container-grid'));

  const name={
    nameStartsWith:text
  }
  
  if (text.length == 0){
    resultsElem.classList.add('hidden');
    return root3.render(
      <CharacterGridPaginated name={text} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
    );
  }

  root3.render(
    <CharacterGridPaginated name={name} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
  );
}
function OnCompleteName(text){
  const resultsElem = document.getElementById('autocomplete-results')
  const order="";
  const newText=text.trim();
  const itemsPerPage=24;
  
  const root3 = ReactDOM.createRoot(document.getElementById('container-grid'));
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+text)
  console.log(text)
  const name={
    name:newText
  }
  
  if (text.length == 0){
    resultsElem.classList.add('hidden');
    return root3.render(
      <CharacterGridPaginated name={text} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
    );
  }

  root3.render(
    <CharacterGridPaginated name={name} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
  );
}
function OnChangeOrder(){
  const name="";
  const order={
    orderBy:"-name"
  };
  const itemsPerPage=24;
  const root3 = ReactDOM.createRoot(document.getElementById('container-grid'));
  root3.render(
    <CharacterGridPaginated name={name} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
  );
}
function OnChangeOrder2(){
  const name="";
  const order={
    orderBy:"name"
  };
  const itemsPerPage=24;
  const root3 = ReactDOM.createRoot(document.getElementById('container-grid'));
  root3.render(
    <CharacterGridPaginated name={name} domain={`characters`} order={order} itemsPerPage={itemsPerPage} />, 
  );
}

export default function Filter() {
  const domain=`characters`
  const [text, setText]=useState("");
  const [toggle, setToggle] = useState(false);  
  const results=ItemsName({domain});
  
  const inputElem= document.getElementById("input-search");
  const resultsElem=document.getElementById("autocomplete-results");
  const onChangeValue=((e)=>{
    setText(e.target.value);
  })
 
  if(text.length>2){
    autoComplete()
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  async function autoComplete(){
    const valueInput=inputElem.value;
    const resultados =results.filter((result)=>{
      return result.name.toLowerCase().startsWith(valueInput.toLowerCase())
    });
    const resultsElem=document.getElementById("autocomplete-results");
    resultsElem.innerHTML = resultados.map((result, index) => {
      const isSelected = index === 0;
      return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? ' selected' : ''}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ''}
        >
          ${result.name}
        </li>
      `
        }).join('');
        resultsElem.classList.remove('hidden');
  }
  const handleResultClick=((event)=> {
    if (event.target && event.target.nodeName === 'LI') {
      selectItem(event.target)
    }
  })
  
  const selectItem=((e) =>{
      inputElem.value = e.innerText;
      hideResults();
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeee")
      OnCompleteName(e.innerText)
    
  })
  
  const hideResults=(()=> {
    resultsElem.innerHTML = '';
    resultsElem.classList.add('hidden');
  })
 
  const handler=((e)=>{if(e.key=="Enter"){
    OnChangeName(text);
  }})
  return (
    <>
      <div className="items-grid-filters_2">
        <div className="container-input-search">
          <div className="input-search">
            <input 
              className="mvl-container-search-left" 
              id="input-search" type="text" 
              value={text} 
              onChange={onChangeValue} 
              onKeyDown={handler} 
              placeholder="Search"  
              aria-label='Search'
              aria-autocomplete='both'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>OnChangeName(text)} className="search-container__icon" />
          </div>
          <ul
            id='autocomplete-results'
            role='listbox'
            aria-label='Search'
            onClick={handleResultClick}
          >
          </ul>
        </div>

        <div className="container-checked-two">
          <div className='series'>
            <ButtonArrow/>
          </div>      

          <div className='order'>
            <Dropdown isOpen={toggle} toggle={handleToggle} >
              <DropdownToggle caret>
                A <AiOutlineArrowRight /> Z
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={OnChangeOrder}> Z <AiOutlineArrowRight /> A </DropdownItem>
                <DropdownItem onClick={OnChangeOrder2}> A <AiOutlineArrowRight /> Z</DropdownItem>
              </DropdownMenu>
            
            </Dropdown>
          </div>
        </div>
      </div>
      
    </>
  );
}
