import React from "react";
import "./Home.css";
import Product from "./Product";
import image01 from "./assets/banner.webp"

import image from "./assets/youtube.avif"
import image1 from "./assets/netflix.png"
import image2 from "./assets/vbucks.jpeg"
import image3 from "./assets/valorant-gift-card-100-usd-69123.png"
import image4 from "./assets/lol.jpeg"
import image5 from "./assets/coc.png"



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={image01}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Youtube Gift Card: YouTube Premium Subscription for 3 Months"
            price={29.99}
            rating={5}
            image={image}
          />
          <Product
            id="49538094"
            title="Netflix: Netflix Premium Subscription for 3 months"
            price={79.99}
            rating={4}
            image={image1}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fortnite : 5000 Vbucks On Sale!!"
            price={31.99}
            rating={3}
            image={image2}
          />
          <Product
            id="23445930"
            title="Valorant : Exclusive valorant skin Gift Card"
            price={98.99}
            rating={5}
            image={image3}
          />
          <Product
            id="3254354345"
            title="LOL : League of Legend Skin Combo Gift Card"
            price={100}
            rating={4}
            image={image4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Clas of Clans : Unlimited Gems Gift Card"
            price={49.99}
            rating={6}
            image={image5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;