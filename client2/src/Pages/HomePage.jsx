import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import Slider from '../components/Product/Slider.jsx'
import Brands from '../components/Product/Brands.jsx';
import Features from '../components/Features/Features.jsx'
import Categories from"../components/Product/Categories.jsx";
import Products from '../components/Product/Products.jsx';
import ProductStore from '../store/ProductStore.js';
import FeatureStore from '../store/FeatureStore.js';

const HomePage = () => {
 
  const{SliderListRequest,CategoryListRequest,BrandListRequest, ListByRemarkRequest}=ProductStore();
  const {FeatureListRequest}=FeatureStore();

  useEffect(()=>{
    (async()=>{
        await SliderListRequest();
        await FeatureListRequest();
        await CategoryListRequest();
        await BrandListRequest();
        await ListByRemarkRequest("new");
    })()
  },[]);

  return (
    <Layout>
       <Slider/>
       <Features/>
       <Categories/>
       <Products/>
       <Brands/>
    </Layout>
  )
}

export default HomePage;