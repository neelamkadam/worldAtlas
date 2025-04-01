import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Country from './Pages/Country';
import Contact from './Pages/Contact';
import AppLayout from './Componants/Layouts/AppLayout';
import ErrorPage from './Pages/ErrorPage';
import CountryDetails from './Componants/Layouts/CountryDetails';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/country",
        element:<Country/>
      },
      {
        path:"country/:id",   //dynamic root
        element:<CountryDetails/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ],
    
  }
 
]);
function App() {
  return < RouterProvider router={router}/>
}

export default App
