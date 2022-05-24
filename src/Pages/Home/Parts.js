import React from 'react';
import UseParts from '../../hooks/UseParts';

import Part from './Part';

const Parts = () => {
     const [parts, setParts] = UseParts([]);
    return (
     <div>
         <h3 className='text-accent text-3xl mb-4'>PARTS</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                parts.map(part => <Part key={part._id} part={part}></Part>)
            }
        </div>
     </div>  
     
    );
};

export default Parts;