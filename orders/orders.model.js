const orders = [
  {
    date: "2019-01-01",
    subtotal: 42.99,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old red shoe",
          price: 42.99,
        },
        quantity: 3,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}
module.exports = { getAllOrders };
