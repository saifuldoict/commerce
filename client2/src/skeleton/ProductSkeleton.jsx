import React from 'react'
import Skeleton from "react-loading-skeleton"
import Lottie from "lottie-react"
import ImagePlaceHolder from "../assets/images/image.json"
const ProductSkeleton = () => {
  return (
    <div className='container-section'>
      <div className='row'>
          {
            Array.from({length:8}).map((_,i)=>{
              return(
                <div key={i} className='col-6 p-2 col-md-3 col-lg-3 col-sm-6'>
             <div className='card shadow-sm'>
                  <div className='card-body'>
                      <div className='row'>
                           <div className='col-4'>
                               <Lottie className='w-75' animationData={ImagePlaceHolder} loop={true}/> 
                           </div>
                           <div className='col-8'>
                               <Skeleton  count={3} />
                           </div>
                      </div>
                  </div>
             </div>
          </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default ProductSkeleton