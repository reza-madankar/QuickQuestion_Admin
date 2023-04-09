import React, { useState, useEffect, useRef } from "react";
import useOutsideDetector from "component/hooks/useDetectClickOutsideElement";
import Select from "react-select";
import axios from "utilities/axios";

import "../../asset/styles/category.scss";

import Girl from "asset/images/girl.png";

const Category = () => {
  const [drpMenu, setDrpMenu] = useState("");
  const drpRef = useRef(null);
  const [drpCategory, setDrpCategory] = useState([]);
  const [category, setCategory] = useState(13);

  useEffect(() => {
    axios.get(`/api/Content/category/${category}`).then((response) => {
      setDrpCategory(
        response.data.sort((a, b) => a.title.localeCompare(b.title))
      );
    });
  }, []);

  useOutsideDetector(drpRef, drpMenu, () => {
    setDrpMenu("hide");
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
          <Select
          className="drpCategory"
            placeholder="Select Category"
            options={drpCategory.map(({ id, title }) => ({
              value: id,
              label: title,
            }))}
            onInputChange={setCategory}
            filterOption={(item) => item}
            inputValue={category}
            isMulti={false}
          />
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
