import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
