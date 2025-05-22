import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdatePlant = () => {

    const data = useLoaderData()


    const { _id, wateringFrequency, userName, userEmail, plantName, nextWateringDate, lastWateredDate, image, healthStatus, description, category, careLevel } = data;




    useEffect(() => {
        document.title = `Plant Care | Update `
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const upDate = Object.fromEntries(formData.entries());
        console.log(upDate);



        fetch(`https://plant-care-server-azure.vercel.app/plant/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upDate)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                toast.success('Update Successfuly')
            } else if (data.matchedCount) {
                toast.warn(`You didn't change  any data yet`)
            }


        })
    }



    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto md:mt-5'>

                <div className='space-y-3.5'>
                    <h1 className='font-bold text-2xl'>Glow Up Time!</h1>
                    <p className='italic md:w-2/4'>Fresh pot? New spot? Let’s keep your leafy pal’s profile up to date. Update their name, pic, or care routine so they keep thriving in style!</p>
                </div>


                <form
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    onSubmit={handleUpdate}
                    className=" p-10 bg-white shadow my-5 rounded-lg space-y-4"
                >
                    <h2 className="text-2xl font-bold mb-4 text-black text-center ">Update Plant Form</h2>

                    <div className='grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                        <div>
                            <label className="block font-medium mb-1">Plant Name</label>
                            <input
                                required
                                defaultValue={plantName}
                                type="text"
                                name="plantName"
                                className="w-full border rounded p-2"
                                placeholder='Type Plant Name'
                            />
                        </div>





                        <div>
                            <label className="block font-medium mb-1">Category</label>
                            <select
                                name="category"
                                defaultValue={category}
                                required
                                className="w-full border rounded p-2"
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                            </select>
                        </div>



                        <div>
                            <label className="block font-medium mb-1">Care Level</label>
                            <select
                                name="careLevel"
                                defaultValue={careLevel}
                                required
                                className="w-full border rounded p-2"
                            >
                                <option disabled>Select Care Level</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Watering Frequency</label>
                            <input
                                type="text"
                                defaultValue={wateringFrequency}
                                required
                                name="wateringFrequency"
                                placeholder="e.g., every 3 days"
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Last Watered Date</label>
                            <input
                                type="date"
                                required
                                name="lastWateredDate"
                                className="w-full border rounded p-2"
                                defaultValue={lastWateredDate}
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Next Watering Date</label>
                            <input
                                type="date"
                                required
                                defaultValue={nextWateringDate}
                                name="nextWateringDate"
                                className="w-full border rounded p-2"
                            />
                        </div>


                        <div>
                            <label className="block font-medium mb-1">Health Status</label>
                            <input
                                type="text"
                                defaultValue={healthStatus}
                                name="healthStatus"
                                placeholder='healthStatus'
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">User Email</label>
                            <input
                                readOnly
                                type="email"
                                name="userEmail"
                                value={userEmail}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">User Name</label>
                            <input
                                readOnly
                                type="text"
                                name="userName"
                                value={userName}
                                className="w-full border rounded p-2"

                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Image</label>
                            <input
                                type="url"
                                name="image"
                                defaultValue={image}
                                className="w-full border rounded p-2"
                                placeholder='Photo URL Here'
                                required
                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Description</label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                className="w-full border rounded p-2"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdatePlant;