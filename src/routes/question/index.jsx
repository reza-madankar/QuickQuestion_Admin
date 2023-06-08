import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "utilities/axios";
import Modal from "component/modal";

import Tags from "./components/tagModal";
import ModifyModal from "./components/modifyModal";
import AnswerModal from "./components/answerModal";
import GalleryModal from "./components/gallery";
import "../../asset/styles/question.scss";

import Girl from "asset/images/girl.png";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState(0);
  const [modal, setModal] = useState("");
  const { blogId } = useParams();

  useEffect(() => {
    axios.get(`/api/Admin/comment/${blogId}/0`).then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const removeComment = (id) => {
    axios.delete(`/api/Admin/comment/remove/${id}`).then((response) => {
      if (response.data === true) {
        setQuestions((prev) => prev.filter((x) => x.id !== id));
      }
    });
  };

  const visibleComment = (id) => {
    axios.get(`/api/Admin/comment/changeVisible/${id}`).then((response) => {
      if (response.data === true) {
        setQuestions((prev) =>
          prev.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x))
        );
      }
    });
  };

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
          <button
            type="button"
            className="create"
            onClick={() => {
              setModal("New Or Modify Question");
              setQuestionId(0);
            }}
          >
            New
          </button>
        </div>
      </div>
      <div className="items">
        {questions.map((item, key) => (
          <div className="item" key={key}>
            <img src={Girl} alt="reza madankar" />
            <div className="comment">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="tools">
              <button
                type="button"
                onClick={() => {
                  setModal("Gallery");
                  setQuestionId(item.id);
                }}
              >
                <i className="fa fa-images"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("Tag");
                  setQuestionId(item.id);
                }}
              >
                <i className="fa fa-tags"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("New Or Modify Question");
                  setQuestionId(item.id);
                }}
              >
                <i className="fa fa-pencil" />
              </button>
              <button type="button" onClick={() => visibleComment(item.id)}>
                {item.visible === true ? (
                  <i className="fa fa-eye" />
                ) : (
                  <i className="fa fa-eye-slash" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal("Answer");
                  setQuestionId(item.id);
                }}
              >
                <i className="fa fa-comment-dots" />
              </button>
              <button type="button" onClick={() => removeComment(item.id)}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        ))}
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
      <Modal isOpen={modal !== ""}>
        {(() => {
          switch (modal) {
            case "New Or Modify Question":
              return (
                <ModifyModal
                  closeModal={setModal}
                  id={questionId}
                  setComments={setQuestions}
                />
              );
            case "Tag":
              return <Tags closeModal={setModal} commentId={questionId} />;
            case "Answer":
              return (
                <AnswerModal closeModal={setModal} commentId={questionId} />
              );
            case "Gallery":
              return <GalleryModal closeModal={setModal} commentId={questionId} />;
            default:
              return null;
          }
        })()}
      </Modal>
    </div>
  );
};

export default Question;
