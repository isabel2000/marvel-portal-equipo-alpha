import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { ItemsName } from '../ItemInfo/itemnsName';

const img = require.context('@/assets/images', true);

FeaturedGrid.propTypes = {
  id: PropTypes.number
}


export function FeaturedGrid({id}) {
  const domain="characters/"+id+"/comics";
  const comics=ItemsName({domain})
  

  return (
    <div >

      <div className="featured-comics">
        <h1>FEATURED COMICS </h1>
        <section className='slider'>
          
          <div className='featured-comics-items'>
            {comics.map((item)=>(
              <a key={item.id} href={`${item.url[0].url}`} target="_blank" rel="noopener noreferrer">
                <figure key={item.id} className='featured-comics-items_figure'>
                  <img className='featured-comics-items__img'src={`${item.image.path}.${item.image.extension}`}></img>
                  <p className='parrafo'>COMICS</p>
                  <figcaption>
                    {item.title}
                  </figcaption>
                </figure>
              </a>
            ))}
          
          </div>
        </section>
      </div>
    </div>
  );
}

export function FeaturedCharacter(){

  return(     
    <>
      <header className="mvl-items-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>
      
      <div className="mvl-featuredCharacters-card-container">
        <h1>FEATURED CHARACTERS</h1>
        <section className="mvl-featuredCharacters-card-section">
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./Shuri.jpg`)}
                alt="imagen de Shuri"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">Shuri</h5>
            </div>
          </div>
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./Riri_Williams.jpg`)}
                alt="imagen de Riri Williams"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">Riri Williams</h5>
            </div>
          </div>
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./M'Baku.jpg`)}
                alt="imagen de M'baku"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">M’baku</h5>
            </div>
          </div>
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./Okoye.jpg`)}
                alt="imagen de Okoye"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">Okoye</h5>
            </div>
          </div>
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./Namor.jpg`)}
                alt="imagen de Namor"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">Namor</h5>
            </div>
          </div>
          <div className="mvl-featuredCharacters-card">
            <div className="mvl-featuredCharacters-card__image-container">
              <img
                className="mvl-featuredCharacters-card__image"
                src={img(`./Queen_Ramonda.jpg`)}
                alt="imagen de Queen Ramonda"
              />
            </div>
            <div className="mvl-featuredCharacters-card__body">
              <h5 className="u-no-margin">Queen Ramonda</h5>
            </div>
          </div>

        </section>
    </div>
  </>
  )
}