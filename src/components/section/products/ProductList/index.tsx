import { ProductCard } from "../ProductCard";
import { productsData } from "./data";
import styles from "./ProductList.module.less";

export function ProductList() {
  return (
    <div className={styles.ProductList__root}>
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
