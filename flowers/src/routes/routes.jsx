import { createBrowserRouter } from "react-router-dom";
import Navbar from '../contents/navbar'
import Home from "../pages/home";
import Agregar from '../pages/agregar'

export const routes = createBrowserRouter ([
    {
        path: '',
        element:<Navbar/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/agregar',
                element: <Agregar/>
            },
        ],
    },
]);


