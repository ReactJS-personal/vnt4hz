import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { FiGithub } from "react-icons/fi";
//css
import "./Repo.css";

function GithubLink({ link }) {
  return (
    <BottomNavigation className="IconContact">
      <BottomNavigationAction
        className="Git"
        href={link}
        target="_blank"
        icon={<FiGithub style={{ fontSize: "24px" }} />}
      />
    </BottomNavigation>
  );
}

export default GithubLink;
