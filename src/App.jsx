import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorElement from "./components/layout/404 element/ErrorElement";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Contact />,
      },
      {
        path: "/login",
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
