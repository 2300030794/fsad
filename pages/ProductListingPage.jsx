import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, image: "/images/aloe.jpg", category: "Succulents" },
  { id: 2, name: "Peace Lily", price: 15, image: "/images/peace-lily.jpg", category: "Flowering" },
  { id: 3, name: "Snake Plant", price: 12, image: "/images/snake-plant.jpg", category: "Air Purifying" },
  { id: 4, name: "Pothos", price: 8, image: "/images/pothos.jpg", category: "Vines" },
  { id: 5, name: "Cactus", price: 9, image: "/images/cactus.jpg", category: "Succulents" },
  { id: 6, name: "Fiddle Leaf Fig", price: 20, image: "/images/fiddle-leaf.jpg", category: "Indoor" },
];

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Plants</h2>
      <div className="grid grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="border p-4 rounded-lg">
            <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{plant.name}</h3>
            <p className="text-gray-600">${plant.price}</p>
            <button
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md"
              disabled={cartItems.find((item) => item.id === plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              {cartItems.find((item) => item.id === plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
