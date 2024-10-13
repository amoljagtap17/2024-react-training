import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.less";

const productsData = [
  {
    id: "1",
    title: "Product 1",
    price: 100,
    content: "Product 1 content",
  },
  {
    id: "2",
    title: "Product 2",
    price: 200,
    content: "Product 2 content",
  },
  {
    id: "3",
    title: "Product 3",
    price: 300,
    content: "Product 3 content",
  },
  {
    id: "4",
    title: "Product 4",
    price: 400,
    content: "Product 4 content",
  },
  {
    id: "5",
    title: "Product 5",
    price: 500,
    content: "Product 5 content",
  },
];

export function ProductList() {
  return (
    <div className={styles.ProductList__root}>
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
