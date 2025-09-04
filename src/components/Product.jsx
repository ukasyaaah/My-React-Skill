export default function Product({ price, name, discount = 0 }) {
  return (
    <div>
      <h2>{name} </h2>
      <p>
        <s> {price} </s> ({discount}%)
      </p>
      <p>
        <b>
          Rp. {parseInt(price) - (parseInt(price) * parseInt(discount)) / 100}{" "}
        </b>
      </p>
      <hr />
    </div>
  );
}