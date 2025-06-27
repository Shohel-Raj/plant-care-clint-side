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
import MyBlog from "../Pages/MyBlog";
import BlogDetails from "../Component/DetaillsCard/BlogDetails";
import AboutUs from "../Pages/About";
import Contact from "../Pages/Contact";
import QAPage from "../Pages/QAPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import AllPlantsDashboard from "../Pages/AllPlantsDashboard";
import PlantDetails from "../Pages/PlantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://update-plant-care.vercel.app/latestPlant'),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'about',
        Component: AboutUs
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: 'q&a',
        Component: QAPage
      },
      {
        path: 'blog',
        Component: MyBlog,
        loader: () => fetch('https://update-plant-care.vercel.app/blogs'),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'viewBlogDetails/:id',
        Component: BlogDetails,
        loader: ({ params }) => fetch(`https://update-plant-care.vercel.app/blog/${params.id}`),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'viewdetails/:id',
        element: <PrivateRoute><ViewDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://update-plant-care.vercel.app/plant/${params.id}`),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'AllPlant',
        element:<AllPlants />,
        loader: () => fetch('https://update-plant-care.vercel.app/allPlant'),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'loginSignInPage',
        Component: LoginSignIn
      },
      {
        path: 'signIn',
        Component: SignIn
      },
      
    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        index:true,
        Component:DashboardHome
      },
      
      
      {
        path: 'viewUpdate/:id',
        element: <PrivateRoute><UpdatePlant /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://update-plant-care.vercel.app/plant/${params.id}`),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'AllPlant',
        element: <PrivateRoute><AllPlantsDashboard /></PrivateRoute>,
        loader: () => fetch('https://update-plant-care.vercel.app/allPlant'),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'addPlant',
        element: <PrivateRoute><AddPlants /></PrivateRoute>
      },
      {
        path: 'myPlant',
        element: <PrivateRoute><MyPlants /></PrivateRoute>
      },
      {
        path: 'viewdetails/:id',
        element: <PrivateRoute><PlantDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://update-plant-care.vercel.app/plant/${params.id}`),
        hydrateFallbackElement: <Loader />
      },
    ]
  }
]);



export default router;