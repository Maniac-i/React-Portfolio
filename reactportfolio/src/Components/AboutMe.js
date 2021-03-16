import React from 'react';

function AboutMe() {
  return(
    <main className="mt-5">
    <div className="w-75 p-3 mx-auto">
      <h1 className="display-4">About Me</h1>
      <hr />
      <div className="row py-3 aboutMe">

        <div className="col">
          <img src="../../Public/Images/me.JPG" alt="headshot" className="img-fluid" />
        </div>

        <div className="col">
          <p className="paragraph"> Full stack web developer utilizing a background in environmental consulting to find unique solutions to meet client’s needs. Recently earned a certificate in full stack development from The Ohio State University, with newly developed skills in semantic HTML, JavaScript, CSS, Node.js, Express, and SQL. A self-starter with a passion for problem solving who collaborates well with diverse cross functional groups to efficiently deliver results and enjoys creating projects with a simple and clean UI that provides a seamless user experience. On recent projects, while working on a team of 4 developers, leveraged GitHub projects and issues to streamline workflow and increase productivity. Looking forward to creating responsive web pages as a part of a collaborative, client focused team
          </p>
        </div>
      </div>
      <br />
      <div className="row aboutMe">
        <div className="col-4 align-self-center">
        <h2 className="mx-auto">Technologies</h2>
        </div>
        <hr />
        <div className="col-8">
        <p><strong>Programming Languages:</strong> HTML, CSS, Javascript</p>
        <p><strong>Libraries/Frameworks:</strong> jQuery, Express.js, Bootstrap, Bulma,</p>
        <p><strong>Database Management:</strong> MySQL, Sequelize, MonogDb, Mongoose</p>
        <p><strong>Programming Languages:</strong> Node.js, Handlebars, Passport.js, Git, Heroku</p>
        </div>
      </div>
    </div>
  </main>
  );
}

export default AboutMe;