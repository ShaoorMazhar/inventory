import AddStore from "./components/addStore";
import DenseAppBar from "./components/denseAppBar";
import AddProduct from "./components/addProduct";
import AllProducts from "./components/allProducts";
import { Route, Routes } from "react-router-dom";
import StoreProducts from "./components/storeProducts";
import ErrorBoundry from "./errorBoundry/errorBoundry";
import Stores from "./components/stores";
import Home from "./components/home";
import ErrorPage from "./components/errorPage";

function App() {
  return (
    <div>
      <ErrorBoundry>
        <DenseAppBar />
      </ErrorBoundry>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores/:id" element={<AddProduct />} />
        <Route path="allStores" element={<AddStore />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="table/storeProducts/:id" element={<StoreProducts />} />
        <Route path="/table" element={<Stores />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
