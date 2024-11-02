import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorElement from "./components/layout/404 element/ErrorElement";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

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
      <main className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8 py-6 min-h-[80vh]">
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