import React from 'react'
import "./ContactUsStyles.css"
import AboutUs from './AboutUs';
import ContactUsForm from './ContactUsForm';

const ParentContactUs = () => 
(
     <div className='col-md-12 contact-us-container'>
        <div className='col-md-8 p-5 text-justify'>
            <AboutUs />
        </div>
        <div className='col-md-4 p-5'>
            <ContactUsForm />
        </div>
    </div>
)
export default ParentContactUs
