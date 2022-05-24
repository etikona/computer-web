import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {name, img, description, quantity, price, availableQuantity} = part;
    return (
        <div>
            <div className="card w-96  shadow-xl mt-2 "><font></font>
  <figure className="px-10 pt-10"><font></font>
    <img src={img} alt="" className="rounded-xl" /><font></font>
  </figure><font></font>
  <div className="card-body items-center text-center"><font></font>
    <h2 className="card-title">{name}</h2><font></font>
    <p>{description.slice(0,50)}</p><font></font>
    <p>Fixed Quantity :{quantity}</p>
    <p>Available Qunatiy:{availableQuantity}</p>
    <h3>Price: {price}</h3>
      <button className="btn btn-primary"><Link to="/purchace">Book Now</Link></button><font></font>
    </div><font></font>
  </div><font></font>
</div>
    
    );
};

export default Part;