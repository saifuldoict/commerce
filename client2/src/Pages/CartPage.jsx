import React from 'react'
import Layout from '../components/Layout/Layout.jsx'
import CartList from '../components/Cart/CartList.jsx'
import Categories from '../components/Product/Categories.jsx'

const CartPage = () => {
  return (
    <Layout>
      <CartList/>
      <Categories/>
    </Layout>
  )
}

export default CartPage