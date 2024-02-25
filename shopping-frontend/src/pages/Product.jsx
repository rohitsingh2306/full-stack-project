import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/breadcrums/Breadcrums'
import ProductDisplay from '../components/product-display/ProductDisplay'
import { ShopContext } from '../context/ShopContext'
import DescriptionBox from '../components/descriptionbox/DescriptionBox'
const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products?.find((item,index)=>item.id=== Number(productId))
  return (
    <div>
       <Breadcrums product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox />
    </div>
  )
}

export default Product