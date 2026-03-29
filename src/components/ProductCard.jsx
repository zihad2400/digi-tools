const ProductCard = ({ product, add }) => {
  return (
    <div className="border p-5 rounded shadow">
      <h2 className="text-xl">{product.icon} {product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price} ({product.period})</p>

      <ul>
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        onClick={() => add(product)}
        className="mt-3 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;