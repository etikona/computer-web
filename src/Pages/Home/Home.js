import React from 'react';
import Banner from '../Banner';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact';
import Location from './Location';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Contact></Contact>
            <Location></Location>
        </div>
    );
};

export default Home;