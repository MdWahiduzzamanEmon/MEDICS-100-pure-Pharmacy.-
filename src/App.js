
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Routing from './Components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
import { toast } from "react-toastify";
import "aos/dist/aos.css"; 
import AddtoCart from './Context/AddtoCart';

 toast.configure();
function App() {
  return (
    <div className="App">
      {/* context  */}
      <AuthProvider>
        <AddtoCart>
          {/* route */}
          <Routing></Routing>
        </AddtoCart>
      </AuthProvider>
    </div>
  );
}

export default App;
