import "asset/styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="accountbox">
        <div className="logo">
          <i className="fa fa-user" />
          <h2>LOGIN</h2>
          <h3>Quick Question</h3>
        </div>
        <div className="formController">
          <input type="text" placeholder="Username" />
          <i className="fa fa-user"></i>
        </div>
        <div className="formController">
          <input type="password" placeholder="Password" />
          <i className="fa fa-key"></i>
        </div>
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export default Login;
