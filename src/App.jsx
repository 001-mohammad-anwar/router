
import './App.css'
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home'
import Navbar from './component/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/></>
  },
  {
    path: "/About",
    element: <><Navbar/><About/></>
  },
  {
    path: "/Contact",
    element:<> <Navbar/><Contact/></>
  },
]);

function App() {
 

  return (
    <>
     
     <RouterProvider router={router}/>
    </>
  )
}

export default App
