import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import User from "./pages/User";


import Admin from "./pages/Admin";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/User", element: <User /> },
      { path: "/Admin", element: <Admin /> },
     {path:"/Owner",element: <Owner/>}
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
