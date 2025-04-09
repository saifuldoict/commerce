import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import FeatureStore from '../store/FeatureStore.js'
import LegalContent from '../components/Features/LegalContent.jsx'


const RefundPage = () => {
  const {LegalDetailsReques}=FeatureStore();

  useEffect(()=>{
    (async()=>{
      await LegalDetailsReques();
     
    })()
  },[])
  return (
    <Layout>
      <LegalContent/>
    </Layout>
  )
}

export default RefundPage