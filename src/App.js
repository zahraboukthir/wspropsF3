import {prods}from './data'
import './App.css';
import ProductList from './Components/LprodCards/ProductList';
import TableProds from './Components/LprodsTable/TableProds';
import Footerapp from './Components/Footerapp';

function App() {
  const alertName = (name) => { 
    alert(name)
   }
  return (
    <div className="App">
     <ProductList produits={prods} />
     <TableProds produits={prods} fct={alertName} />
     <Footerapp title="wsProps">
<h1>Copy Right F1</h1>
<img src="logo192.png" alt="" />
     </Footerapp>
    </div>
  );
}

export default App;
