import Product from "../components/Product";

const products = [
  {
    id: 1,
    name: "Wafer",
    price: 20000,
    discount: 20,
  },
  {
    id: 2,
    name: "Redmi Note X",
    price: 12000000,
    discount: 40,
  },
  {
    id: 3,
    name: "Bag",
    price: 30000,
    discount: 10,
  },
];

export default function ProductPage() {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
        />
      ))}
    </>
  );
}
