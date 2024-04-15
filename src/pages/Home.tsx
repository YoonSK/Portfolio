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
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <>
      <div
        className="ourProducts"
        style={{
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "large",
          }}
        >
          Our Products
        </div>
        <div
          style={{
            display: "grid",
            padding: "16px 24px",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {products.slice(0, visibleProducts).map((product, index) => (
            <div key={index} className="itembox">
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
        </div>
        {visibleProducts < products.length && (
          <div style={{ paddingLeft: "40%", marginBottom: "2%" }}>
            <Button
              size="md"
              variant="outline"
              color="brown"
              rounded="none"
              onClick={() => handleShowMore()}
            >
              Show More
            </Button>
          </div>
          // <button onClick={() => handleShowMore()}>ShowMore</button>
        )}
      </div>
    </>
  );
};
export default Home;
