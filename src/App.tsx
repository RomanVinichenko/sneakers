import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

export type ProductsType = {
  img: string;
  name: string;
  price: number;
};

function App() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartAccess, setCartAccess] = useState(false);

  useEffect(() => {
    fetch('https://60ec45cce9647b0017cde142.mockapi.io/Products')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const onAddToCart = () => {};

  return (
    <div className="wrapper clear">
      {cartAccess && <Drawer products={cartItems} onExit={() => setCartAccess(false)} />}
      <Header onOpenCart={() => setCartAccess(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="assets/search.svg" alt="search" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {products.map(({ img, name, price }, index) => (
            <Card
              key={index}
              name={name}
              price={price}
              img={img}
              onClickFavorite={() => console.log('Added to favorites')}
              onClickAdd={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
