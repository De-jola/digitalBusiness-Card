import React from "react";
import Email from "../images/Mail.svg";

const Buttons = function () {
  return (
    <div className="buttons">
      <div className="email-div">
        <div className="btn-div">
          <a className="btn btn-email" href="https://adejolanu@gmail.com">
            Email
          </a>
        </div>
        <div className="icon-div">
          <img className="email-icon" src={Email} alt="mail icon"></img>
        </div>
      </div>

      <div className="linkedin-div">
        <a
          className="btn btn-linkedin"
          href="www.linkedin.com/in/esther-adejola-497a621b7"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Buttons;
