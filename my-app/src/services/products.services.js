import products from "../mocks/products.json";

class ProductsService {
  static getProducts() {
    return products;
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }

  // static getProductByManufacturer(manufacture) {
  //   return products.filter(product => product.manufacture === manufacture);
  // }

  // static getProductByCategory(category) {
  //   return products.filter(
  //     product => product.category === category && product.featured
  //   );
  // }
  // static getProductByName(name) {
  //   return products.filter(product => product.name === name);
  // }

  static getManufacturersList() {
    const result = [];

    products.forEach(element => {
      result.push(element.manufacture);
    });
    return result;
  }
}
export default ProductsService;
