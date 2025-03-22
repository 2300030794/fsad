import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md" />
                <div className="flex-1 px-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-md"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-md"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-lg">Total Items: {totalItems}</p>
            <p className="text-lg font-bold">Total Cost: ${totalCost}</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">Coming Soon</button>
            <Link to="/products" className="ml-4 text-green-600">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}
