import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Select from "react-select";

const Tag = ({ closeModal, categoryId = 0, blogId = 0 }) => {

  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    axios.get(`/api/Admin/category/${categoryId}`).then((response) => {
    });
    
  }, []);

  useEffect(() => {
    if (categoryId > 0) {
      axios.get(`/api/Admin/category/${categoryId}`).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId, blogId]);

  return (
    <>
      <div className="modal-header">
        <h2>New/Update Category</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="users">
        <h1>Tag</h1>
      </div>
      <div className="modal-footer">
        <button className="submit">Submit</button>
      </div>
    </>
  );
};

export default Tag;
