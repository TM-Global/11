import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditeReview = () => {
    const edit = useLoaderData()
    const [reviewedit, setreviewedit] = useState(edit)

    const handleEdite = event =>{
        event.preventDefault()
        fetch(`https://assignment-server-mauve.vercel.app/userreview/${edit._id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(reviewedit)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        console.log(reviewedit);
       
    }

    const handleUpdate = event =>{
        const field = event.target.name;
        const value = event.target.value
        const newReview = {...reviewedit}
        newReview[field] = value
        setreviewedit(newReview)
        

    }


    console.log(edit)
    return (
        <form onSubmit={handleEdite} className='md:w-6-12 lg:w-6/12 m-auto'>
            <h2 className='text-4xl my-4'> Edite {edit.service_name} Review </h2>
            <textarea onChange={handleUpdate}
              name="review"
              id=""
              cols="10"
              style={{
                border: "2px solid #ccc",
                padding: "10px",
                outline: "none",
                borderRadius: "10px",
              }}
               defaultValue = {edit.review}
              rows="5"
              className='w-full'
            ></textarea>
            <button>Update Review </button>

        </form>
    );
};

export default EditeReview;