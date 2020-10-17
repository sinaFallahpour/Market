import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <a href="/" className="right-logo">
              <img src="/img/logo.png" alt="2" />
            </a>
            <div className="search-box">
              <input
                type="text"
                placeholder="جستجو..."
                className="SearchInput"
                id="SearchInput"
                runat="server"
              />
              <button onclick="MainSearch()">
                <img src="/img/search.png" alt="3" />
              </button>
            </div>
            <div className="left-head-side">
              <a href="/Basket.aspx" className="basket">
                <img src="/img/shopping-cart-48.png" alt="1" />

                <span id="BasketCount" className="BasketCount"></span>
              </a>
              <a
                href="/Sign.aspx"
                className="login-link"
                id="LoginButton"
                runat="server"
              >
                ورود/ثبت نام
              </a>
              <a
                href="/EditProfile.aspx"
                className="login-link"
                id="EditProfileButton"
                runat="server"
              ></a>
              <a
                href="/LogOut.aspx"
                className="login-link"
                id="LogOutButton"
                runat="server"
              >
                خروج
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-wrapper">
        <div className="container">
          <div className="row">
            <nav className="float-right">
              <ul className="menu" id="MainMenu" runat="server">
                <li>
                  <a href="/">صفحه اصلی</a>
                </li>
              </ul>
            </nav>
            <ul className="menu float-left">
              <li>
                <a href="/ListProduct.aspx">جدیدترین محصولات</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
