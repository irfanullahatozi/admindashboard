import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Layout from './pages/layout/Layout';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='users' element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
