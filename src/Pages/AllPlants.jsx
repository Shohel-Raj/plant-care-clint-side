import React, { useEffect } from 'react';

const AllPlants = () => {

    useEffect(()=>{
                document.title=`Plant Care | All Plant`
            },[])

    return (
        <div>
            All Plants
        </div>
    );
};

export default AllPlants;