import logo from "./img/cisa.png";
import "./App.css";
//import CompShowsBlogs from './blog/ShowBlogs';

import Getproducts from "./products/product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CompShowsBlogs></CompShowsBlogs> */}
      </header>

      <Getproducts />
    </div>
  );
}

export default App;
