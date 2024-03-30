import React from "react";
import "./Item.scss";

type ItemProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

const Item: React.FC<ItemProps> = ({
  id,
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="product">
      <div className="product_img_div">
        <img src={image} className="product_img" alt={title} />
      </div>
      <div className="product_text">
        <input type="hidden" value={id} />
        <b className="product_titme">{title}</b>
        <p className="product_des">{description}</p>
        <b className="product_price">{price}</b>
      </div>
    </div>
  );
};

export default Item;
