import React from 'react';

function Heading({ title, subtitle}) {
    return (
      <header className ="App-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
    )
  }
  
export default Heading;