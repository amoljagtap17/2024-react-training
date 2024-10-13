import styles from "./ProductCard.module.less";

interface IProductCardProps {
  id: string;
  title: string;
  price: number;
  content: string;
}

export function ProductCard({ title, price, content }: IProductCardProps) {
  return (
    <div className={styles.ProductCard__root}>
      <div className={styles.ProductCard__title}>{title}</div>
      <div className={styles.ProductCard__subtitle}>{price}</div>
      <div className={styles.ProductCard__content}>{content}</div>
      <div className={styles.ProductCard__actions}>
        <button>Add to Fav</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
