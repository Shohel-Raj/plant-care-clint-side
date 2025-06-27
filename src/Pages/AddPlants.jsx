import React, { use, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const AddPlants = () => {

    useEffect(()=>{
            document.title=`Plant Care | Add Plant`
        },[])

    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const AddPlant = Object.fromEntries(formData.entries());


        // You can handle submission logic here (e.g., send to backend)

        fetch('http://localhost:3000/addPlant', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddPlant)
        }).then(res => res.json()).then(data => {

            if (data.insertedId) (
                toast.success('Plant added Successfully')
            )
            e.target.reset()
        })





    };



    return (
        <>
            <div className='w-11/12  mx-auto md:mt-5'>

                <div className='space-y-3.5'>
                    <h1 className='font-bold text-2xl'>New Leaf, Who Dis?</h1>
                    <p className='italic md:w-2/4'>Give your new green friend a name, snap a pic, and set up care reminders. From thirsty ferns to sun-chasing succulents, every plant deserves VIP treatment!</p>
                </div>


                <form
                    data-aos="zoom-out-right"
                    data-aos-duration="1000"
                    onSubmit={handleSubmit}
                    className=" p-10 bg-white shadow my-5 rounded-lg space-y-4"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center text-black ">Add New Plant Form</h2>

                    <div className='grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                        <div>
                            <label className="block font-medium mb-1">Plant Name</label>
                            <input
                                required
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
                                required
                                className="w-full border rounded p-2"
                            >
                                <option value="" disabled>Select Care Level</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Watering Frequency</label>
                            <input
                                type="text"
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
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Next Watering Date</label>
                            <input
                                type="date"
                                required
                                name="nextWateringDate"
                                className="w-full border rounded p-2"
                            />
                        </div>


                        <div>
                            <label className="block font-medium mb-1">Health Status</label>
                            <input
                                type="text"
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
                                value={user?.email}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">User Name</label>
                            <input
                                readOnly
                                type="text"
                                name="userName"
                                value={user?.displayName}
                                className="w-full border rounded p-2"

                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Image</label>
                            <input
                                type="url"
                                name="image"
                                className="w-full border rounded p-2"
                                placeholder='Photo URL Here'
                                required
                            />
                        </div>
                        <div className='lg:col-span-3  md:col-span-2'>
                            <label className="block font-medium mb-1">Description</label>
                            <textarea
                                name="description"
                                className="w-full border rounded p-2"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPlants;