import React from "react";
import Imput from "../Input/Input";
import ProductService from "../../services/products.services";

const manufacturer = ProductService.getProductByManufacturer();

const ManufacturerList = () => {
  return (
    <div>
      {manufacturer.map((item, index) => (
        <Imput key={index} value={item} />
      ))}
      ;
    </div>
  );
};
export default ManufacturerList;
