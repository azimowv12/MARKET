import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";

const products = [
    { id: 1, name: "Fonar svetodiodli", price: "59 000 so`m", rating: 4.7, reviews: 293, image: "https://avatars.mds.yandex.net/i?id=4dcd4cd93233ef107f0c8e5fdb2fa497_l-5529899-images-thumbs&n=13" },
    { id: 2, name: "Dyson professional to'plam", price: "369 000 so`m", rating: 4.7, reviews: 293, image: "https://avatars.mds.yandex.net/i?id=cb947efcfa41c5a951d2de1c1bdd8e36_l-4328551-images-thumbs&n=13" },
    { id: 3, name: "Studiya mikrofoni Jmary", price: "349 000 so`m", rating: 4.7, reviews: 293, image: "https://pervoe.ru/upload/iblock/20c/20c9c64c46b05a759e6bb4b2c6f32498.jpg" },
    { id: 4, name: "BMW M5", price: "349 000 so`m", rating: 4.7, reviews: 293, image: "https://avatars.mds.yandex.net/get-autoru-vos/2174361/4b4b450a432146fc03e08eae0a6a0e6a/320x240" },
    { id: 5, name: "BMW M8", price: "349 000 so`m", rating: 4.7, reviews: 293, image: "https://avatars.mds.yandex.net/get-autoru-vos/4290540/deed38604aa68b78a1d72500be749350/1200x900  " },
    { id: 6, name: "BMW M5 COMPITATION  ", price: "349 000 so`m", rating: 4.7, reviews: 293, image: "https://i.ytimg.com/vi/NIabm-0Jf44/maxresdefault.jpg" },
];

export default function Main1({ wishlist, setWishlist, cart, setCart, searchTerm }) {
    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
        );
    };

    const toggleCart = (id) => {
        setCart((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-gray-50 py-8 px-4">
            <h2 className="text-2xl font-bold mb-6">Mahsulotlar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain mb-3" />
                            <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                            <p className="text-lg font-bold mt-2">{product.price}</p>

                            <div className="flex items-center text-yellow-500 text-sm">
                                <FaStar className="mr-1" /> {product.rating}
                                <span className="ml-1 text-gray-500">({product.reviews})</span>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <button onClick={() => toggleWishlist(product.id)}>
                                    <FaHeart
                                        className={`text-2xl transition ${wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                <button
                                    onClick={() => toggleCart(product.id)}
                                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-xl hover:bg-blue-700 transition"
                                >
                                    <FaShoppingCart />
                                    {cart.includes(product.id) ? "Savatdan olib tashlash" : "Savatga qo‘shish"}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Hech narsa topilmadi.</p>
                )}
            </div>
        </section>
    );
}
