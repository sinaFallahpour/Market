import React from "react";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <section className="item-list floater">
          <header className="com-md-12">
            <img src="/img/archive.png" alt="archive" />
            <span id="CategoryTitle" runat="server">
              جدیدترین محصولات
            </span>

            <div className="float-left">
              <select className="page-size">
                <option value="12">12</option>
                <option value="24">20</option>
                <option value="12">40</option>
                <option value="">همه</option>
              </select>
            </div>
          </header>
        </section>
      </div>
    </div>
  );
};
