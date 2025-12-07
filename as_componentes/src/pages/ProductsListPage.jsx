import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

function ProductsListPage(){
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const response = await fetch("http://localhost:3000/products", {
            method: "GET"
        });

        const products = await response.json();
        setProducts(products)
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
             <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                <Link to={"/products/new"}>
                    Cadastrar produto
                </Link>
             </button>
             <div className="grid grid-cols-3 grid-rows-4 gap-10">
                <Card produtos={products} />
             </div>
        </>
    )
}

export default ProductsListPage