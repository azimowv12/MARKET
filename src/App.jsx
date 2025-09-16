import { useState } from "react";
import Navbar from "./components/Navbar";
import Main1 from "./components/main1";
import CatalogGrid from "./components/Katalog";

export default function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 pb-10">
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        onSearch={setSearchTerm}
        
      />
      <div className="pt-16">

      <CatalogGrid/>
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
    </div>
  );
}
