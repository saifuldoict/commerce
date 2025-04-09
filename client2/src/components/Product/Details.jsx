import React, { useState } from "react";
import ProductImages from "./ProductImages.jsx"
import Review from "../Product/Review.jsx";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";
import WishStore from "../../store/WishStore.js";
import ProductStore from "../../store/ProductStore";
import WishSubmitButton from "../wish/WishSubmitButton.jsx";
import DetailsSkeleton from "../../skeleton/DetailsSkeleton.jsx";
import parse from "html-react-parser";
const Details = () => {
  const { Details } = ProductStore();
  const [quantity, SetQuantity] = useState(1);
  const {CartFormChange,CartForm,CartSaveRequest,CartListRequest}=CartStore()
  const {WishSaveRequest,WishListRequest}=WishStore();

  const IncreaseQuantity = () => {
    let newQuantity = quantity + 1;
    SetQuantity(newQuantity)};

  const DecreaseQuantity = () => {
    let newQuantity = quantity- 1;
    SetQuantity(newQuantity)
  };

  const AddWish = async (productID)=>{
    let res=await WishSaveRequest(productID);
    if(res){
      toast.success("Wish Item Added");
      await WishListRequest();
    }
  }
  const AddCart = async(productID)=>{
    let res= await CartSaveRequest(CartForm,productID,quantity);
    if(res){
      toast.success("Cart Item Added")
      await CartListRequest();
    }
  } 

  if (Details === null) {
    return <DetailsSkeleton />;
  } else 
  {
    return (
      <div className="section-top m-0 p-0 bg-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-7 p-3">
              <ProductImages />
            </div>
            <div className="col-md-5 p-3">
              <h4>{Details[0]["title"]}</h4>
              <p className="text-muted bodySmall my-1">
                Category:{Details[0]["category"]["categoryName"]}
              </p>
              <p className="text-muted bodySmall my-1">
                Brand:{Details[0]["brand"]["brandName"]}
              </p>
              <p className="bodySmall mb-2 mt-1 ">
                {Details[0]["shortDes"]}
              </p>

              {Details[0]["discount"] ? (
                <span className="bodyXLarger">
                  Price :<strike className="text-danger">
                    {Details[0]["price"]}</strike>{Details[0]["discountPrice"]}
                </span>) : (
                <span className="bodyXLarger">
                  Price:{Details[0]["price"]}
                </span>
              )}

              <div className="row">
                <div className="col-4 p-2">
                  <label className="bodySmall">Size</label>
                  <select value={CartForm.size} onChange={(e)=>{CartFormChange('size',e.target.value)}} className="form-control my-2 form-select">
                    <option value="">Size</option>
                    {
                       Details[0]["details"]["size"].split(",").map((item,i) => {
                          return <option key={i} value={item}>{item}</option>;
                       })
                    }
                  </select>
                  </div>
                  <div className="col-4 p-2">
                          <label className="bodySmall">Color</label>
                        <select value={CartForm.color} onChange={(e)=>{CartFormChange('color',e.target.value)}} className="form-control my-2 form-select">
                            <option value="">Color</option>
                            {
                            Details[0]["details"]["color"].split(",").map((item, i) => {
                                return <option key={i} value={item}>{item}</option>;
                              })}
                        </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmall">Quantity</label>
                  <div className="input-group my-2">
                    <button onClick={DecreaseQuantity}className="btn btn-outline-secondary">-</button>
                    <input
                      value={quantity}
                      type="text"
                      className="form-control bg-light text-center"
                      readOnly
                    ></input>
                    <button
                      onClick={IncreaseQuantity}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-4 p-2">
                <CartSubmitButton onClick={async ()=>{await AddCart(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Cart"/>
                </div>
                <div className="col-4 p-2">
                     <WishSubmitButton onClick={async ()=>{await AddWish(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Wish"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab"
                  data-bs-target="#Speci-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Speci-tab-pane"
                  aria-selected="true"
                >
                  Specifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Review-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Review-tab-pane"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active"id="Speci-tab-pane"role="tabpanel"aria-labelledby="Speci-tab"tabIndex="0">
                {parse(Details[0]["details"]["des"])}
              </div>
              <div className="tab-pane fade"
                id="Review-tab-pane"
                role="tabpanel"
                aria-labelledby="Review-tab"
                tabIndex="0">
                
                <Review/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
