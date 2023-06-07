import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Select from "react-select";
import { toast } from "react-hot-toast";

const Gallery = ({ commentId, closeModal }) => {
  const [assets, setAssets] = useState([]);
  const [values, setValues] = useState({
    commentId: commentId,
    assetId: "",
    imageFile: null,
    assetType: null,
    imageSrc: "",
  });

  useEffect(() => {
    if (commentId > 0) {
      axios
        .get(`/api/Admin/comment/getAllAssets/${commentId}`)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setAssets(response.data.filter((x) => x.assetType !== 0));
          }
        });
    }
  }, [commentId]);

  const handleSubmit = async (e) => {
    if (values.assetType) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("imageFile", values.imageFile);
      formData.append("assetType", values.assetType);
      formData.append("commentId", commentId);

      try {
        const response = await axios.post(
          "/api/Admin/comment/insertasset",
          formData
        );

        setAssets((oldArray) => [
          ...oldArray,
          {
            assetType: response.data.assetType,
            commentId: response.data.commentId,
            fileNmae: response.data.fileName,
            id: response.data.id,
          },
        ]);

        setValues({
            commentId: commentId,
          assetId: "",
          imageFile: null,
          assetType: null,
          imageSrc: "",
        });

        document.getElementById("imageFile").value = "";

      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Please Select image type.");
    }
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

  const removeAsset = (id) => {
    axios.delete(`/api/Admin/comment/removeAsset/${id}`).then((response) => {
      if (response.data === true) {
        setAssets(assets.filter((x) => x.id !== id));
      }
    });
  };

  return (
    <form>
      <div className="modal-header">
        <h2>Gallery</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>

      <div className="modal-content">
        <div className="controller">
          <label>Type</label>
          <Select
            className="drpImageType"
            placeholder="Select Image Type"
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setValues((x) => ({ ...x, assetType: option.value }));
            }}
            options={[
              {
                label: "Gallery Show 400 * 400 px",
                value: "Gallery",
              },
              {
                label: "Slide Show 1200 * 400 px",
                value: "Slide",
              },
            ]}
          />
        </div>
        <div className="controller">
          <label>Image</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            id="imageFile"
            onChange={showPreview}
          />
        </div>
        <div className="controller">
          <label>Preview</label>
          {values.imageSrc && values.imageSrc !== "" && (
            <img src={values.imageSrc} className="card-img" alt="Preview" />
          )}
        </div>

        {assets &&
          assets.length > 0 &&
          assets.map((item, key) => (
            <div className="galleries">
              <img alt={item.id} src={item.fileName} />
              <div className="tools">
                <button type="button" onClick={() => removeAsset(item.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-light" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Gallery;