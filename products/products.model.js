const products = [
  {
    id: "redshoe",
    description: "Red shoe",
    price: 42.99,
  },
  {
    id: "bluejeans",
    description: "Blue jeans",
    price: 82.99,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

module.exports = { getAllProducts, getProductsByPrice, getProductById };
