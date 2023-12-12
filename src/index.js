import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,

children:[
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]

 }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

