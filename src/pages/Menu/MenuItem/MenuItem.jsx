
import React from 'react';

const MenuItem = ({item}) => {
    const{name,image,price,recipe,title}=item;
    return (
        <div className='flex'>
            <img style={{borderRadius:' 0 200px 200px  20px'}} className='w-[120px]' src={image}/>
            
            
            <div>
                <h3 className='font-bold'>{name}--------------</h3>
            <p className='py-2'>{recipe}</p>
        </div>
       <p className='text-yellow-500'>${price}</p> 
        
        
        </div>
    );
};
export default MenuItem;