import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import ProductList from '../components/Product/ProductList.jsx';
import ProductStore from '../store/ProductStore.js';

const ProductByKeyword = () => {
  const{ListByKeywordRequest}=ProductStore();
  const {keyword}=useParams();

  useEffect(()=>{
    (async()=>{
      await ListByKeywordRequest(keyword)
    })()

  },[keyword])

  return (
    <Layout>
      <ProductList/>
    </Layout>
  )
}

export default ProductByKeyword;