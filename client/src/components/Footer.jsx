export default function Footer() {
  return (
    <footer style={{ padding: 20, background: "#eee", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} MyStore. All rights reserved.</p>
    </footer>
  );
}
