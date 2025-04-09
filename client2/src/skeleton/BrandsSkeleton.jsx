import React from 'react'
import Skeleton from "react-loading-skeleton"
import Lottie from "lottie-react"
import ImagePlaceHolder from "../assets/images/image.json"
const BrandsSkeleton = () => {
  return (
    <div className='section'>
       <div className='container'>
          <div className='row'>
          <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
          <span className="bodySmall mb-5 text-center">Explore a World of Choices Across Our Most Popular <br />Shopping Categories </span>

          {
            Array.from({length:16}).map((_,i)=>{
              return(
                <div key={i} className='col-6 p-2 col-md-3 col-lg-3 col-sm-6'>
             <div className='card shadow-lg '>
                  <div className='card-body'>
                      <div className='row'>
                           <div className='col-4'>
                               <Lottie className='w-75' animationData={ImagePlaceHolder} loop={true}/> 
                           </div>
                           <div className='col-8'>
                               <Skeleton count={3} />
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
      
    </div>
  )
}

export default BrandsSkeleton