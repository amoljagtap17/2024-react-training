import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.less";

export function ProductList() {
  return (
    <div className={styles.ProductList__root}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
