import React, { useEffect } from 'react'
import FeatureStore from '../store/FeatureStore.js'
import Layout from '../components/Layout/Layout.jsx';
import LegalContent from '../components/Features/LegalContent.jsx';

const PrivacyPage = () => {
  const {LegalDetailsRequest}=FeatureStore();
  useEffect(()=>{
     (async()=>{
      await LegalDetailsRequest("privacy")
     })()
  },[])
  return (
    <Layout>
      <LegalContent/>
    </Layout>
  )
}

export default PrivacyPage