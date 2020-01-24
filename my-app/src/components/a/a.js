import React from "react";
import Input from "../Input/Input";
import ProductService from "../../services/products.services";

const manufacturer = ProductService.getManufacturersList();

const ManufacturerList1 = () => {
  return (
    <div>
      {manufacturer.map((item, index) => (
        <Input key={index} value={item} />
      ))}
      ;
    </div>
  );
};
export default ManufacturerList1;
