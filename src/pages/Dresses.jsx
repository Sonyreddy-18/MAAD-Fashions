import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const dresses = [
  {
    id: 1,
    name: "Elegant Party Dress",
    price: 1999,
    category: "Party Wear",
  },
  {
    id: 2,
    name: "Classic Floral Dress",
    price: 2499,
    category: "Casual Wear",
  },
  {
    id: 3,
    name: "Premium Evening Dress",
    price: 2799,
    category: "Evening Wear",
  },
  {
    id: 4,
    name: "Traditional Designer Dress",
    price: 2299,
    category: "Designer Wear",
  },
  {
    id: 5,
    name: "Elegant Long Dress",
    price: 1899,
    category: "Party Wear",
  },
  {
    id: 6,
    name: "Modern Celebration Dress",
    price: 2599,
    category: "Occasion Wear",
  },
];

function Dresses() {
  const { addToCart } = useCart();

  const handleAddToCart = (dress) => {
    addToCart(dress);
    alert(`${dress.name} added to cart`);
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Dresses Page */}
      <main className="products-page">
        <div className="products-header">
          <p>MAAD FASHIONS</p>

          <h1>Dresses Collection</h1>

          <span>Explore our collection of beautiful dresses.</span>
        </div>

        <div className="products-grid">
          {dresses.map((dress) => (
            <div className="product-card" key={dress.id}>
              <div className="product-image">
                <span>{dress.category}</span>
              </div>

              <div className="product-info">
                <h3>{dress.name}</h3>

                <p className="product-category">{dress.category}</p>

                <div className="product-bottom">
                  <strong>₹{dress.price.toLocaleString("en-IN")}</strong>

                  <button onClick={() => handleAddToCart(dress)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="back-home">
          <Link to="/">← Back to Home</Link>
        </div>
      </main>
    </>
  );
}

export default Dresses;
