import React from "react";
import './styles.scss';
import { ItemsName } from "src/modules/marvel-characters/components/ItemInfo/itemnsName";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

function Slider(){
    const domain='events';
    const values=ItemsName({domain});
    const items=values.slice(11,15);
 


    return(
        <div className="slider-container"> 
            <div className="slider-items">
                {items.map((item,index)=>(
                    <a key={item.id} href={item.url[0].url} className={"item-slider__"+`${index}`} target="_blank" rel="noreferrer">
                        <img src={`${item.image.path}.${item.image.extension}`} alt="item.description" className="slider__img" />
                    </a>
                ))}
            </div>
            <button className="btn-slider btn-slider__rigth" onClick={SliderRigth}><AiFillCaretRight /></button>
            <button className="btn-slider btn-slider__left" onClick={SliderLeft}><AiFillCaretLeft /></button>

        </div>
    )
}

function SliderRigth(){
    const slider = document.querySelector(".slider-items");
    const sliderSection = document.querySelectorAll(".slider-items")
    const sliderSectionLast = sliderSection[sliderSection.length-1];
    // slider.insertAdjacentElement('afterbegin',sliderSectionLast);
    console.log("jkaaaaaaaaaaaaaaaaaa")
    return( slider.styles.marginLeft = "-200%")
    
}
function SliderLeft(){
    const slider = document.querySelector(".slider-container");
    const sliderSection = document.querySelectorAll(".slider-items")
    const sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);
}

export {Slider};
