import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';


const Product = () => {
    //4 - Rota dinamica
    const { id } = useParams();

    // 5 - Carregamento do dado individual
    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, error } = useFetch(url);

    console.log(product)
    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p> Ocorreu um erro!</p>}
            {loading && <p> Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/* 6 - Nested route */}
                    <Link to={`/products/${id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Product