import { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderBar from './components/HeaderBar'

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
}

function App() {
  const [product, setProduct] = useState<Product | null>(null);
  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(`${apiUrl}/2`)
      .then(res => {
        setProduct(res.data)
      })
  }, []);

  return (
    <div>
      <HeaderBar />
      <div className="container mx-auto">
        {
          product === null ?
            <h1>nothing</h1> :
            <div>
              <h1 className="text-red-300 text-xl">{product.title}</h1>
              <h2>${product.price}</h2>
              <p>{product.description}</p>
            </div>
        }
      </div>
    </div>
  )
}

export default App
