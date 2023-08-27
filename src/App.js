import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './pages/products/Products';
import Users from './pages/users/Users';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
