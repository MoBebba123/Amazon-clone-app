import React, { useEffect } from 'react'
import {headerItems} from "../../utils/ProductsData"
import Banner1 from "../../BannerImages/Banner1.jpg"
import Banner2 from "../../BannerImages/Banner2.jpg"
import Banner3 from "../../BannerImages/Banner3.jpg"
import Banner4 from "../../BannerImages/Banner4.jpg"
import Banner5 from "../../BannerImages/Banner5.jpg"
import Banner6 from "../../BannerImages/Banner6.jpg"
import Slider from "../../components/Slider/Slider"
import Product from '../../components/Product/Product'
import MessageBox from '../../components/MessageBox'
import LoadingBox from '../../components/LoadingBox'
import"./Home.css"
import "../../index.css"
import { useSelector,useDispatch } from 'react-redux'
import { listProducts } from '../../actions/productAction'

const Home = () => {
const dispatch = useDispatch();
  // to fetch data (products) from the backend  
 const productList = useSelector((state)=> state.productList);
 const {loading,error, products} = productList;
    useEffect(() => {
      dispatch(listProducts());
      }, [dispatch]);
    const bannerImages =[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6];
    return (
        <div >
         <div className="item-container" >
        {headerItems && headerItems.map((item) => <p>{item}</p>)}
         </div>
         <div className="home">
             <div className="home-container">
                 <Slider images={bannerImages} />
                 {loading ? (
        <LoadingBox></LoadingBox>
             ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
             ) : (
               <div className="P">
        <div className="row center">

          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        </div>
      )}

             </div>
         </div>


        </div>
    )
}

export default Home
