import { useEffect, useState } from "react";

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
             <button>Novo produto</button>
             <div className="grid grid-cols-3 grid-rows-4 gap-10">
                <Card produtos={products} />
             </div>
        </>
    )
}

export default ProductsListPage