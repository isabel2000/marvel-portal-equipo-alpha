import React from 'react';
import { DefaultPage } from '../../components/InitialPage';
import { Slider } from 'src/modules/core/components/molecules/Slider';



export function CharacterPage() {
  const id=1011299;
  const domain='characters';
  return(
    <>
      <Slider />
      <DefaultPage
        domain={domain} 
        id={id}
      />
    </>
  )
  }
