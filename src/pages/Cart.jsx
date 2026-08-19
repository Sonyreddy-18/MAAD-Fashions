import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-header">
          <p>MAAD FASHIONS</p>

          <h1>Your Cart</h1>

          <span>Review your selected products before placing your order.</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>Add some beautiful products to your cart.</p>

            <Link to="/dresses" className="primary-btn">
              Browse Dresses
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <span>{item.category}</span>
                  </div>

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>{item.category}</p>

                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="cart-item-total">
                    <strong>
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="summary-row total-row">
                <strong>Total</strong>

                <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
              </div>

              <button className="checkout-btn">Proceed to Order</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
