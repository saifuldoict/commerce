import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import FeatureStore from '../store/FeatureStore.js'
import LegalContent from '../components/Features/LegalContent.jsx';

const HowToBuyPage = () => {
  const {LegalDetailsRequest}=FeatureStore();
  useEffect(()=>{
    (async()=>{
      await LegalDetailsRequest("howtobuy");
    })()
  },[])
  return (
    <Layout>
      <LegalContent/>
    </Layout>
  )
}

export default HowToBuyPage;