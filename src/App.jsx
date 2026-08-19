import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Dresses from "./pages/Dresses";
import Cart from "./pages/Cart";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="simple-page">
        <h1>MAAD Fashions</h1>

        <p>Welcome to MAAD Fashions</p>
      </section>
    </>
  );
}

function Sarees() {
  return (
    <>
      <Navbar />

      <section className="simple-page">
        <h1>Sarees Collection</h1>

        <p>Saree products will be added here.</p>
      </section>
    </>
  );
}

function CustomisedDresses() {
  return (
    <>
      <Navbar />

      <section className="simple-page">
        <h1>Customised Dresses</h1>

        <p>Customised dress options will be added here.</p>
      </section>
    </>
  );
}

function Login() {
  return (
    <>
      <Navbar />

      <section className="simple-page">
        <h1>Login</h1>

        <p>Login page will be built here.</p>
      </section>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dresses" element={<Dresses />} />

          <Route path="/sarees" element={<Sarees />} />

          <Route path="/customised-dresses" element={<CustomisedDresses />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
