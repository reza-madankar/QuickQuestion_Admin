import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import { toast } from "react-hot-toast";

const MainImage = ({ categoryId, closeModal }) => {
  const [category, setCategory] = useState({});
  const [values, setValues] = useState({
    categoryId: categoryId,
    assetId: "",
    imageFile: null,
    assetType: "Main",
    imageSrc: "",
  });

  useEffect(() => {
    if (categoryId > 0) {
      axios
        .get(`/api/Admin/category/getAllAssets/${categoryId}`)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setCategory(response.data.filter((x) => x.assetType === 0)[0]);
          }
        });
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", values.imageFile);
    formData.append("assetType", values.assetType);
    formData.append("categoryId", categoryId);

    await axios
      .post("/api/Admin/category/mainimage", formData)
      .then(() => {
        toast.success("Inserted Successfully!");
      })
      .catch((error) => {
        toast.error(
          "Check image size and Image type then try it again, if it didn't work for second time, refresh page and try it again."
        );
      });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-header">
        <h2>Profile Image</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>

      <div className="modal-content">
        <div className="controller">
          <label>Image</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={showPreview}
          />
        </div>
        <div className="controller">
          <label>Preview</label>
          {((values.imageSrc && values.imageSrc !== "") ||
            category.fileNmae) && (
            <img
              src={values.imageSrc || category.fileNmae}
              className="card-img"
              alt="Preview"
            />
          )}
        </div>
      </div>

      <div className="modal-footer">
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MainImage;
