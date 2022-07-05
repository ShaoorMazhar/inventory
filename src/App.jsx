import AddStore from "./components/addStore";
import DenseAppBar from "./components/denseAppBar";
import AllStores from "./components/allStores";
import AddProduct from "./components/addProduct";
import AllProducts from "./components/allProducts";
import { Route, Routes } from "react-router-dom";
import StoreProducts from "./components/storeProducts";

function App() {
  return (
    <div>
      <DenseAppBar />

      <Routes>
        <Route path="/" element={<AllStores />} />
        <Route path="/stores/:id" element={<AddProduct />} />
        <Route path="allStores" element={<AddStore />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/storeProducts/:id" element={<StoreProducts />} />
      </Routes>
    </div>
  );
}

export default App;
