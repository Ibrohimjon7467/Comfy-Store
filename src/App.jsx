// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages and layoutes
import {
  About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: singleProductLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;