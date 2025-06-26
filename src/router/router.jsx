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
import ViewDetails from "../Pages/ViewDetails";
import Loader from "../Component/Loader/LOader";
import UpdatePlant from "../Pages/UpdatePlant";

const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            Component:Home,
            loader:()=>fetch('http://localhost:3000/latestPlant'),
            hydrateFallbackElement:<Loader></Loader>
        },
        {
            path:"/AllPlant",
            element:<PrivateRoute>
              <AllPlants></AllPlants>
            </PrivateRoute>,
            loader:()=>fetch('http://localhost:3000/allPlant'),
            hydrateFallbackElement:<Loader></Loader>
        },
        {
            path:"/viewdetails/:id",
            element:<PrivateRoute>
              <ViewDetails></ViewDetails>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/plant/${params.id}`),
            hydrateFallbackElement:<Loader></Loader>
        },
        {
            path:"/viewUpdate/:id",
            element:<PrivateRoute>
              <UpdatePlant></UpdatePlant>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/plant/${params.id}`),
            hydrateFallbackElement:<Loader></Loader>
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