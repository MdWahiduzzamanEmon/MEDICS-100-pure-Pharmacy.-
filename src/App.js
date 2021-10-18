
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Routing from './Components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
 import { toast } from "react-toastify";
 toast.configure();
function App() {
  return (
    <div className="App">
      <AuthProvider>
       
        <Routing></Routing>
      </AuthProvider>
    </div>
  );
}

export default App;
