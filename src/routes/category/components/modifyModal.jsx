import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

const ModifyModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-header">
        <h2>New/Update Category</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="users">
        <h1>Modify Modal Category</h1>
      </div>
      <div className="modal-footer">
        <button className="submit">Submit</button>
      </div>
    </>
  );
};

export default ModifyModal;
