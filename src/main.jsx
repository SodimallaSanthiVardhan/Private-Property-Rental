import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/HOme.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'
import Houses from './Component/Houses/Houses.jsx'
import Rooms from './Component/Rooms/Rooms.jsx'
import Farmhouses from './Component/Farmhouses/Farmhouses.jsx'
import Listing from './Component/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contact from './Component/Contactus/Contact.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Houses' element={<Houses/>}/>
    <Route path='Rooms' element={<Rooms/>}/>
    <Route path='Farmhouses' element={<Farmhouses/>}/>
    <Route path='Listing' element={<Listing/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
    <RouterProvider router ={router}/>
    </Usercontext>
  </StrictMode>,
)
