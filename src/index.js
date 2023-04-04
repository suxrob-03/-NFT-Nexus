import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Wrapper from './Components/Wrapper/Wrapper';
import Buy from "./Components/Buy/Buy"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Wrapper/>  
        
        },
        {
          path:"/buy",
          element:<Buy/>  
        
        }
        
      ]

    }
  ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

