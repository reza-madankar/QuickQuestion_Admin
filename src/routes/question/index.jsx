import React, { useState, useRef } from "react";
import useOutsideDetector from "component/hooks/useDetectClickOutsideElement";

import "../../asset/styles/question.scss";

import Boy from "asset/images/boy.png";
import Girl from "asset/images/girl.png";

const Question = () => {
  const [drpMenu, setDrpMenu] = useState("");
  const drpRef = useRef(null);

  const changeSetDrpMenu = (drp) => {
    if (drpMenu === drp) {
      setDrpMenu("");
    } else {
      setDrpMenu(drp);
    }
  };

  useOutsideDetector(drpRef, drpMenu, () => {
    setDrpMenu("");
  });

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
          <div className="drpBox" ref={drpRef}>
            <button type="button" onClick={() => changeSetDrpMenu("category")}>
              Category 1
              <i className="fa fa-chevron-down" />
            </button>
            <div
              className={`drpContent ${
                drpMenu === "category" ? "show" : "hide"
              }`}
            >
              <ul>
                <li>
                  <span> Category 1</span>
                </li>
                <li>
                  <span> Category 2</span>
                </li>
                <li>
                  <span>Category 3</span>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" className="create">
            New
          </button>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Boy} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Boy} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Girl} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
        <div className="item">
          <img src={Boy} alt="reza madankar" />
          <div className="comment">
            <h2>Question Title</h2>
            <p>Question Description</p>
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
      </div>
      <div className="content-footer">
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" class="active">
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
