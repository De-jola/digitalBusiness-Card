import React from "react";
import twIcon from "../images/Twitter Icon.svg";
import fbIcon from "../images/Facebook Icon.svg";
import igIcon from "../images/Instagram Icon.svg";
import gitIcon from "../images/GitHub Icon.svg";

const Footer = function () {
  return (
    <div className="footer">
      <div className="tw-icon">
        <img src={twIcon} alt="twitter" />
      </div>
      <div className="fb-icon">
        <img src={fbIcon} alt="facebook" />
      </div>
      <div className="ig-icon">
        <img src={igIcon} alt="instagram" />
      </div>
      <div className="git-icon">
        <img src={gitIcon} alt="Github" />
      </div>
    </div>
  );
};

export default Footer;
