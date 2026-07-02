import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import LandingLayout from './landing_page/LandingLayout';
import Home from './dashboard/Home';
import Orders from './dashboard/Orders';
import TopBar from './dashboard/TopBar';
import Holdings from './dashboard/Holdings';
import Positions from './dashboard/Positions';
import Funds from './dashboard/Funds';
import Apps from './dashboard/Apps';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
         <Route  element={<LandingLayout />} >       
        <Route path='/' element={< HomePage />}></Route> 
        <Route path='/signup' element={< SignUp />}></Route>
        <Route path='/about' element={< AboutPage />}></Route>
        <Route path='/product' element={< ProductPage />}></Route>
        <Route path='/pricing' element={< PricingPage />}></Route>
        <Route path='/support' element={< SupportPage />}></Route>
        </Route>
        
        <Route path="/dashboard" element={<Home />}>

        <Route index element={<Orders />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
        <Route path="apps" element={<Apps />} />

    </Route>
    <Route path='*' element={< NotFound />}></Route>
    </Routes>

       
        </BrowserRouter>
);


