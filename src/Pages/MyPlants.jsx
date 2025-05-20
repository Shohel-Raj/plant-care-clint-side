import React from 'react';

const MyPlants = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table flex flex-wrap">
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
                    <tbody className='flex-wrap'>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <p>1</p>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Details</button>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>

                       
                        
                    </tbody>
                    
                </table>
            </div>
        </>
    );
};

export default MyPlants;