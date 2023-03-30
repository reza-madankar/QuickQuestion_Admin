import React, { useState, useRef } from "react";
import useOutsideDetector from "component/hooks/useDetectClickOutsideElement";

import Boy from "asset/images/boy.png";
import Iran from "asset/images/iran.png";
import Kingdom from "asset/images/kingdom.png";
import Canada from "asset/images/canada.png";
import Spain from "asset/images/spain.png";

const Header = () => {
  const [drpMenu, setDrpMenu] = useState("");
  const drpRef = useRef(null);

  const changeSetDrpMenu = (drp) => {
    if (drpMenu === drp) {
      setDrpMenu("");
    } else {
      setDrpMenu(drp);
    }
  };

  useOutsideDetector(drpRef, drpMenu, () => {
    setDrpMenu("");
  });

  return (
    <>
      <div className="left">
        <div className="formController">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="right" ref={drpRef}>
        <div className="drpBox">
          <button type="button" onClick={() => changeSetDrpMenu("user")}>
            <i className="fa fa-user"></i>
          </button>
          <div className={`drpContent ${drpMenu === "user" ? "show" : "hide"}`}>
            <ul>
              <li className="drpHeader">
                <img src={Boy} alt="Mohammad Reza Madankar" />
                <span>Mohammad Reza Madankar</span>
              </li>
              <li>
                <i className="fa fa-user"></i>
                <span>Profile</span>
              </li>
              <li>
                <i className="fa fa-key"></i>
                <span>Password</span>
              </li>
              <li>
                <i class="fa fa-arrow-right-from-bracket"></i>
                <span>Sign Out</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="drpBox">
          <button type="button" onClick={() => changeSetDrpMenu("flag")}>
            <img src={Iran} alt="User Icon" />
          </button>
          <div className={`drpContent ${drpMenu === "flag" ? "show" : "hide"}`}>
            <ul>
              <li>
                <img src={Kingdom} alt="Kingdom Language" />
                <span>Kingdom</span>
              </li>
              <li>
                <img src={Canada} alt="Canada Language" />
                <span>Canada</span>
              </li>
              <li>
                <img src={Spain} alt="Spain Language" />
                <span>Spain</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="drpBox">
          <button
            type="button"
            onClick={() => changeSetDrpMenu("notification")}
          >
            <i className="fa fa-bell"></i>
          </button>
          <div
            className={`drpContent ${
              drpMenu === "notification" ? "show" : "hide"
            }`}
          >
            <ul className="notification">
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <img src={Boy} alt="Notification Image" />
                <div>
                  <h3>title</h3>
                  <p>
                    If several languages coalesce the grammar
                    <br />
                    <span>
                      <i className="fa fa-clock"></i>3 min ago
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
