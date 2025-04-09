import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout.jsx'
import LegalContent from '../components/Features/LegalContent.jsx'
import FeatureStore from '../store/FeatureStore.js'

const AboutPage = () => {
  const {LegalDetailsRequest}=FeatureStore();
 
  useEffect(() => {
    (async ()=>{
        await LegalDetailsRequest("about")
    })()
}, []);
  return (
    <Layout>
      <LegalContent/>
    </Layout>
  )
}
export default AboutPage