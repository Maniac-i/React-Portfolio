import React from 'react';
import Project from './Project';


function Portfolio(props) {
  return(
<main className="mt-5">
      <div className="w-100 mx-auto portfolio">
        <h1 className="display-4">Portfolio</h1>
        <hr />
      </div>

      <Project 
      src=""
      href="https://maniac-i.github.io/Employee-Directory-2/"
      projectName="Employee Directory"
      github="https://github.com/Maniac-i/Employee-Directory-2"
      projectDescription ="This project was bootstrapped with Create React App. Upon loading, a random list of employees is rendered. It allows you to sort the employees by age and filter the employees that live in the United States"
      />
      <br/>
      
      <Project 
      src="reactportfolio/public/Images/Screen Shot 2021-02-15 at 5.29.12 PM.png"
      href="https://travel-log-project.herokuapp.com/"
      projectName="Travel Bucket List"
      github="https://github.com/Maniac-i/TeamProject2"
      projectDescription ="Bucket List is a Node.js application, deployed through Heroku, that allows the user to
      1) create travel reviews capturing their own travel experiences, and, 2) search travel reviews for
      planning future trips. To use the site, users must establish login credentials with an email and
      password. These credentials are stored and authenticated using Passport. Once logged into the site,
      users can write a review by entering the following fields: city name, city review (text box), hotel
      name, hotel review (text box). When navigating to the all reviews option on the navbar, users will
      find preview boxes for all the reviews that have been submitted. When searching the reviews, the
      application uses a JQuery plug-in, typeahead, to generate results as the search term is entered. To
      enhance responsiveness to the user, the application leverages elasticsearch to quickly return search
      results, matching the search term within the text fields for any of the four fields available in the
      saved review."
      />
      <br/>
       <Project 
      src=""
      href="https://fathomless-badlands-85692.herokuapp.com/"
      projectName="Eat the Burger"
      github="https://github.com/Maniac-i/burgers"
      projectDescription ='This is a fullstack application using HTML, Boostrap, JQuery, Node, Express, MySQL,
      Handlebars and a homemade ORM. It is hosted on Heroku. This application allows the user to add burgers
      to a "To Eat" list, and then "Devour" them, moving them to a list of eaten burgers.'
      />
      <br/>
       <Project 
      src=""
      href="https://github.com/Maniac-i/Beds-N-Brews"
      projectName="Bed 'N Brews"
      github="https://maniac-i.github.io/Beds-N-Brews/"
      projectDescription ='The first step that a traveler needs to take when planning their next trip is to go to
      the
      Beds-N-Brews site. Next, enter a city that you are interested in visiting in the search
      bar. Then press the search button. Then scroll through the list of hotel and breweries.
      You are provided with a map of the hotels and the address of the breweries. If a brewery
      has a website, then a link to their company site is provided. You can use this information
      to find the best hotel and brewery combination for you.'
      />
       <br/>
       <Project 
      src=""
      href="https://maniac-i.github.io/Weather-Dashboard/"
      projectName="Weather Dashboard"
      github="https://github.com/Maniac-i/Weather-Dashboard"
      projectDescription ='This Weather Dashboard displays the current weather, including the temperature,
      humidity, wind speed and UV Index, sa well as the 5 day forecast with the temperature and humidity.
      Enter a city into the search bar and click search. This will populate both the current weather and 5
      day forecast. You may also click on a previously searched city.'
      />
      <br/>
       <Project 
      src=""
      href="https://maniac-i.github.io/Day-Schedule/"
      projectName="Day Schedule"
      github="https://github.com/Maniac-i/Day-Schedule"
      projectDescription ='The goal of this project is to build a functioning Day Schedule. An importan aspect of
      this project was using the third party API Moment.js to display the current day and time of day. It
      also relied heavily on bootstrap to create the schedule interface and javascript to dynamically update
      CSS and HTML. One of the difficult parts of this project was correctly utilizing localStorage to keep
      inputted events upon reloading the page.'
      />
      
</main>
  );
}

export default Portfolio;