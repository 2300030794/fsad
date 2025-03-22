import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="h-screen bg-cover flex flex-col items-center justify-center text-white" 
         style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <h1 className="text-4xl font-bold mb-4">Welcome to Plant Store</h1>
      <p className="mb-6 text-lg text-center">Discover the beauty of houseplants for a greener home!</p>
      <Link to="/products" className="bg-green-700 px-4 py-2 rounded-lg text-white">Get Started</Link>
    </div>
  );
}
