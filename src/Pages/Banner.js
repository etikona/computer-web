import React from 'react';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-100"><font></font>
        <div class="hero-content flex-col lg:flex-row"><font></font>
          <img src={banner3} /><font></font>
          <div><font></font>
            <h1 class="text-5xl font-bold mb-5">Build your Own computer</h1><font></font>
            <p>“The surest way to make your dreams come true is to live them.” “Dreams don't work unless you take action. The surest way to make your dreams come true is to live them.” “The possibility of the dream gives strength.”</p>
            <button class="btn btn-primary mt-3">Get Started</button><font></font>
          </div><font></font>
        </div><font></font>
      </div>
    </div>
  );
};

export default Banner;