import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  console.log("PRops",props);
  const { all_products } = useContext(ShopContext);
  return (
    <div  className="shop-category">
      <div className="shopcategory-banner">
        <img src={props.banner} alt="" srcset="" />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" srcset="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.price}
                old_price={item.old_price}
              />
            );
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
