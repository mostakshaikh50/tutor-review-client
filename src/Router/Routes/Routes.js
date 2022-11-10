import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Update from "../../Pages/Home/Services/Update/Update";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/allservices',
            element: <AllServices></AllServices>
        },
        {
            path: '/serviceDetails/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/reviews',
            element: <PrivateRoute><Review></Review></PrivateRoute>
        },
        {
            path: '/addservice',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/update/:id',
            element: <Update></Update>,
            loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
        },
        
      ]
    }
  ])

  export default router;