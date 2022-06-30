import "./App.css";
import AddStore from "./components/AddStore";
import DenseAppBar from "./components/DenseAppBar";
import AddProduct from "./components/AddProduct";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <DenseAppBar />

      <Routes>
        <Route path="/" element={<AddStore />} />
        <Route path="stores" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
