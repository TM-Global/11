import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitleHooks from '../../../Hooks/useTitleHooks';
import Bannar from '../../../SubComponent/Bannar/Bannar';
import ServiceCard from '../../../SubComponent/ServiceCard/ServiceCard'


const Home = () => {
   const services = useLoaderData()
    useTitleHooks('Home')
    return (
        <div>
            <Bannar></Bannar>
            
           <div className="services_card w-10/12 grid md:grid-cols-3  my-10 gap-3 m-auto">
            {
                services.map(service=> <ServiceCard kye = {service._id} service ={service}></ServiceCard>)
            }
           </div>
          <div className='w-40 m-auto mb-5'><Link to = '/Services' className='btn btn-success text-lime-50 w-full'>See All</Link></div>

        </div>
    );
};

export default Home;