import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Cart from "@/pages/cart";
import Login from "@/pages/login";
import ProductDetail from "./pages/product-detail";
import Product from "./pages/products.jsx";
import SignUp from "./pages/signup";
import Beauty from "./pages/beauty";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Payment from "@/pages/checkout-payment";
import Checkout from "@/pages/checkout-address";
import HomeLive from "./pages/home-living";
import Women from "./pages/women";
import Men from "@/pages/men";
import Kids from "./pages/kids";
import Studio from "./pages/studio";
import Order from "./pages/orders";
import WhishList from "./pages/wishlist";
import Profile from "./pages/profile";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/homelive" element={<HomeLive />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/studio" element={<Studio />}></Route>
        <Route path="/whishlist" element={<WhishList />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/productdetail" element={<ProductDetail />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
