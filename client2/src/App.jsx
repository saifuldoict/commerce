

import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import ProductByBrand from './Pages/ProductByBrand.jsx'
import ProductByCategory from './Pages/ProductByCategory.jsx'
import ProductByKeyword from './Pages/ProductByKeyword.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import RefundPage from './Pages/RefundPage.jsx'
import PrivacyPage from './Pages/PrivacyPage.jsx'
import TermsPage from './Pages/TermsPage.jsx'
import HowToBuyPage from './Pages/HowToBuyPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import ComplainPage from './Pages/ComplainPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import OtpPage from './Pages/OtpPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import WishPage from './Pages/WishPage.jsx'
import CartPage from './Pages/CartPage.jsx'
import OrderPage from './Pages/OrderPage.jsx'
import InvoicePage from './Pages/InvoicePage.jsx'

function ScrollToTopOnNavigation(){
  const{pathname}= useLocation();
  useEffect(()=>{
    const scroll =()=>{
      window.scrollTo(0,0);
    };
    requestAnimationFrame(scroll);
  }, [pathname]);
  return null;
}
const App = () => {
  return (
    <BrowserRouter>
       <ScrollToTopOnNavigation/>
         
       <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/by-brand/:id" element={<ProductByBrand/>}></Route>
            <Route path="/by-category/:id" element={<ProductByCategory/>}></Route>
            <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}></Route>
            <Route path="/details/:id" element={<ProductDetails/>}></Route>

            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/refund" element={<RefundPage/>}></Route>
            <Route path="/privacy" element={<PrivacyPage/>}></Route>
            <Route path="/terms" element={<TermsPage/>}></Route>
            <Route path="/howToBuy" element={<HowToBuyPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/complain" element={<ComplainPage/>}></Route>
            
            <Route path="/profile" element={<ProfilePage/>}></Route>
            <Route path="/otp" element={<OtpPage/>}></Route>
            <Route path="/wish" element={<WishPage/>}/>
            <Route path="/orders" element={<OrderPage/>}/>
            <Route path="/invoice/:id" element={<InvoicePage/>}/> 
            <Route path="/cart" element={<CartPage/>}/>

            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
