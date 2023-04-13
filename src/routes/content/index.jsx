import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Select from "react-select";

import "../../asset/styles/category.scss";

import Boy from "asset/images/boy.png";

const Content = () => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [contentId, setContentId] = useState(0);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get("/api/Admin/category/13").then((response) => {
      const r = response.data
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item) => ({
          label: item.title,
          options: item.subs.map((s) => ({
            value: item.id,
            label: item.title,
          })),
        }));

      setDrpCategory(r);
    });
  }, []);

  return (
    <div className="category">
      <div className="content-header">
        <h2>Blog</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>blog</li>
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
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setContentId(option === null ? 13 : option.value);
            }}
            options={drpCategory}
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
            style={{ backgroundImage: "url(" + Boy + ")" }}
          ></div>
          <h2>Content Title</h2>
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
            style={{ backgroundImage: "url(" + Boy + ")" }}
          ></div>
          <h2>Content Title</h2>
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
            style={{ backgroundImage: "url(" + Boy + ")" }}
          ></div>
          <h2>Content Title</h2>
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
            style={{ backgroundImage: "url(" + Boy + ")" }}
          ></div>
          <h2>Content Title</h2>
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
            style={{ backgroundImage: "url(" + Boy + ")" }}
          ></div>
          <h2>Content Title</h2>
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

export default Content;
