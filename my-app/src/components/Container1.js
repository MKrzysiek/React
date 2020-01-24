import React from "react";
import ProductListPage from "./ProductListPage/ProductListPage";
// import ManufacturerList from "./ManufacturerList/ManufacturerList";
import ManufacturerList1 from "./a/a";
import styles from "../App.module.css";

function Container1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerBig}>Catalog</h1>

      <div className={styles.catalog}>
        <div className={styles.columnLeft}>
          <div className={styles.filter}>
            <div className={styles.filterHeader}>
              <h4>Search</h4>
              <a href="catalog" className={styles.clear}>
                Clear
              </a>
            </div>
            <div>
              <input type="text" placeholder="search..." />
            </div>
            <h4>Manufacturer</h4>
            <div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="all"
                  value="all"
                  checked
                />
                <label for="all">All</label>
              </div>

              <ManufacturerList1 />

              {/* <ManufacturerList /> */}

              {/* <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="apple"
                      value="apple"
                    />
                    <label for="apple">Apple</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="asus"
                      value="asus"
                    />
                    <label for="asus">Asus</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="dell"
                      value="dell"
                    />
                    <label for="dell">Dell</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="intel"
                      value="intel"
                    />
                    <label for="intel">Intel</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="lenovo"
                      value="lenovo"
                    />
                    <label for="lenvo">Lenovo</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="manufacturere"
                      id="microsoft"
                      value="microsoft"
                    />
                    <label for="microsoft">Microsoft</label>
                    <div>
                      <input
                        type="radio"
                        name="manufacturere"
                        id="samsung"
                        value="samsung"
                      />
                      <label for="samsung">Samsung</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="manufacturere"
                        id="xiaomi"
                        value="xiaomi"
                      />
                      <label for="xiaomi">Xiaomi</label>
                    </div> */}
            </div>
          </div>
        </div>

        <div className={styles.columnRight}>
          <ProductListPage />
        </div>
      </div>
    </div>
  );
}

export default Container1;
