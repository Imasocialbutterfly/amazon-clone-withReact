import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
        className="home_image"
          src="https://m.media-amazon.com/images/I/61EC3Je+XaL._SX3000_.jpg"
          alt="TV Stand"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
