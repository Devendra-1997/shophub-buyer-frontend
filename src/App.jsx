import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ErrorElement from "./components/layout/ErrorElement";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import ProductLanding from "./pages/ProductLanding";
import Profile from "./pages/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/product/:_id",
        element: <ProductLanding />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto  min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
