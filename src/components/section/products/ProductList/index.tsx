import { ProductCard } from "../ProductCard";
import { IProductCardProps } from "../types";
import styles from "./ProductList.module.less";

const productsData: IProductCardProps[] = [
  {
    id: "c4786109-8e64-4790-a748-817815eac82a",
    title: "Tasty Granite Shoes",
    content:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: 749.29,
  },
  {
    id: "a2208450-791c-4fdf-9e19-20a4a4fa6d4a",
    title: "Electronic Bronze Shirt",
    content:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: 628.75,
  },
  {
    id: "226b89e5-63d2-4741-8391-8965e979c207",
    title: "Rustic Plastic Shirt",
    content:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: 468.09,
  },
  {
    id: "05967f91-1258-4169-a8b6-cc094961d299",
    title: "Awesome Frozen Towels",
    content:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    price: 154.35,
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
