import React from 'react';
import { DefaultPage } from '../../components/InitialPage';

function ComicsPage() {
  const domain='comics';
  const id=1009652;
  return(
    <DefaultPage
      domain={domain} 
      id={id}
    />
  )
}
export { ComicsPage };
