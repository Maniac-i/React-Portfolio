import React from "react";

function Contact() {
  return (
    <div>
      <div className="mt-5">
        <div className="w-75 p-3 mx-auto">
          <h1 className="display-4">Hit Me Up</h1>
          <hr />
          <form>
            <div className="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Leave a Message Please
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="submit btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>

      <section className="socialMedia rounded w-75 p-3 mx-auto">
        <div className="row">
          <div className="col-sm text-center">
            <a
              className="navbar-brand"
              href="https://www.linkedin.com/in/joe-maniaci/"
            >
              <img
                src="./Images/linkedin.png"
                className="img-fluid"
                width="75"
                height="75"
                alt="linkedin Icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-sm text-center">
            <a className="navbar-brand" href="https://github.com/Maniac-i">
              <img
                src="./Images/GitHub-Mark-120px-plus.png"
                className="img-fluid"
                width="75"
                height="75"
                alt="GitHub Icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-sm text-center">
            <a
              className="navbar-brand"
              href="https://stackoverflow.com/users/13527992/maniaci"
            >
              <img
                src="./Images/512px-Stack_Overflow_icon.svg.png"
                className="img-fluid"
                width="75"
                height="75"
                alt="Stack Overflow Icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-sm text-center">
            <a
              className="navbar-brand"
              href="https://www.instagram.com/joemaniaci/"
            >
              <img
                src="./Images/512px-Instagram_icon.png"
                className="img-fluid"
                width="75"
                height="75"
                alt="Instagram Icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="col-sm text-center">
            <a
              className="navbar-brand"
              href="https://drive.google.com/file/d/1T5QiKkAtN5RPHy8wZov94TePD3RPaGf1/view?usp=sharing"
            >
              <img
                src="./Images/clipart3085721.png"
                className="img-fluid"
                width="75"
                height="75"
                alt="Resume Icon"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default Contact;
