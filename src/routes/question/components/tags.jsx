import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import { toast } from "react-hot-toast";

import "asset/styles/tags.scss";

const Tags = ({ blogId, closeModal }) => {
  const [tagTitle, setTagTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [contentTags, setTontentTags] = useState([]);

  useEffect(() => {
    if (blogId > 0) {
      axios.get(`/api/Admin/tag/getAll`).then((response) => {
        if (response.data && response.data.length > 0) {
          setTags(response.data);
        }
      });

      axios.get(`/api/Admin/tag/getBlogTagsAll/${blogId}`).then((response) => {
        if (response.data && response.data.length > 0) {
          setTontentTags(response.data);
        }
      });
    }
  }, [blogId]);

  const AddTagToContent = (item) => {
    if (contentTags.some((x) => x.tagId === item.tagId) === false) {
      axios
        .post(`/api/Admin/tag/insetBlogTag`, {
          blogId: blogId,
          tagId: item.id,
        })
        .then((response) => {
          if (response.data && response.data.id > 0) {
            setTontentTags((old) => [...old, {
              id: response.data.id,
              title: item.title,
              tagId: item.id,
              blogId: blogId
            }]);
          }
        });
    }
  };

  const removeTagFromContent = (item) => {
    axios.delete(`/api/Admin/tag/removeBlogTag/${item.id}`).then((response) => {
      if (response.data === true) {
        setTontentTags((tmp) => tmp.filter((x) => x.id !== item.id));
      }
    });
  };

  const insertTag = () => {
    if (
      tagTitle.trim().length > 0 &&
      tags.some((x) => x.title === tagTitle) === false
    ) {
      axios
      .post(`/api/Admin/tag/inset`, {
        title: tagTitle
      })
      .then((response) => {
        if (response.data && response.data.id > 0) {
          setTags((tmp) => [...tmp, response.data]);
          AddTagToContent(response.data);
          setTagTitle("");
        }
      });
    }
  };

  return (
    <div>
      <div className="modal-header">
        <h2>Tags</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>

      <div className="modal-content tag-content">
        <div className="tag-content-item tags">
          <div className="controller">
            <input
              placeholder="Search or Insert a Tag title"
              type="text"
              value={tagTitle}
              onChange={(event) => setTagTitle(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && tagTitle.length > 0) {
                  insertTag();
                }
              }}
            />
            {tagTitle.length > 0 && (
              <i className="fa fa-xmark" onClick={() => setTagTitle("")}></i>
            )}
            {tagTitle.length > 0 && (
              <i className="fa fa-plus" onClick={insertTag}></i>
            )}
          </div>
          <div className="items">
            {tags
              .filter((x) => x.title.includes(tagTitle))
              .map((item, key) => (
                <span
                  className={
                    contentTags.some((x) => x.tagId === item.id) ? "deActive" : ""
                  }
                  key={key}
                  onDoubleClick={() => AddTagToContent(item)}
                >
                  {item.title}
                  {contentTags.some((x) => x.tagId === item.id) === false && (
                    <i
                      className="fa fa-plus"
                      onClick={() => AddTagToContent(item)}
                    />
                  )}
                </span>
              ))}
          </div>
        </div>
        <div className="tag-content-item selectedTag">
          <div className="items">
            {contentTags.map((item, key) => (
              <span key={key} onDoubleClick={() => removeTagFromContent(item)}>
                {item.title}
                <i
                  className="fa fa-trash"
                  onClick={() => removeTagFromContent(item)}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
