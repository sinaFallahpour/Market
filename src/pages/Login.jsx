import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

const Login = () => {
  const [islogin, setIslogin] = useState(true);

  return (
    <form id="MainForm" runat="server">
      <div className="container">
        <div className="row">
          <div className="sign-form">
            <div
              className={islogin ? `sign-form-login show` : `sign-form-login`}
              id="LoginForm"
            >
              <fieldset className="form-group">
                <legend>ورود به سایت</legend>

                <div id="LoginError" runat="server" className=""></div>
                {/* <%--<div className="show-success">
                                ورود با موفقیت انجام شد ، در حال هدایت به صفحه اصلی...
                            </div>--%> */}

                <div className="input-text">
                  <label>نام کاربری :</label>
                  <input
                    type="text"
                    id="LoginUsername"
                    runat="server"
                    placeholder="نام کاربری خود را وارد کنید"
                  />
                </div>

                <div className="input-text">
                  <label>کلمه عبور :</label>
                  <input
                    type="password"
                    id="LoginPassword"
                    runat="server"
                    placeholder="کلمه عبور خود را وارد کنید"
                  />
                </div>

                {/* <%--<div className="captcha-holder">
                                <img id="img_c" runat="server" src="../captcha.aspx" />
                                <input type="text" placeholder="کد امنیتی" />
                            </div>--%> */}

                <div className="captcha-holder">
                  <div
                    className="g-recaptcha"
                    id="LoginCaptcha"
                    data-sitekey="6Lddd5MUAAAAALbqtymbkPTP1xnYF5ClczlUWM9i"
                  ></div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="ورود به سایت"
                    className="btn btn-primary"
                    runat="server"
                    onserverclick="Login_ServerClick"
                  />
                </div>

                <div className="form-text">
                  عضو نیستید؟
                  <NavLink to="/register" className="register-form-btn">
                    ثبت نام کنید
                  </NavLink>
                </div>
              </fieldset>
            </div>

            <div
              className={
                islogin ? `sign-form-register` : ` sign-form-register show`
              }
              id="RegisterForm"
              runat="server"
            >
              <fieldset className="form-group">
                <legend>ثبت نام</legend>
                <div className="" id="RegisterError" runat="server"></div>
                {/* <%--<div className="show-success">
                                ثبت نام با موفقیت انجام شد
                            </div>--%> */}
                <div className="input-text">
                  <label>نام کاربری :</label>
                  <input
                    type="text"
                    id="RegisterUsername"
                    runat="server"
                    placeholder="نام کاربری را وارد کنید"
                  />
                </div>
                <div className="input-text">
                  <label>کلمه عبور :</label>
                  <input
                    type="password"
                    id="RegisterPassword"
                    runat="server"
                    placeholder="کلمه عبور را وارد کنید"
                  />
                </div>
                <div className="input-text">
                  <label>تکرار کلمه عبور :</label>
                  <input
                    type="password"
                    id="RegisterRePassword"
                    runat="server"
                    placeholder="کلمه عبور را وارد کنید"
                  />
                </div>
                {/* <%--<div className="captcha-holder">
                                <img id="img1" runat="server" src="../captcha.aspx" />
                                <input type="text" placeholder="کد امنیتی" />
                            </div>--%> */}
                <div className="captcha-holder">
                  <div
                    className="g-recaptcha"
                    id="RegisterCaptcha"
                    data-sitekey="6Lddd5MUAAAAALbqtymbkPTP1xnYF5ClczlUWM9i"
                  ></div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    value="ثبت نام"
                    className="btn btn-primary"
                    runat="server"
                    onserverclick="Register_ServerClick"
                  />
                </div>
                {islogin ? "tru" : "false"}sssssssssssss
                <div className="form-text">
                  قبلا عضو شده اید؟
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIslogin(false);
                    }}
                    className="login-form-btn"
                  >
                    وارد شوید
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
