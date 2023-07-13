import './App.css';

import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  //4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - Resgatando os dados

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  //2 -add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // //3 - Carregamento dinamico
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  const handleDelete = async (id) => {
    httpConfig(id, "DELETE");
  }
  return (
    <div className="App">
      <h1>Lista de Produtos!</h1>
      {/* 6 - Loading */}
      {loading && <p> Carregando dados...</p>}
      {error && <p>{error} </p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button value="Deletar" onClick={() => {handleDelete(product.id)}}>Excluir</button>
          </li> 
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - State de loading post */}
          {loading && <input disabled type="submit" value="Aguarde!" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
