import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function SeeMorePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-600">Carregando...</p>

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6">

        <img
          src={product.photo_url}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h1>

        <p className="text-gray-600 mb-2">
          {product.description}
        </p>

        <p className="text-xl font-bold text-green-600 mb-6">
          R$ {product.price}
        </p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
