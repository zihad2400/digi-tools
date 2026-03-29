const Cart = ({ cart, remove, checkout }) => {
  return (
    <div className="p-5">
      <h2 className="text-xl mb-3">Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border p-2 my-2">
          <span>{item.icon} {item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => remove(item.id)}>❌</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={checkout}
          className="bg-purple-600 text-white px-5 py-2 mt-3"
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;