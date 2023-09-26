import { useState } from "react";
import "./App.scss";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product_details/ProductDetails";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Products from "./pages/products/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApiData } from "./store/slice/productSlice";
import Cart from "./components/cart/Cart";
import Popup from "./components/popup/Popup";

function App() {
  const dispatch = useDispatch();

  // const products = useSelector((state) => state.products)
  const activeCart = useSelector((state) => state.states);
  const popup = useSelector((state) => state.states);
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        {activeCart.cart && <Cart />}
        <div>
        </div>
        <div className="main__body">
          <Outlet />
          {popup.cartAddedPopUp.active && <Popup />}
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <ProductDetails />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/products",
          element: <Products categories={'all'}/>,
        },
        {
          path: "/products/category/men",
          element: <Products categories = {`men's clothing`}/>,
        },
        {
          path: "/products/category/women",
          element: <Products categories = {`women's clothing`}/>,
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
