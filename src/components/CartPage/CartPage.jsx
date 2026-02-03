import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";


const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-zinc-600 text-lg mt-30 mb-30 ml-90">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-zinc-100 p-4 rounded-lg mb-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-white rounded"
                />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              {/* QTY CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  <FaMinus />
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  <FaPlus />
                </button>
              </div>

              {/* PRICE + DELETE */}
              <div className="flex items-center gap-4">
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total</h2>
            <p className="text-2xl font-bold text-orange-500">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
