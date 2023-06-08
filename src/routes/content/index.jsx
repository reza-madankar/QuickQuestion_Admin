import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "utilities/axios";
import Select from "react-select";
import Modal from "component/modal";

import Gallery from "./components/gallery";
import MainImage from "./components/mainImage";
import Tags from "./components/tags";
import ModifyModal from "./components/modifyModal";

import "asset/styles/category.scss";

import Boy from "asset/images/boy.png";

const Content = () => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [contentId, setContentId] = useState(null);
  const [contents, setContents] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    axios.get("/api/Admin/category/getAll/13").then((response) => {
      setDrpCategory(
        response.data
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item) => ({
            label: item.title,
            options: item.subs.map((s) => ({
              value: s.id,
              label: s.title,
            })),
          }))
      );
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/Admin/blogs/${categoryId}`).then((response) => {
      setContents(response.data);
    });
  }, [categoryId]);

  const removeContent = (id) => {
    axios.delete(`/api/Admin/blog/remove/${id}`).then((response) => {
      if (response.data === true) {
        setContents(contents.filter((x) => x.id !== id));
      }
    });
  };

  const changeAcceptComment = (id) => {
    axios.get(`/api/Admin/blog/acceptComment/${id}`).then((response) => {
      if (response.data === true) {
        setContents((prev) =>
          prev.map((x) =>
            x.id === id ? { ...x, acceptComment: !x.acceptComment } : x
          )
        );
      }
    });
  };

  const changeVisible = (id) => {
    axios.get(`/api/Admin/blog/visible/${id}`).then((response) => {
      if (response.data === true) {
        setContents((prev) =>
          prev.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x))
        );
      }
    });
  };

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
              return setCategoryId(option === null ? null : option.value);
            }}
            options={drpCategory}
          />
          <button
            type="button"
            className="create"
            onClick={() => {
              setModal("New Or Modify Content");
              setContentId(0);
            }}
          >
            New
          </button>
        </div>
      </div>
      <div className="items">
        {contents.map((item, key) => (
          <div className="item">
            <div
              className="logo"
              style={{ backgroundImage: "url(" + Boy + ")" }}
              onClick={() => {
                setModal("Mian Image");
                setContentId(item.id);
              }}
            ></div>
            <h2>{item.title}</h2>
            <p>{item.shortDescription}</p>

            <div className="tools">
              <button type="button">
                <NavLink to={`/question/${item.id}`} className="bbt-scanner">
                  <i className="fa fa-comment"></i>
                </NavLink>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("Gallery");
                  setContentId(item.id);
                }}
              >
                <i className="fa fa-images"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("Tag");
                  setContentId(item.id);
                }}
              >
                <i className="fa fa-tags"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("New Or Modify Content");
                  setContentId(item.id);
                }}
              >
                <i className="fa fa-pencil"></i>
              </button>
              <button
                type="button"
                onClick={() => changeAcceptComment(item.id)}
              >
                {item.acceptComment === false ? (
                  <i className="fa fa-lock-open" />
                ) : (
                  <i className="fa fa-lock" />
                )}
              </button>
              <button type="button" onClick={() => changeVisible(item.id)}>
                {item.visible === true ? (
                  <i className="fa fa-eye" />
                ) : (
                  <i className="fa fa-eye-slash" />
                )}
              </button>
              <button type="button" onClick={() => removeContent(item.id)}>
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
            case "New Or Modify Content":
              return (
                <ModifyModal
                  closeModal={setModal}
                  id={contentId}
                  setContents={setContents}
                />
              );
            case "Gallery":
              return <Gallery closeModal={setModal} blogId={contentId} />;
            case "Mian Image":
              return <MainImage closeModal={setModal} blogId={contentId} />;
            case "Tag":
              return <Tags closeModal={setModal} blogId={contentId} />;
            default:
              return null;
          }
        })()}
      </Modal>
    </div>
  );
};

export default Content;
