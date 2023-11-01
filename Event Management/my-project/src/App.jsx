import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AboutUs from "./Components/AboutUs";
import Details from "./Components/Services/Details";
import AuthContext from "./Components/AuthContext/AuthContext";
import PrivateRouter from "./Components/PrivateRout/PrivateRouter";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Events from "./Components/Events/Events";
import Blogs from "./Components/Blogs/Blogs";
import DetailsBlog from "./Components/Blogs/DetailsBlog";
import AnimatedRoute from "./Components/AnimatedRoute";
import ScrollToTop from "./Components/ScrollToTop";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import Cart from "./Components/MyCart/Cart";
function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [])


  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      errorElement : <Error />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <AboutUs />
        },
        {
          path : "/services",
          element : <Services />
        },
        {
          path : "/details/:title",
          element : <PrivateRouter><Details></Details></PrivateRouter>,
          loader : ({params}) => fetch(`http://localhost:5000/events/${params.title}`)
        },
        {
          path : "/event",
          element : <PrivateRouter><Events /></PrivateRouter>
        },

        {
            path : "/blogs",
            element : <PrivateRouter><Blogs /></PrivateRouter>
        },
        {
          path : "/blog/details/:id",
          element : <PrivateRouter><DetailsBlog /></PrivateRouter>,
          loader : () => fetch("/blog.json")
        },


        {
          path : "/contact",
          element : <Contact />
        },
        {
          path : "/login",
          element : <Login />
        },
        {
          path : "/register",
          element : <Registration />
        },
        {
          path : "/shoppingCart",
          element :<PrivateRouter><Cart /></PrivateRouter>
        }
      ]
    }
  ])
  

  return loading ? <div className='h-[100vh] bg-slate-900 flex justify-center items-center'><HashLoader color="#1E88E5" /></div> :  (
    
    <AuthContext>
      
      
      <RouterProvider router={router}></RouterProvider>
     
     
      
    </AuthContext>
  )
}

export default App
