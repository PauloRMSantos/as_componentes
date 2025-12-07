import { useState } from "react";

export function NewProductPage() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    photo_url: "",
  });

  const [errors, setErrors] = useState({});

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

    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    alert("Produto cadastrado!");
    window.location.href="/products"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Cadastro de Produto
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
