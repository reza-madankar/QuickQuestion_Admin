import React, { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "utilities/axios";
import Select from "react-select";
import { toast } from "react-hot-toast";

const ModifyModal = ({ id = 0, closeModal, setContents }) => {
  const [drpCategory, setDrpCategory] = useState([]);
  const [blogId, setBlogId] = useState(0);
  const [categoryId, setCategoryId] = useState(13);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metakey, setMetaKey] = useState("");
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    axios.get(`/api/Admin/category/getAll/13`).then((response) => {
      setDrpCategory(
        response.data
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item) => ({
            label: item.title,
            value: item.id,
          }))
      );
    });
  }, []);

  useEffect(() => {
    if (id > 0 && id != 13) {
      axios.get(`/api/Admin/blog/${id}`).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.shortDescription);
        setMetaKey(response.data.metaTags);
        setContent(response.data.content);
        setBlogId(response.data.id);
        setCategoryId(response.data.categoryId);
      });
    }
  }, [id]);

  const submitModify = () => {
    axios
      .post("/api/Admin/blog/insetorupdate", {
        id: blogId,
        title: title,
        shortDescription: description,
        metaTags: metakey,
        content: editorRef.current.getContent(),
        categoryId: categoryId,
      })
      .then((response) => {
        if (response.data !== null) {
          setContents((prev) => {
            if (prev.some((x) => x.id === blogId)) {
              return prev.map((x) => (x.id === blogId ? response.data : x));
            } else {
              return [...prev, response.data];
            }
          });
          closeModal("");
          toast.success(
            categoryId > 0 ? "Updated Successfully!" : "Inserted Successfully!"
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
        <h2>New/Update Category</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="modal-content modal-category-content">
        <div className="controller">
          <label>Parent Category</label>
          <Select
            className="drpCategory"
            placeholder="Select Category"
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setCategoryId(option === null ? 13 : option.value);
            }}
            value={drpCategory.filter((x) => x.value === categoryId)[0]}
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
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={
              content || "<p>This is the initial content of the editor.</p>"
            }
            init={{
              selector: "textarea#emoticons",
              height: 300,
              plugins: [
                "advlist",
                "anchor",
                "autolink",
                "charmap",
                "code",
                "fullscreen",
                "help",
                "image",
                "insertdatetime",
                "link",
                "lists",
                "media",
                "preview",
                "searchreplace",
                "table",
                "visualblocks",
                "lists code emoticons",
              ],
              toolbar:
                "cut copy paste pastetext | undo redo | searchreplace | selectall | link unlink anchor | " +
                "image| table | hr| charmap  |fullscreen | code |" +
                "bold italic underline strikethrough subscript superscript | removeformat |" +
                "numlist bullist | outdent indent | blockquote | alignleft aligncenter alignright alignjustify |" +
                "blocks fontfamily fontsize | forecolor backcolor| emoticons",
              emoticons_append: {
                custom_mind_explode: {
                  keywords: ["brain", "mind", "explode", "blown"],
                  char: "🤯",
                },
              },
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
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
