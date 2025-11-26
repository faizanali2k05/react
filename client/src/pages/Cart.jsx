import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) return <h2 style={{ padding: 20 }}>Your cart is empty</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 10 }}>
          <img src={item.image} alt={item.name} width={80} />
          <div>
            <h3>{item.name}</h3>
            <p>Qty: {item.qty}</p>
            <p>Price: ${item.price * item.qty}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ padding: 5 }}>Remove</button>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <button onClick={clearCart} style={{ padding: "10px 20px", marginTop: 10 }}>Clear Cart</button>
    </div>
  );
}
