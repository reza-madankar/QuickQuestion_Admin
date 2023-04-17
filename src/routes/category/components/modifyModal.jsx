import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Select from "react-select";

const ModifyModal = ({ id = 0, closeModal }) => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [categorySuperId, setCategorySuperId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metakey, setMetaKey] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`/api/Admin/categories/13`).then((response) => {
      setDrpCategory(
        response.data
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item) => ({
            label: item.title,
            id: item.id,
          }))
      );
    });
  }, []);

  useEffect(() => {
    if (id > 0 && id != 13) {
      axios.get(`/api/Admin/category/${id}`).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.shortDescription);
        setMetaKey(response.data.metaTags);
        setContent(response.data.content);
        setCategoryId(response.data.id);
        setCategorySuperId(response.data.super.id);
      });
    }
  }, [id]);

  const submitModify = () => {
    axios
      .post("/api/Admin/AddorUpdateCategory", {
        id: categoryId,
        title: title,
        description: description,
        metakey: metakey,
        content: content,
      })
      .then((response) => {
        // if (response) {
        //   setUsers((prev) =>
        //     prev.map((x) =>
        //       x.id === user.id ? { ...x, name: name, email: email } : x
        //     )
        //   );
        // }
      });
  };

  return (
    <>
      <div className="modal-header">
        <h2>New/Update Category</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="modal-content">
        <div className="controller">
          <label>Parent Category</label>
          <Select
            className="drpCategory"
            placeholder="Select Category"
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setCategorySuperId(option === null ? 13 : option.value);
            }}
            value={drpCategory.filter((x) => x.id === categorySuperId)[0]}
            options={drpCategory}
          />
        </div>
        <div className="controller">
          <label>Title</label>
          <input
            type="text"
            placeholder="Category Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="controller">
          <label>Meta Keys</label>
          <input
            type="text"
            placeholder="Google use meta tags; use comma to seperate between keys"
            value={metakey}
            onChange={(e) => setMetaKey(e.target.value)}
          />
        </div>
        <div className="controller">
          <label>Description</label>
          <input
            type="text"
            placeholder="Show description in to category list"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="controller">
          <label>Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="submit" onClick={submitModify}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ModifyModal;
