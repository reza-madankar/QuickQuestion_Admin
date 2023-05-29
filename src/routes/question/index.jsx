import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

import "../../asset/styles/question.scss";

import Girl from "asset/images/girl.png";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("/api/Admin/comment").then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <div className="question">
      <div className="content-header">
        <h2>Questions & Answer</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>Question</li>
        </ul>
      </div>
      <div className="content-tools">
        <div className="formController">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="right-tools">
          <button type="button" className="create">
            New
          </button>
        </div>
      </div>
      <div className="items">
        {questions.map((item, key) => 
          <div className="item" key={key}>
            <img src={Girl} alt="reza madankar" />
            <div className="comment">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="tools">
              <button type="button">
                <i className="fa fa-pencil" />
              </button>
              <button type="button">
                <i className="fa fa-eye" />
              </button>
              <button type="button">
                <i className="fa fa-comment-dots" />
              </button>
              <button type="button">
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="content-footer">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Question;
