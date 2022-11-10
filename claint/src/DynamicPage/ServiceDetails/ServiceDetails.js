import React, { useContext, useState,useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import {myContxt} from '../../contextApi/AuthContext';
import moment from 'moment';
import './Servicedetails.css'
import ReviewCart from "../../SubComponent/ReviewCart/ReviewCart";
const ServiceDetails = () => {
 const [reviews, setreviews] = useState([])
 const {user} = useContext(myContxt)
 

  const service = useLoaderData();
  const { description, image, price, rating, service_name, _id } = service;
 
//   get user review 
  const submitReview = (event) =>{
    event.preventDefault()
    const form = event.target;
    const review = form.review.value
   const time = `${moment().format('Do MMM YY, h:mm')}`

    const userReview = {
        username : user?.displayName,
        review : review,
        userImg: user?.photoURL,
        service_name : service_name,
        time : time,
        email :  user?.email
    }
    console.log(userReview);


    fetch('https://assignment-server-mauve.vercel.app/userreview',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
    form.reset()
  }


  useEffect(() => {
    fetch(`https://assignment-server-mauve.vercel.app/userreview?service_name=${service_name}`)
    .then(res => res.json())
    .then(data => {
        setreviews(data)
    })
    .catch(err => console.log(err))

  }, [service_name,reviews])

  



  return (
    <div className="w-10/12 m-auto my-5">
      <div className="hero my-5 rounded-md shadow-md bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className="rounded-lg" src={image} alt="" />
          <div>
            <h1 className="text-5xl font-bold"> {service_name} </h1>
            <p className="py-6 text-xl">{description}</p>
            <div className="flex">
              <h1 className="text-5xl font-bold text-sky-700"> $ {price} </h1>
              <h1 className="text-5xl font-bold ml-20 flex text-amber-400">
                {" "}
                <AiTwotoneStar /> {rating}{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* send Review  */}
      <div className="review_section m-auto w-5/12">
        <h2 className="text-5xl text-center my-10">Send Your Review  </h2>
           {
           
           user?.email ?
          <>
           <form onSubmit={submitReview}>
             <div className="form_div">
            <input type="text" name = 'review' placeholder=" Enter Your Review Here " required />
            <button type="summit">Submit</button>
             </div>
            </form>
          </>
          :
          <>
          <div className="w-full text-center">
          <button className="btn text-center inline"> <Link to = '/Login'>LogIn Now For Send Review</Link> </button>
          </div>
          </>
            
        
        }
      </div>

      {/* cusotomer Reviw  */}
      <div className="customer_reviews my-10">
        <h2 className="text-3xl text-center"> User Reviews </h2>
      </div>
        <div className="grid md:grid-cols-3 gap-3">
       
       {
        reviews.map(review=> <ReviewCart  key = {review._id} reviewses ={review}></ReviewCart>)
       }
       
        
        </div>
    </div>

  );
};

export default ServiceDetails;
