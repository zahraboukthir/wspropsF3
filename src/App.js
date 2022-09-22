import {prods}from './data'
import './App.css';
import ProductList from './Components/LprodCards/ProductList';

function App() {
  return (
    <div className="App">
     <ProductList produits={prods} />
    </div>
  );
}

export default App;
