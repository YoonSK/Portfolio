import React, { useEffect, useState } from "react";
import Button from "../components/common/Button/Button";
import Item from "../components/common/Item/Item";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    getProducts();
  }, []);

  const [visibleProducts, setVisibleProducts] = useState<number>(8);
  const handleShowMore = () => {
    console.log("탐");
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.slice(0, visibleProducts).map((product, index) => (
        <div key={index} style={{ flexBasis: "25%", padding: "5px" }}>
          <Item
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}
      {visibleProducts < products.length && (
        <Button
          size="md"
          variant="outline"
          className="border-black"
          onClick={() => handleShowMore()}
        >
          Show More
        </Button>
        // <button onClick={() => handleShowMore()}>ShowMore</button>
      )}
    </div>
  );
};
export default Home;
