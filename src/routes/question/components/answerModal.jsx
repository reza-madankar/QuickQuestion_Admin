import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

const AnswerModal = ({ closeModal, commentId }) => {
  const [answers, setAnswers] = useState([]);
  const [comment, setComments] = useState({});
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (commentId > 0) {
      axios.get(`/api/Admin/comment/${commentId}`).then((response) => {
        setComments(response.data);
      });

      axios.get(`/api/Admin/comment/answer/${commentId}/0`).then((response) => {
        setAnswers(
          response.data.sort((a, b) =>
            a.description.localeCompare(b.description)
          )
        );
      });
    }
  }, [commentId]);

  const insertAnswer = () => {
    if (description.trim().length > 0) {
      axios
        .post("/api/Admin/comment/answer/insetorupdate", {
          commetnId: comment.id,
          description: description,
        })
        .then((response) => {
          if (response.data !== null) {
            setAnswers((prev) => {
              if (prev.some((x) => x.id === 0)) {
                return prev.map((x) => (x.id === 0 ? response.data : x));
              } else {
                return [...prev, response.data];
              }
            });

            setDescription("");
          }
        });
    }
  };

  const removeAnswer = (id) => {
    axios.delete(`/api/Admin/comment/answer/remove/${id}`).then((response) => {
      if (response.data === true) {
        setAnswers((prev) => prev.filter((x) => x.id !== id));
      }
    });
  };

  const visibleAnswer = (id) => {
    axios
      .get(`/api/Admin/comment/answer/changeVisible/${id}`)
      .then((response) => {
        if (response.data === true) {
          setAnswers((prev) =>
            prev.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x))
          );
        }
      });
  };

  return (
    <>
      <div className="modal-header">
        <h2>{comment.title} - Answers</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>

      <div className="controller">
        <label>Answer</label>
        <input
          type="text"
          placeholder="Add your answer to this comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && description.length > 0) {
              insertAnswer();
            }
          }}
        />
        {description.length > 0 && (
          <>
            <i className="fa fa-xmark" onClick={() => setDescription("")}></i>
            <i className="fa fa-plus" onClick={insertAnswer}></i>
          </>
        )}
      </div>

      <div className="answers">
        {comment && (
          <ul>
            {answers.map((item, key) => (
              <li key={key}>
                {item.description}
                {item.visible === true ? (
                  <i
                    className="fa fa-eye"
                    onClick={() => visibleAnswer(item.id)}
                  />
                ) : (
                  <i
                    className="fa fa-eye-slash"
                    onClick={() => visibleAnswer(item.id)}
                  />
                )}
                <i
                  className="fa fa-trash"
                  onClick={() => removeAnswer(item.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AnswerModal;
