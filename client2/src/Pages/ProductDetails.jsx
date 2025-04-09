import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import Details from '../components/Product/Details';
import Brands from '../components/Product/Brands';
import ProductStore from '../store/ProductStore';

const ProductDetails = () => {
  const{BrandList, DetailsRequest,ReviewListRequest,BrandListRequest}=ProductStore();
  const {id}=useParams();

useEffect(()=>{
  (async()=>{
    await DetailsRequest(id);
    await ReviewListRequest(id);
    BrandList===null? await BrandListRequest():null;
  })()
},[])

  return (
    <Layout>
      <Details/>
      <Brands/>
    </Layout>
  )
}

export default ProductDetails