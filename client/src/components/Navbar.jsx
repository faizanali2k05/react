import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav style={{ padding: 20, display: "flex", justifyContent: "space-between", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>MyStore</Link>
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff" }}>Home</Link>
        <Link to="/products" style={{ color: "#fff" }}>Products</Link>
        <Link to="/cart" style={{ color: "#fff", position: "relative" }}>
          Cart
          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: -10,
              right: -10,
              background: "red",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: 12
            }}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
