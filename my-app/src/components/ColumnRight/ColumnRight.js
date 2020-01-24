import React from "react";
import ProductsListPage from "../ProductListPage/ProductsListPage";
import styles from "../../App.module.css";

const ColumnRight = props => {
  return (
    <div className={styles.products}>
      <ProductsListPage products={props.products} />
    </div>
  );
};

export default ColumnRight;
