import React from 'react';

const ReviewCart = ({reviewses}) => {
    const {username,review,userImg,time} = reviewses
    return (
        <div className="reviewCart w-10/2">
        {
            userImg ?
            <img className="user_img" src= {userImg} alt="" />
            :
            <img className="user_img" src= "https://cdn.pixabay.com/photo/2017/05/13/09/04/question-mark-2309040_960_720.jpg" alt="" />
        }
       <div className="flex justify-between mb-2">
       <p className="name"> {username} </p>
         <p className="date"> {time} </p>
       </div>
        <p className="reviewtext"> {review} </p>
       
      </div>
    );
};

export default ReviewCart;