import styles from "./ProductCard.module.less";

export function ProductCard() {
  return (
    <div className={styles.ProductCard__root}>
      <div>Title</div>
      <div>price</div>
      <div>content</div>
      <div>actions</div>
    </div>
  );
}
