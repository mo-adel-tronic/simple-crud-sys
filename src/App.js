import Navbar from "./components/navbar/Navbar";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import { Route, Routes } from "react-router-dom";
import ProductShow from "./components/products/ProductShow";
import ProductDetails from "./components/products/ProductDetails";
import ProductForm from "./components/products/ProductForm";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Layout tab="home" />} />
          <Route path="about" element={<About />} />
          <Route path="products/" element={<Layout tab="products" />}>
            <Route index element={<ProductShow />} />
            <Route path="add" element={<ProductForm />} />
            <Route path=":productId" element={<ProductDetails />} />
            <Route path="edit/:productId" element={<ProductForm />} />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
