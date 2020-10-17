import React from "react";

const Footer = () => {
  return (
    <footer className="footer-holder">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <span>تماس با ما</span>
            <ul>
              <li>
                <span>تلفن : 2500221</span>
              </li>
              <li>
                <span>ایمیل : Info@sde.com</span>
              </li>
              <li>
                <span>آدرس : ساری خیابان خیام</span>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <span>لینک ها</span>
            <ul id="FooterMenu" runat="server">
              <li>
                <a href="/">صفحه اصلی </a>
              </li>
              <li>
                <a href="/ListProduct.aspx">محصولات ما </a>
              </li>
              <li>
                <a href="#">درباره ما </a>
              </li>
              <li>
                <a href="#">تماس با ما </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 footer-contact">
            <span>در شبکه های اجتماعی</span>
            <div>
              <a href="#" title="فیسبوک">
                <img src="/img/ic-fb.png" />
              </a>
              <a href="#" title="اینستاگرام">
                <img src="/img/ic-insta.png" />
              </a>
              <a href="#" title="تلگرام">
                <img src="/img/ic-tel.png" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img src="/img/logo.png" alt="M3 Company" />
            </a>
          </div>
        </div>
        <section className="row">
          <section className="col-sm-12 footer-copyright">
            <p>
              تمامی بخش های این فروشگاه برای استفاده در کلاس های آموزشی طراحی
              شده است.
            </p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
