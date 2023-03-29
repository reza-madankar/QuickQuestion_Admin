import "../../asset/styles/category.scss";

import Girl from "asset/images/girl.png";

const Category = () => {
  return (
    <div className="category">
      <div className="content-header">
        <h2>Category</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>Category</li>
        </ul>
      </div>
      <div className="items">
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="logo"
            style={{ backgroundImage: "url(" + Girl + ")" }}
          ></div>
          <h2>Category Title</h2>
          <p>Category Description Here</p>

          <div className="tools">
            <button type="button">
              <i className="fa fa-images"></i>
            </button>
            <button type="button">
              <i className="fa fa-tags"></i>
            </button>
            <button type="button">
              <i className="fa fa-pencil"></i>
            </button>
            <button type="button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
