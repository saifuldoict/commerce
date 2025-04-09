import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import FeatureStore from '../store/FeatureStore.js'
import LegalContent from '../components/Features/LegalContent.jsx';

const ComplainPage = () => {
  const {LegalDetailsRequest}=FeatureStore();
  useEffect(()=>{
      (async()=>{
        await LegalDetailsRequest("complain");
      })()
  },[])
  return (
    <Layout>
       <LegalContent/>
    </Layout>
  )
}

export default ComplainPage