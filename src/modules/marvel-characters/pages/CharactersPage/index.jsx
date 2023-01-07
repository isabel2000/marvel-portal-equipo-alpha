import React from 'react';
import { FeaturedCharacter } from '../../components/FeaturedGrid';
import { DefaultPage } from '../../components/InitialPage';

export function CharacterPage() {
  const id=1011299;
  const domain='characters';
  return(
    <>   
      <FeaturedCharacter />
      <DefaultPage
        domain={domain} 
        id={id}
      />
    </>
  )
  }
