import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts, setParts] = useState([]);

    useEffect( () => {
        fetch('https://radiant-ocean-84672.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    return [parts, setParts]
};

export default UseParts;