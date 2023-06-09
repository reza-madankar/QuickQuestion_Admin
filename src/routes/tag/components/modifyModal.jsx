import React, { useState, useEffect, useRef } from "react";
import axios from "utilities/axios";
import { toast } from "react-hot-toast";

const ModifyModal = ({ id = 0, closeModal, setTags }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (id > 0) {
      axios.get(`/api/Admin/tag/${id}`).then((response) => {
        setTitle(response.data.title);
      });
    }
  }, [id]);
 

  const submitModify = () => {
    axios
      .post("/api/Admin/tag/insetorupdate", {
        id: id,
        title: title
      })
      .then((response) => {
        if (response.data !== null) {
            setTags((prev) => {
            if (prev.some((x) => x.id === id)) {
              return prev.map((x) => (x.id === id ? response.data : x));
            } else {
              return [...prev, response.data];
            }
          });
          closeModal("");
          toast.success(
            id > 0 ? "Updated Successfully!" : "Inserted Successfully!"
          );
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
    <>
      <div className="modal-header">
        <h2>
          {id === 0 ? " New Tag" : " Update Tag"}
        </h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="modal-content modal-category-content">

        <div className="controller">
          <label>Title</label>
          <input
            type="text"
            placeholder="Category Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
