export const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 }
];

export function getExpensiveProducts(minPrice) {
  return products.filter(p => p.price > minPrice);
}
