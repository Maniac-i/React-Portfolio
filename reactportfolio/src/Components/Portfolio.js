import React from 'react';
import Project from './Project';


function Portfolio(props) {
  return(
<main className="mt-5">
      <div className="w-100 mx-auto portfolio">
        <h1 className="display-4">Portfolio</h1>
        <hr />
      </div>

      {props.children}
</main>
  );
}

export default Portfolio;