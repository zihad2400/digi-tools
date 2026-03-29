import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import productsData from "./data/products.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAdd = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout Done!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      {/* Toggle */}
      <div className="text-center my-6">
        <button onClick={() => setShowCart(false)} className="btn">Products</button>
        <button onClick={() => setShowCart(true)} className="btn ml-3">Cart</button>
      </div>

      {/* Section */}
      {showCart ? (
        <Cart cart={cart} remove={handleRemove} checkout={handleCheckout} />
      ) : (
        <div className="grid md:grid-cols-3 gap-5 p-5">
          {productsData.map((p) => (
            <ProductCard key={p.id} product={p} add={handleAdd} />
          ))}
        </div>
      )}

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;