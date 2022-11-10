import React from "react";
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
  const { description, image, price, rating, service_name, _id } = service;
  let shorDescirption = description.slice(0,100)

  

  return (

    <PhotoProvider>
     
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-80">
  <PhotoView src= {image}> 
  <img src={image} className="h-full w-11/12 rounded-xl" alt="Shoes" />
   </PhotoView>
    
  </figure>
  <div className="card-body">
    <div className="flex justify-between">
      {" "}
      <h2 className="card-title text-2xl text-purple-900 font-bold">{service_name}</h2>
      <h2 className="text-2xl font-bold text-yellow-500"> ${price} </h2>
    </div>
    <p> {shorDescirption}... </p>
    <div className="card-actions flex justify-between items-center">  
      <Link to = {`/services/${_id}`} className="btn btn-outline btn-success">View Details <AiOutlineArrowRight className="ml-3"/> </Link>
      <div className="flex items-center text-lime-400"> <AiTwotoneStar className="mr-1" /> {rating} </div>
    </div>
  </div>
</div>
       </div>
    
    </PhotoProvider>

    
  );
};

export default ServiceCard;



