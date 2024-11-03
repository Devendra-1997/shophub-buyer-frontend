import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorElement from "./components/layout/ErrorElement";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
