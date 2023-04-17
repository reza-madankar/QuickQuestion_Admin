import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "utilities/axios";
import Modal from "component/modal";

import Gallery from "component/modal/components/gallery";
import Tags from "component/modal/components/tags";
import ModifyModal from "./components/modifyModal";

import "../../asset/styles/category.scss";

import Girl from "asset/images/girl.png";

const Category = () => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [category, setCategory] = useState(13);
  const [categoryIdSelected, setCategoryIdSelected] = useState(null);
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    axios.get(`/api/Admin/categories/${category}`).then((response) => {
      if (category === 13) {
        setDrpCategory(
          response.data.sort((a, b) => a.title.localeCompare(b.title))
        );
      }
      setCategories(
        response.data.sort((a, b) => a.title.localeCompare(b.title))
      );
    });
  }, [category]);

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
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setCategory(option === null ? 13 : option.value);
            }}
            options={drpCategory.map(({ id, title }) => ({
              value: id,
              label: title,
            }))}
          />
          <button
            type="button"
            className="create"
            onClick={() => {
              setModal("New Or Modify category");
              setCategoryIdSelected(0);
            }}
          >
            New
          </button>
        </div>
      </div>
      <div className="items">
        {categories.map((item, key) => (
          <div className="item" key={key}>
            <div
              className="logo"
              style={{ backgroundImage: "url(" + Girl + ")" }}
            ></div>
            <h2>{item.title}</h2>
            <p>{item.shortDescription}</p>

            <div className="tools">
              <button type="button" onClick={() => setModal("Gallery")}>
                <i className="fa fa-images"></i>
              </button>
              <button type="button" onClick={() => setModal("Tags")}>
                <i className="fa fa-tags"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("New Or Modify category");
                  setCategoryIdSelected(item.id);
                }}
              >
                <i className="fa fa-pencil"></i>
              </button>
              <button type="button">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
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
      <Modal isOpen={modal !== ""}>
        {(() => {
          switch (modal) {
            case "New Or Modify category":
              return <ModifyModal closeModal={setModal} id={categoryIdSelected} />;
            case "Gallery":
              return <Gallery closeModal={setModal} />;
            case "Tags":
              return <Tags closeModal={setModal} />;
          }
        })()}
        {/* modal === "" ? (
          <ModifyModal userId={userId} closeModal={setModal} setUsers={setUsers} />
        ) : (
          <RoleModal userId={userId} closeModal={setModal} setUsers={setUsers}  />
        )} */}
      </Modal>
    </div>
  );
};

export default Category;
