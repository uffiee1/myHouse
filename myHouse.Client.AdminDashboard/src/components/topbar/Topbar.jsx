import "./topbar.css";

import { NotificationsNone, Settings } from "@material-ui/icons";

import ProfilePicture from '../../assets/profile1.png'
import React from "react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">myHouse</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ProfilePicture} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
