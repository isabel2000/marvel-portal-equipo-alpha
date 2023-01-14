import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.any,
  description:  PropTypes.string,
  name: PropTypes.string,
  domain: PropTypes.string,
  isSkeleton: PropTypes.bool,
  url: PropTypes.array
};

export function CharacterCard({ image, name, description, isSkeleton, domain, url}) {
  const subName =(name)=>{
    let subNameValue;
    let value=name.indexOf('(');
    if(value==-1){
      return (<p></p>);
    }else{
      subNameValue= name.slice(value+1, -1);
    }
    return subNameValue
  }

    if(domain=='characters'){
      return (
        <a className="character-card-link" href={`${url[0].url}`} target="_blank" rel="noopener noreferrer">
          <div className="mvl-character-card"  data-is-skeleton={isSkeleton}>
            <div className="mvl-character-card__image-container">
              <img className="mvl-character-card__image" src={`${image.path}.${image.extension}`} alt={description} />
            </div>
            <div className="mvl-character-card__body">
              <h4 className="u-no-margin">{name}</h4>
              <h5 className="sub-name">1939 Timely Comics</h5> <p><br></br></p>
              <h5 className="sub-name">{subName(name)}</h5>
            </div>
          </div>
        </a>
      );
    }
  
  return (
    <a href={`${url[0].url}`} target="_blank" rel="noopener noreferrer">
      <div className="mvl-character-card mvl-character-card__height"  data-is-skeleton={isSkeleton}>
        <div className="mvl-character-card__image-container">
          <img className="mvl-character-card__image" src={`${image.path}.${image.extension}`} alt={description} /> 
        </div>
        <div className="mvl-character-card__body">
          <h4 className="u-no-margin">{name}</h4>
        
        </div>
      </div>
    </a>
  );
}
