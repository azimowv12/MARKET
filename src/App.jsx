import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main1 from "./components/main1";
import CatalogGrid from "./components/Katalog";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Hero from "./components/HeroSwiper";
import ProductDetail from "./components/ProductDetail";
import Saved from "./components/Saved";
import Korzinka from "./components/Korzinka";
import i18n from "../i18n"

export default function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col pb-10  dark:bg-gray-900  ">
        <Navbar
          wishlistCount={wishlist.length}
          cartCount={cart.length}
          onSearch={setSearchTerm}
        />


        <div className="max-w-7xl mx-auto mt-40">
          <Routes>
            {/* Bosh sahifa */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <div className="pt-16">
                    <CatalogGrid />
                  </div>
                  <Main1
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                    cart={cart}
                    setCart={setCart}
                    searchTerm={searchTerm}
                  />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Mahsulot sahifasi */}
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route path="/saved" element={<Saved wishlist={wishlist} />} />
           <Route path="/korzinka" element={<Korzinka cart={cart} />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
