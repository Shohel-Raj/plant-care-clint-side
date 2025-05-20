import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Component/Error";
import LoginSignIn from "../Pages/LoginSignIn";
import SignIn from "../Component/LoginSignIn/SignIn";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import AllPlants from "../Pages/AllPlants";
import PrivateRoute from "../Component/PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/AllPlant",
            Component:AllPlants
        },
        {
            path:"/loginSignInPage",
            Component:LoginSignIn
        },
        {
            path:"/signIn",
            Component:SignIn
        },
        {
            path:"/addPlant",
            element:<PrivateRoute>
              <AddPlants></AddPlants>
            </PrivateRoute>
        },
        {
            path:"/myPlant",
            element:<PrivateRoute>
              <MyPlants></MyPlants>
            </PrivateRoute>
        }
      ]
    },

  ]);


  export default router;