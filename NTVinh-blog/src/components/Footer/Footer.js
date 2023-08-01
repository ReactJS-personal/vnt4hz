import { Typography } from "@material-ui/core";
import React from "react";
import { FaHeart } from "react-icons/fa";
//css
import "./Footer.css";

function Footer() {
  return (
    <div className="f-t">
      <div className="f-t-L">
        <Typography className="f-t-name"></Typography>
      </div>
      <div className="f-t-R">
        <Typography className="f-t-allserve">
          Made with by 🐤 NTVinh
          <span style={{ color: "#1093f3" }}> ● </span>
          {/* and see more at <a href="https://github.com/devntv" rel="noreferrer" target="_blank" className="f-t-Link" >
                    here </a>
                    <span> or </span><a href="https://www.facebook.com/Dinh.nt1097/" rel="noreferrer" target="_blank" className="f-t-Link">Facebook</a>. */}
          @Copyright © 2020 <FaHeart className="iconTim" /> ALL rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
