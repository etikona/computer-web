import React from 'react';

const Contact = () => {
    return (
        <section className='bg-base-100 mt-10'>
              <h3 className='text-3xl mb-2 mt-2 text-primary font-bold'>Get in touch.</h3>
         <p className='text-accent'> We love to here from you.Our friendly team is always here to chat </p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
             <div className='mb-5'>
                 <h4 className='text-xl text-primary'>Chat to us</h4>
                 <p>Our friendly team is here to help</p>
                 <p><small>abc@g.com</small></p>
             </div>
             <div className='mb-5'>
                 <h4 className='text-xl text-primary'>Office </h4>
                 <p>Come say to hello to our office</p>
                 <p><small>221B Baker street, London</small></p>
             </div>
             <div className='mb-5'>
                 <h4 className='text-xl text-primary'>Phone</h4>
                 <p>Monday to Friday , 8am to 10pm</p>
                 <p><small>0111114659</small></p>
             </div>
         </div>
        </section>
    );
};

export default Contact;