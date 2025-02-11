import Navbar from "./components/Navbar/Navbar";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <RoutesComponent />
      <Footer />
    </div>
  );
};

export default App;
