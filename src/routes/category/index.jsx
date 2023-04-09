import React, { useState, useRef } from "react";
import useOutsideDetector from "component/hooks/useDetectClickOutsideElement";

import "../../asset/styles/category.scss";

import Girl from "asset/images/girl.png";

const Category = () => {
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
    <div className="category">
      <div className="content-header">
        <h2>Category</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>Category</li>
        </ul>
      </div>
      <div className="content-tools">
        <div className="formController">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="right-tools">
          <div className="drpBox" ref={drpRef}>
            <button type="button" onClick={() => changeSetDrpMenu("category")}>
              Category 1
              <i className="fa fa-chevron-down" />
            </button>
            <div
              className={`drpContent ${
                drpMenu === "category" ? "show" : "hide"
              }`}
            >
              <ul>
                <li>
                  <span> Category 1</span>
                </li>
                <li>
                  <span> Category 2</span>
                </li>
                <li>
                  <span>Category 3</span>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" className="create">
            New
          </button>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content-footer">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Category;
