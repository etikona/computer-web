import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts, setParts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    return [parts, setParts]
};

export default UseParts;