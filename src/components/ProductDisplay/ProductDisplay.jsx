import React from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" srcset="" />
          <img src={product.image} alt="" srcset="" />
          <img src={product.image} alt="" srcset="" />
          <img src={product.image} alt="" srcset="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis quod possimus odio laudantium dicta nobis quidem, voluptatem
          magnam rerum ullam!
        </div>
        <div className="productdisplay-right-sizes">
          <h1>select size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
          <button>Add to cart</button>
          <p className="productdisplay-right-category">
            <span>
              Category:<span>Women ,T-shirt , Crop Top</span>
            </span>
            <span>
              Tags:<span>Modern ,Latest</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
