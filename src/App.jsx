import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Products from "./components/Products";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Cards />} />

        <Route
          path="/product/category/:categoryName/:categoryId"
          element={<Card />}
        />
        <Route
          path="/product/:categoryName/:productId"
          element={<Products />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
