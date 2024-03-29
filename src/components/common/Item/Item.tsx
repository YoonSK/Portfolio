import React from "react";

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
      <input type="hidden" value={id} />
      <h5 className="product_titme">상품 제목 : {title}</h5>
      <p className="product_des">상품 내용 요약 : {description}</p>
      <div className="product_price">상품 가격 : {price}</div>
    </div>
  );
};

export default Item;
