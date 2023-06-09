import React, { useState, useEffect, useRef } from "react";
import axios from "utilities/axios";
import Select from "react-select";
import { toast } from "react-hot-toast";

const ModifyModal = ({ id = 0, closeModal, setComments }) => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [drpBlog, setDrpBlog] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [blogId, setBlogId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

    if (id > 0) {
      axios.get(`/api/Admin/comment/${id}`).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategoryId(response.data.blog.categoryId);
        setBlogId(response.data.blogId);
      });
    }
  }, [id]);

  useEffect(() => {
    if (categoryId > 0) {
      axios.get(`/api/Admin/blogs/${categoryId}`).then((response) => {
        setDrpBlog(
          response.data.map(({ id, title }) => ({
            value: id,
            label: title,
          }))
        );
      });
    }
  }, [categoryId]);

  const submitModify = () => {
    axios
      .post("/api/Admin/comment/insetorupdate", {
        id: id,
        blogId: blogId,
        title: title,
        description: description,
      })
      .then((response) => {
        if (response.data !== null) {
          setComments((prev) => {
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
          {id === 0 ? " New Comment" : " Update Comment"} -- {blogId}
        </h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="modal-content modal-category-content">
        <div className="controller">
          <label>Category</label>
          <Select
            className="drpCategory"
            placeholder="Select Category"
            classNamePrefix="select"
            isClearable
            value={drpCategory
              .map((x) => x.options)
              .flat()
              .filter((x) => x.value === categoryId)}
            onChange={(option) => {
              return setCategoryId(option === null ? null : option.value);
            }}
            options={drpCategory}
          />
        </div>

        <div className="controller">
          <label>Blog</label>
          <Select
            className="drpCategory"
            placeholder="Select blog"
            classNamePrefix="select"
            isClearable
            value={drpBlog.filter((option) => option.value === blogId)}
            onChange={(option) => {
              return setBlogId(option === null ? 0 : option.value);
            }}
            options={drpBlog}
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
          <label>Description</label>
          <input
            type="text"
            placeholder="Show description in to category list"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
