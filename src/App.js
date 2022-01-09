import './App.css';
import shoppingImg from './assets/shopping.jpg';
import manImg from './assets/man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <img src = { shoppingImg } width="200px" alt="shopping" />
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src= { manImg } width="200px" alt="man" />
      </div>
    </div>
  );
}

export default App;
