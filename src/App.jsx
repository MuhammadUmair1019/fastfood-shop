import { Routes, Route, useLocation } from "react-router-dom";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

const routes = ["/", "/collection"];

function App() {
  const location = useLocation();

  return (
    <>
      {routes.includes(location.pathname) && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Collection />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Collection /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
