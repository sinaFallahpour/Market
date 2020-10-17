import React from "react";

const ListProducts = () => {
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

          <div className="col-md-3 col-sm-4 product-item" rel="4">
            <a href="ShowProduct.aspx?id=4" dideo-checked="true">
              <figure>
                <img
                  src="/img/backhead.jpg"
                  alt="یوونتوس به این دلیل کریستیانو رونالدو را جذب کرد!"
                />
              </figure>
              <h2 title="یوونتوس به این دلیل کریستیانو رونالدو را جذب کرد!">
                یوونتوس به این دلیل کریستیانو رونالدو را جذب کرد!
              </h2>

              <p>
                شب درخشش کریستیانو رونالدو فرا رسیده است؛ شب داوری در مورد صحت
                سرمایه گذاری بزرگ [...]
              </p>
            </a>
            <div className="price-holder">
              <span class="item-off-price">190,000</span>

              <span className="item-price">
                9,500
                <span> تومان</span>
              </span>
            </div>
            <div className="add-basket" onclick="AddToBasket(4)">
              <img src="/img/icons8-buy-48.png" alt="" />
            </div>
          </div>
        </section>
        <div className="paginate" id="Pagination" runat="server">
          <a href="#">قبلی</a>

          <a href="#">1</a>
          <a href="#" className="selected">
            2
          </a>
          <a href="#">3</a>
          <a href="#">بعدی</a>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
