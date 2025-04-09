import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import FeatureStore from '../store/FeatureStore.js'
import LegalContent from '../components/Features/LegalContent.jsx';

const TermsPage = () => {
  const{LegalDetailsRequest}=FeatureStore();
  useEffect(()=>{
    (async()=>{
      await LegalDetailsRequest("terms");
    })()
  },[])
  return (
    <Layout>
       <LegalContent/>
    </Layout>
  )
}

export default TermsPage