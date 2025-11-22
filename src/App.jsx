import { Routes, Route, useLocation } from "react-router-dom";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

import ParentComponent from "./pages/CounterApp/ParentComponent";

const routes = ["/", "/collection"];

function App() {
  const location = useLocation();

  return (
    <>
      {routes.includes(location.pathname) && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Collection />} />
        <Route path="/counter" element={<ParentComponent />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
