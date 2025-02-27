import React from 'react';
import './styles.scss';
import {FeaturedGrid} from '../FeaturedGrid';
import Filter from '@/modules/core/components/molecules/Filter';
import PropTypes from 'prop-types';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

DefaultPage.propTypes = {
  domain: PropTypes.string,
  id: PropTypes.number
}
export function DefaultPage({domain,id}) {
  const name={};
  const itemsPerPage = 24;
  const order="";
  const nameList = domain.toUpperCase();

  return (
    <div className="mvl-items-page">    
      <div className="container">
        <FeaturedGrid id={id}/>
        <h1>MARVEL {nameList} LIST</h1>
        <Filter /> 
      </div>
      
      <CharacterGridPaginated domain={domain} name={name} order={order} itemsPerPage={itemsPerPage}/>
    </div>
  );
}
