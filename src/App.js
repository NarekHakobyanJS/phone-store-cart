import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { CartPageContainer } from './pages/CartPage/CartPageContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/clientBag" element={<CartPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
