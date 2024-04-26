export type Category = {
  id: number;
  name: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "electronics_image.jpg",
  },
  {
    id: 2,
    name: "Jewelery",
    image: "jewelery_image.jpg",
  },
  {
    id: 3,
    name: "Clothing",
    image: "clothes_image.jpg",
  },
];
