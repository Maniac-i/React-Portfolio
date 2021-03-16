import React from 'react';

function Project(props) {
  return(
<div className="aboutMe">
        <section className="w-100 p-3 mx-auto">
          <div className="row">
            <div className="media">
              <img src={props.src} className="align-self-center mr-3 pl-3 img-fluid"
                  width="200px" alt="Travel Bucket list homepage" />
              <div className="media-body">
                <h5 className="mt-0"><a href={props.href}>{props.projectName}</a></h5>
                <p className="pr-3">{props.projectDescription}
                  <br/>
                  <br/>
                  <strong>GitHub:</strong><a href={props.github}> {props.github}</a> 
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Project;