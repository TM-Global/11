import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitleHooks from '../../../Hooks/useTitleHooks';
import ServiceCard from '../../../SubComponent/ServiceCard/ServiceCard'

const Services = () => {
    const allservices = useLoaderData()
    useTitleHooks('Services')
    return (
        <div className='w-10/12 grid md:grid-cols-3  my-10 gap-3 m-auto'>
            {
                allservices.map(service=> <ServiceCard kye = {service._id} service ={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;