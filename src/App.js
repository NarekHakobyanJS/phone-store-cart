import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { CartPageContainer } from './pages/CartPage/CartPageContainer';
import MobilePageContainer from './pages/MobilePage/MobilePageContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/clientBag" element={<CartPageContainer />} />
        <Route path="/mobilePage" element={<MobilePageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
