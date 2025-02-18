import Home from "./components/Home/Home";
import Lazyloading from "./components/LazyLoading/Lazyloading";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Component from "./React/Hooks";
import Modal from "./components/Form/Modal";
import Registration from "./components/Form/Registration/Registration";
// import Login from "./components/Form/Login/Login";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lazyload" element={<Lazyloading />} />
        <Route path="/form" element={<Form />} />
        <Route path="/react" element={<Component />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/register" element={<Registration />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
