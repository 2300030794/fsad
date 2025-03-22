import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link to="/">Plant Store</Link>
      </h1>
      <nav>
        <Link to="/products" className="mr-4">Products</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
