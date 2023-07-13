import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

//CSS
import './Home.css'

const Home = () => {
  // 3 - Carregamento de dados
  const url = "http:///localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <div>Produtos</div>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home