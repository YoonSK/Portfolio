import React from "react";
import { Category } from "./Category";
import "./CategoryStyle.scss";
type CategoryProps = {
  category: Category;
  // onCategoryClick: (categoryId: number) => void;
};

const CategoryComponent: React.FC<CategoryProps> = ({
  category,
  //  onCategoryClick,
}) => {
  return (
    <div className="category">
      <div className="category_img_div">
        <img
          className="category_img"
          src={require(`../../../images/${category.image}`)}
          alt={category.name}
        />
      </div>
      <div className="product_des_div" style={{ textAlign: "center" }}>
        <p>{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryComponent;
