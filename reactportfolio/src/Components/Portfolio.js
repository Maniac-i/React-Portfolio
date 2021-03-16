import React from 'react';

function Portfolio(props) {
  return(
<main class="mt-5">
      <div class="w-100 mx-auto portfolio">
        <h1 class="display-4">Portfolio</h1>
        <hr />
      </div>

      {props.children}
</main>
  );
}

export default Portfolio;