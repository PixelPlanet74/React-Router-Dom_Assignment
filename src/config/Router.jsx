import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import OrderList from '../pages/OrderList'
import OrderDetails from '../pages/OrderDetails'
import Customer from '../pages/Customer'
import Analytics from '../pages/Analytics'
import Reviews from '../pages/Reviews'
import Foods from '../pages/Foods'
import FoodDetails from '../pages/FoodDetails'
import CustomerDetails from '../pages/CustomerDetails'
import Calendar from '../pages/Calendar'
import Chat from '../pages/Chat'
import Wallet from '../pages/Wallet'


const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='orderlist' element={<OrderList />} />
        <Route path='orderdetails' element={<OrderDetails />} />
        <Route path='customer' element={<Customer />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='foods' element={<Foods />} />
        <Route path='fooddetails' element={<FoodDetails />} />
        <Route path='customerdetails' element={<CustomerDetails />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='chat' element={<Chat />} />
        <Route path='wallet' element={<Wallet />} />
        
    </Route>
))



const Router = () => {
  return (
    <>
        <RouterProvider router={router} />
    
    </>
  )
}

export default Router