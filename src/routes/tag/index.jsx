import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Modal from "component/modal";
import { toast } from "react-hot-toast";

import ModifyModal from "./components/modifyModal";

import "asset/styles/tags.scss";

const Tag = () => {
  const [tags, setTags] = useState([]);
  const [tagId, setTagId] = useState(0);
  const [modal, setModal] = useState("");

  useEffect(() => {
    axios.get(`/api/Admin/tag/getAll`)
    .then((response) => {
        setTags(response.data);
    });
  }, []);

  const removeTag = (id) => {
    axios
      .delete(`/api/Admin/tag/remove/${id}`)
      .then((response) => {
        if (response.data === true) {
            setTags((prev) => prev.filter((x) => x.id !== id));
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
    <div className="tags">
      <div className="content-header">
        <h2>Tags</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>Tag</li>
        </ul>
      </div>
      <div className="content-tools">
        <div className="formController">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="right-tools">
          <button
            type="button"
            className="create"
            onClick={() => {
              setModal("New Or Modify Tag");
              setTagId(0);
            }}
          >
            New
          </button>
        </div>
      </div>
      <div className="items">
        {tags.map((item, key) => (
          <div className="item" key={key}>
            <div className="comment">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="tools">
              <button
                type="button"
                onClick={() => {
                  setModal("New Or Modify Tag");
                  setTagId(item.id);
                }}
              >
                <i className="fa fa-pencil" />
              </button>
              <button type="button" onClick={() => removeTag(item.id)}>
                <i className="fa fa-trash" />
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
            case "New Or Modify Tag":
              return (
                <ModifyModal
                  closeModal={setModal}
                  id={tagId}
                  setTags={setTags}
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

export default Tag;
