import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    photo_url: "",
  });

  const [errors, setErrors] = useState({});

  async function fetchProduct() {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (!product.name) newErrors.name = "Nome é obrigatório";
    if (!product.description) newErrors.description = "Descrição é obrigatória";
    if (!product.price) newErrors.price = "Preço é obrigatório";
    if (!product.photo_url) newErrors.photo_url = "URL da foto é obrigatória";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    alert("Produto atualizado!");
    window.location.href = "/products";
  }

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Editar Produto
        </h1>

        <div>
          <label className="block text-gray-700 mb-1">Nome</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded-lg ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Descrição</label>
          <input
            name="description"
            value={product.description}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded-lg ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Preço</label>
          <input
            name="price"
            type="number"
            step="0.01"
            value={product.price}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded-lg ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">URL da foto</label>
          <input
            name="photo_url"
            value={product.photo_url}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded-lg ${
              errors.photo_url ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.photo_url && (
            <p className="text-red-500 text-sm">{errors.photo_url}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}
