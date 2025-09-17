import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Main1({ wishlist, setWishlist, cart, setCart, searchTerm }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setPost(response.data);
        } catch (error) {
            console.log("Xato:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

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

    const filteredProducts = post.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p className="text-center py-6">⏳ Yuklanmoqda...</p>;

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
                            {/* ✅ Product sahifaga o'tish uchun Link */}
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain mb-3"
                                />
                                <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
                            </Link>

                            <p className="text-lg font-bold mt-2">${product.price}</p>

                            <div className="flex items-center text-yellow-500 text-sm">
                                <FaStar className="mr-1" /> {product.rating?.rate}
                                <span className="ml-1 text-gray-500">
                                    ({product.rating?.count})
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <button onClick={() => toggleWishlist(product.id)}>
                                    <FaHeart
                                        className={`text-2xl transition ${wishlist.includes(product.id)
                                            ? "text-red-500"
                                            : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                <button
                                    onClick={() => toggleCart(product.id)}
                                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-xl hover:bg-blue-700 transition"
                                >
                                    <FaShoppingCart />
                                    {cart.includes(product.id)
                                        ? "Savatdan olib tashlash"
                                        : "Savatga qo‘shish"}
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
