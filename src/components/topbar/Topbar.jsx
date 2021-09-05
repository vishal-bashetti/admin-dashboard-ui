import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topleft">
            <span className="logo">Admin</span>
          </div>
          <div className="topright">
            <div className="topbarIconContainer">
              <NotificationsNoneIcon />
              <div className="topIconBadge">2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
