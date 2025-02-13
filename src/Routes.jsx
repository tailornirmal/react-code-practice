import Home from "./components/Home/Home";
import Lazyloading from "./components/LazyLoading/Lazyloading";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Component from "./React/Hooks";
import Modal from "./components/Form/Modal";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lazyload" element={<Lazyloading />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/react" element={<Component />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="*" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
