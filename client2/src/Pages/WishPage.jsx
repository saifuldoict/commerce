import React from 'react'
import Layout from '../components/Layout/Layout.jsx'
import WishList from '../components/Wish/WishList.jsx'
import Brands from '../components/Product/Brands.jsx'

const WishPage = () => {
  return (
    <Layout>
       <WishList/>
       <Brands/>
    </Layout>
  )
}

export default WishPage;