import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);
  const { addToCart } = useCart();

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <img src={product.image} alt={product.name} style={{ width: 300 }} />
      <h1>{product.name}</h1>
      <h3>${product.price}</h3>
      <p>Category: {product.category}</p>
      <button onClick={() => addToCart(product)} style={{ padding: "10px 20px", marginTop: 10, background: "green", color: "#fff", borderRadius: 5 }}>Add to Cart</button>
    </div>
  );
}
