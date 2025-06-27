import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const AllPlantsDashboard = () => {
    const data = useLoaderData()

    const [dataa, setData] = useState(data);
    const [filter, setFilter] = useState('')
    const navigate = useNavigate();


    const handleFilter = e => {
        const type = e.target.value;
        setFilter(type)
    }



    const handleViewDetaills = (id) => {

        navigate(`/dashboard/viewdetails/${id}`)
    }

    useEffect(() => {
        document.title = `Plant Care | All Plant`

        let url = ``

        if (filter === 'Easy to Diffecult') {
            url = 'https://update-plant-care.vercel.app/allPlant'

        } else (
            url = 'https://update-plant-care.vercel.app/allPlant?order=desc'
        )

        fetch(url).then(res => res.json()).then(data => {
            setData(data);
        })


    }, [filter])

    return (
        <>
            <div className="w-11/12 min-h-[calc(100vh-150px)]  mx-auto">

                <div>
                    {
                        dataa.length ? <div>
                            <div className='my-4'>
                                <h1 className='font-bold text-2xl'>Your Plant Parade</h1>
                                <p className='md:w-2/5 italic mt-3'>All the leafy legends you’ve adopted gather here—check in to water, feed, and cheer on every new sprout in your personal jungle!</p>
                            </div>

                            <div className='flex gap-4 items-center mb-3.5'>
                                <p className='font-bold uppercase italic'>filtered by care level</p>
                                <select onChange={handleFilter} value={filter} className="select w-40">
                                    <option disabled={true}>Select what you went</option>
                                    <option>Diffecult to Easy</option>
                                    <option>Easy to Diffecult</option>


                                </select>
                            </div>




                            <table className="table mb-7 overflow-x-auto">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Sl</th>
                                        <th>Name</th>
                                        <th className='hidden md:flex'>Watering Frequency/Care Level </th>
                                        <th>Health Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    {
                                        dataa.map((singledata, index) =>
                                            <tr  key={singledata._id}>
                                                <th>
                                                    <p>{index + 1}</p>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={singledata.image}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{singledata.plantName}</div>
                                                            <div className="text-sm opacity-50">{singledata.category}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='hidden md:flex'>
                                                    {singledata.wateringFrequency}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">{singledata.careLevel}</span>
                                                </td>
                                                <td>{singledata.healthStatus}</td>
                                                <th>
                                                    <button onClick={() => handleViewDetaills(singledata._id)} className="uppercase btn  btn-xs">Details</button>

                                                </th>
                                            </tr>
                                        )
                                    }



                                </tbody>

                            </table>
                        </div> : <div>
                            <EmptyMyPlant></EmptyMyPlant>

                        </div>
                    }
                </div>


            </div>
        </>
    );
};

export default AllPlantsDashboard;