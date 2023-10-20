import React from "react";
import "./Products.css";
import Product from "./Product";

// let products = [{ id : 1, title: "Red dragon...", rating: "  ", }, {id : 2, title: "   ", rating: "    "}];

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id= {1}
          title="Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming
          Keyboard, Programmable Backlit Gaming"
          image="https://m.media-amazon.com/images/I/71QDJHG1PqL._AC_UY218_.jpg"
          ratings= {2}
          price={39.99}
        />
        <Product
          id= {2}
          title="RedThunder K10 Wireless Gaming Keyboard and Mouse Combo, LED Backlit Rechargeable 3800mAh Battery"
          image="https://m.media-amazon.com/images/I/71A8PTiHSEL._AC_UY218_.jpg"
          ratings={4}
          price={53.99}
        />
      </div>
      <div className="products_row">
        <Product
          id={3}
          title="SteelSeries Rival 5 Gaming Mouse with PrismSync RGB Lighting and 9 Programmable Buttons FPS, MOBA"
          image="https://m.media-amazon.com/images/I/61QdKZP26rS._AC_UY218_.jpg"
          ratings={5}
          price={45.96}
        />
        <Product
          id={4}
          title="SteelSeries Arctis Nova 1 Multi-System Gaming Headset — Hi-Fi Drivers — 360° Spatial Audio"
          image="https://m.media-amazon.com/images/I/71pY4rbIg0L._AC_UY218_.jpg"
          ratings={3.5}
          price={22.99}
        />
        <Product
          id={5}
          title="Amazon Basics Kids/Youth Gaming Recliner"
          image="https://m.media-amazon.com/images/I/71KYhORbEUL._AC_UL320_.jpg"
          ratings={5}
          price={139.07}
        />
      </div>
      <div className="products_row">
      <Product
          id={6}
          title="Amazon Basics Kids/Youth Gaming Recliner"
          image="https://m.media-amazon.com/images/I/71KYhORbEUL._AC_UL320_.jpg"
          ratings={5}
          price={139.07}
        />
      </div>
    </>
  );
};

export default Products;
