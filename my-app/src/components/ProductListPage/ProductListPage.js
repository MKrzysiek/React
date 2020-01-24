import React from "react";
import ProductService from "../../services/products.services";
import styles from "../../App.module.css";

const products = ProductService.getProducts();

const ProductListPage = () => {
  return (
    <div className={styles.products}>
      {products.map(item => (
        <div className={styles.product}>
          <img className={styles.productImg} src={item.image} alt={item.name} />
          <p className={styles.price}>{item.amount}</p>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
