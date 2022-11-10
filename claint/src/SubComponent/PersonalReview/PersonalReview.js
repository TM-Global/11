import React from "react";
import { Link } from "react-router-dom";

const PersonalReview = ({myrvw,handleDelete}) => {
    const {review,service_name,time,_id} = myrvw

  return (
    <tr>
      <td>{service_name}</td>
      <td>{review}</td>
      <td>{time}</td>
      <td> <button className="btn btn-info" onClick={()=>handleDelete(myrvw)}>Delete</button> </td>
      <td> <Link to = {`/edite/${_id}`}><button className="btn btn-info">Edite</button></Link></td>
    </tr>
  );
};

export default PersonalReview;
