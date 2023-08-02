import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TopBar from './components/TopBar';


function App() {
  return (
    <>
      <TopBar />







      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
