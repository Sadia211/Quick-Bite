import React from 'react';

const Sectiontitle = ({heading,subheading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2'>---{subheading}---</p>
            <h3 className='text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default Sectiontitle;