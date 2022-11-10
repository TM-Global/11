import React from 'react';
import './Banner.css'
const Bannar = () => {
    return (
        <div className='banner_bg text-center'>
            <h1 className="md:text-7xl text-5xl sm:text-3xl text-center"> Dream PhotoGraphy </h1>
            <p className=' text-lime-50 text-xl my-3'>Life Is Beautifull If You Enjoy It....</p>
            <button className='text-center btn text-xl  text-lime-50 btn-success'>Hire Me !</button> 
        </div>
    );
};

export default Bannar;