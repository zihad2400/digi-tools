const Navbar = ({ cartCount }) => {
  return (
    <div className="flex justify-between p-5 shadow">
      <h1 className="text-xl font-bold">DigiTools</h1>
      <div>🛒 {cartCount}</div>
    </div>
  );
};
export default Navbar;