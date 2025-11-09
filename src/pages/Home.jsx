import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  // Get featured products (first 6 products)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to FastFood Shop</h1>
          <p className="text-xl mb-8">
            Delicious fast food delivered to your door
          </p>
          <Link
            to="/collection"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link
            to="/collection"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <Link
              to="/collection?category=Burger"
              className="bg-gray-100 p-8 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-gray-800">Burgers</h3>
              <p className="text-gray-600 mt-2">Delicious burgers</p>
            </Link>
            <Link
              to="/collection?category=Shawarma"
              className="bg-gray-100 p-8 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-gray-800">Shawarma</h3>
              <p className="text-gray-600 mt-2">Tasty shawarma</p>
            </Link>
            <Link
              to="/collection?category=Pizza"
              className="bg-gray-100 p-8 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-gray-800">Pizza</h3>
              <p className="text-gray-600 mt-2">Fresh pizzas</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

