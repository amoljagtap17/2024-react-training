import { Button } from "../../../lib";
import { IProductCardProps } from "../types";
import styles from "./ProductCard.module.less";

export function ProductCard({ title, price, content }: IProductCardProps) {
  return (
    <div className={styles.ProductCard__root}>
      <div className={styles.ProductCard__title}>{title}</div>
      <div className={styles.ProductCard__subtitle}>
        <em>{price}</em>
      </div>
      <div className={styles.ProductCard__content}>{content}</div>
      <div className={styles.ProductCard__actions}>
        <Button variant="outlined">Add Fav</Button>
        <Button variant="contained">Add Cart</Button>
      </div>
    </div>
  );
}
