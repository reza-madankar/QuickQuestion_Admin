import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "utilities/axios";
import Modal from "component/modal";
import { toast } from "react-hot-toast";

import Gallery from "./components/gallery";
import MainImage from "./components/mainImage";
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
    getCategories(category);
  }, [category]);

  const getCategories = (id) => {
    axios.get(`/api/Admin/category/getAll/${id}`).then((response) => {
      if (id === 13) {
        setDrpCategory(
          response.data.sort((a, b) => a.title.localeCompare(b.title))
        );
      }
      setCategories(
        response.data.sort((a, b) => a.title.localeCompare(b.title))
      );
    });
  };

  const removeCategory = (id) => {
    axios.delete(`/api/Admin/category/remove/${id}`).then((response) => {
      if (response.data === true) {
        getCategories(category);
        toast.success("Removed Successfully!");
      } else {
        toast.error(
          "Server has rejected this request, please tell to developer."
        );
      }
    })
    .catch(() => {
      toast.error(
        "Please try it again, if it didn't work for second time, refresh page and try it again."
      );
    });
  };

  return (
    <div className="category">
      <div className="content-header">
        <h2>Category</h2>
        <ul>
          <li>
            <a href="/">OverView</a>
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
              onClick={() => {
                setModal("Mian Image");
                setCategoryIdSelected(item.id);
              }}
              style={{ backgroundImage: "url(" + Girl + ")" }}
            ></div>
            <h2>{item.title}</h2>
            <p>{item.shortDescription}</p>

            <div className="tools">
              <button
                type="button"
                onClick={() => {
                  setModal("Gallery");
                  setCategoryIdSelected(item.id);
                }}
              >
                <i className="fa fa-images"></i>
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
              <button type="button" onClick={() => removeCategory(item.id)}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*  <div className="content-footer">
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
      </div> */}
      <Modal isOpen={modal !== ""}>
        {(() => {
          switch (modal) {
            case "New Or Modify category":
              return (
                <ModifyModal
                  closeModal={setModal}
                  id={categoryIdSelected}
                  setCategories={setCategories}
                />
              );
            case "Gallery":
              return (
                <Gallery
                  closeModal={setModal}
                  categoryId={categoryIdSelected}
                />
              );
            case "Mian Image":
              return (
                <MainImage
                  closeModal={setModal}
                  categoryId={categoryIdSelected}
                />
              );
            default:
              return null;
          }
        })()}
      </Modal>
    </div>
  );
};

export default Category;
