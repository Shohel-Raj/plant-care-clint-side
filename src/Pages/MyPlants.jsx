import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Loader from '../Component/Loader/LOader';
import Swal from 'sweetalert2';



const MyPlants = () => {

    const { user, loading, } = use(AuthContext);
    const [dataa, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/plant?emailParams=${user.email}`).then(res => res.json()).then(data => {
            setData(data);
        })
    }, [user])


    if (loading) {

        return <Loader></Loader>
    }

    const handleDelet = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/plant/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()).then((data => {
                        console.log(data);

                        if (data.deletedCount) {
                            const remainigData =dataa.filter(d=>d._id  !== id);
                            setData(remainigData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }))

            }
        });

    }






    return (
        <>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Sl</th>
                            <th>Name</th>
                            <th>Watering Frequency/Care Level </th>
                            <th>Health Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            dataa.map((singledata, index) =>
                                <tr key={singledata._id}>
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
                                    <td>
                                        {singledata.wateringFrequency}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{singledata.careLevel}</span>
                                    </td>
                                    <td>{singledata.healthStatus}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Details</button>
                                        <button onClick={() => handleDelet(singledata._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }



                    </tbody>

                </table>
            </div>



        </>
    );
};

export default MyPlants;