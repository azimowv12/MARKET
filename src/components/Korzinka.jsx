import { useEffect } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export default function Korzinka({ cart, setcart }) {
  // LocalStorage dan yuklash
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setcart(JSON.parse(saved));
  }, []);

  // LocalStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (id, type) => {
    setcart(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty =
            type === "plus"
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setcart(prev => prev.filter(item => item.id !== id));
  };

  // Har doim price va quantity ni son qilamiz
  const totalPrice = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Korzinka</h2>
        <p>Korzinka bo‘sh</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Korzinka</h2>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow rounded-xl p-4 mb-3"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">
              Narx: ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => handleQuantityChange(item.id, "minus")}
                className="border p-1 rounded"
              >
                <FiMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, "plus")}
                className="border p-1 rounded"
              >
                <FiPlus />
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-lg mt-4">
        Jami: ${totalPrice.toFixed(2)}
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4 w-full"
>
        Buyurtma berish
      </button>
    </div>
  );
}
