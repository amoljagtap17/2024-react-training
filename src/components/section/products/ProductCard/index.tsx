import { Button } from "../../../lib";
import { IProductCardProps } from "../types";
import styles from "./ProductCard.module.less";

export function ProductCard({ id, title, price, content }: IProductCardProps) {
  const handleOnAddFav = () => {
    console.log(`${id} was added to favorites`);
  };

  const handleOnAddCart = () => {
    console.log(`${id} was added to cart`);
  };

  return (
    <div className={styles.ProductCard__root}>
      <div className={styles.ProductCard__title}>{title}</div>
      <div className={styles.ProductCard__subtitle}>
        <em>{price}</em>
      </div>
      <div className={styles.ProductCard__content}>{content}</div>
      <div className={styles.ProductCard__actions}>
        <Button variant="outlined" onClick={handleOnAddFav}>
          Add Fav
        </Button>
        <Button variant="contained" onClick={handleOnAddCart}>
          Add Cart
        </Button>
      </div>
    </div>
  );
}
