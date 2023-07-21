import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
