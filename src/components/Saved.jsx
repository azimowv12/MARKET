import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Saved = ({ wishlist }) => {
    console.log(wishlist);

    return (
        <div>
            <h2>Saved Items</h2>
            {wishlist.length === 0 ? (
                <p>No items saved</p>
            ) : (
                <ul>
                    {wishlist.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition  dark:bg-gray-900 dark:text-white"
                        >
                            {/* ✅ Product sahifaga o'tish uchun Link */}
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain mb-3"
                                />
                                <h3 className="text-sm font-medium text-gray-800  dark:text-white">{product.title}</h3>
                            </Link>

                            <p className="text-lg font-bold mt-2">${product.price}</p>

                            <div className="flex items-center text-yellow-500 text-sm">
                                <FaStar className="mr-1" /> {product.rating?.rate}
                                <span className="ml-1 text-gray-500">
                                    ({product.rating?.count})
                                </span>
                            </div>


                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Saved