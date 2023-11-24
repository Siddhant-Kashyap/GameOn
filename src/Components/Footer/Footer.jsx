import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-btns">
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <button class="button-55" role="button">
            Buy me a coffee
          </button>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Footer;
