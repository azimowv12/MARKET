import { useState } from "react";
import Navbar from "./components/Navbar";
import Main1 from "./components/main1";
import CatalogGrid from "./components/Katalog";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Hero from "./components/HeroSwiper";

export default function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pb-10">
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        onSearch={setSearchTerm}
      />
      <div className="max-w-7xl mx-auto mt-40 ">

      <Hero />
      </div>
      <div className="pt-16">
        <CatalogGrid />
      </div>
      <main className="">
        <Main1
          wishlist={wishlist}
          setWishlist={setWishlist}
          cart={cart}
          setCart={setCart}
          searchTerm={searchTerm}
        />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
