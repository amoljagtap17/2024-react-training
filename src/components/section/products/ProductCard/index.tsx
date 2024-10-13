import styles from "./ProductCard.module.less";

export function ProductCard() {
  return (
    <div className={styles.ProductCard__root}>
      <div className={styles.ProductCard__title}>Title</div>
      <div className={styles.ProductCard__subtitle}>758.98</div>
      <div className={styles.ProductCard__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        consectetur reiciendis voluptates, iste perspiciatis, ducimus facilis
        sint, expedita ipsa quod reprehenderit illo ipsam est odio eligendi.
        Molestiae quas cum sapiente consequatur, eius vel minima rem numquam.
        Neque alias beatae explicabo.
      </div>
      <div>actions</div>
    </div>
  );
}
