
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Category from "./pages/Category";
import Substitutes from './pages/Substitutes';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='app-container'>
      <header><Navbar /></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conversor/:category" element={<Category />} />
          <Route path="/sustitutos" element={<Substitutes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
