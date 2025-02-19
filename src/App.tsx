import Navbar from "./components/Navbar/Navbar";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer/Footer";
import { UseContextHook } from "./React/Hooks/useContext";

const App = () => {
  return (
    <div className="app">
      <UseContextHook>
        <Navbar />
      </UseContextHook>
      <RoutesComponent />
      <Footer />
    </div>
  );
};

export default App;
