import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 10, textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: 10 }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} style={{ display: "inline-block", marginTop: 10, padding: "5px 10px", background: "#222", color: "#fff", borderRadius: 5 }}>View</Link>
    </div>
  );
}
