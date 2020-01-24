import React from "react";
import styles from "../../App.module.css";

const Product = props => {
  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={props.image} alt="foto" />
      <p className={price}>{props.amount}</p>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Product;
