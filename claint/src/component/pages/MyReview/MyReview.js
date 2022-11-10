import React, { useContext, useEffect, useState } from 'react';
import {myContxt} from '../../../contextApi/AuthContext'
import useTitleHooks from '../../../Hooks/useTitleHooks';
import PersonalReview from '../../../SubComponent/PersonalReview/PersonalReview';

const MyReview = () => {
  useTitleHooks("My Review")
  const [myreviews, setmyreviews] = useState([])
  const {user,logOut} = useContext(myContxt)


  useEffect(() => {
    fetch(`https://assignment-server-mauve.vercel.app/myreviw?email=${user?.email}`,{
      headers : {
        authorization : `Bearar ${localStorage.getItem('myReviewToken')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
         logOut()
       }
      return res.json()
    })
    .then(data => {
      setmyreviews(data)
    })

  }, [user?.email,logOut])


const handleDelete = (myrvw) =>{

      fetch(`https://assignment-server-mauve.vercel.app/userreview/${myrvw._id}`,{
          method : 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
              const remaining = myreviews.filter(usr => usr._id !== myrvw._id)
              setmyreviews(remaining)
      })
}



    return (
        <div className="overflow-x-auto w-11/12 sm:w-11/12 md:w-8/12 m-auto my-5">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>service Name</th> 
        <th>Review Message</th>
        <th>Time</th>
        <th>Delete</th>
        <th>Edite</th>
      </tr>
    </thead>
    <tbody>
      {
        myreviews.map(myrvw => <PersonalReview handleDelete = {handleDelete} myrvw = {myrvw}  key = {myrvw._id}></PersonalReview> )
      }
    </tbody>
  </table>
</div>
    );
};

export default MyReview;