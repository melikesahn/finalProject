import { createBrowserRouter, createRoutes, useRoutes } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../../components/About";
import Blog from "../../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBooks from "../dashboard/UploadBooks";
import Dashboard from "../dashboard/Dashboard";
import Managebooks from "../dashboard/Managebooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path:'/', 
        element: <Home/>
      },
      {
        path:'/shop', 
        element: <Shop/>
      },
     {
        path:'/about',
        element:<About/>
     },
     {
        path:'/blog', 
        element: <Blog/>
      },
      {
        path:"/book/:id", 
        element: <SingleBook/>
      }
    ]
  },
  {
    path:"/admin/dashboard",
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        path:"/admin/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path:"/admin/dashboard/upload",
        element:<UploadBooks/>
      },
      {
        path:"/admin/dashboard/manage",
        element:<Managebooks/>
      },
      {
        path:"/admin/dashboard/edit-books/:id",
        element:<EditBooks/>,
        loader:({params})=> fetch(`http://localhost:5000/books/${params.id}`)
      }
    ]
  },
  {
    path:"sign-up",
    element:<Signup/>
  },
  {
    path:"login",
    element:<Login/>
  }
  
]);

export default router;

