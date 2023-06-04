import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

const ProfileImage = ({ userId, closeModal }) => {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({
    userId: userId,
    assetId: "",
    imageFile: null,
    assetType: "Main",
    imageSrc: "",
  });

  useEffect(() => {
    if (userId > 0) {
      axios
        .get(`/api/Admin/user/getAllAssets/${userId}`)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setUser(response.data.filter((x) => x.assetType === 0)[0]);
          }
        });
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", values.imageFile);
    formData.append("assetType", values.assetType);
    formData.append("userId", userId);

    try {
      const response = await axios.post(
        "/api/Admin/user/profileimage",
        formData
      );
    } catch (error) {
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
            user?.fileNmae) && (
            <img
              src={values.imageSrc || user.fileNmae}
              width={120}
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

export default ProfileImage;
