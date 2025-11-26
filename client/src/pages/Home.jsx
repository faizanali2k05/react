import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to MyStore!</h1>
      <p>Check out our featured products:</p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {featured.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
