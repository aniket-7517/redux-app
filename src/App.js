import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Counter from './Counter';
import Login from './Login';
import Profile from './Profile';
import Quotes from './Quotes';
import Posts from './Posts';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/quote' element={<Quotes/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
