import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const AddPlants = () => {


    const {user}=use(AuthContext);
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // You can handle submission logic here (e.g., send to backend)
    };



    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=" p-10 bg-white shadow my-5 rounded-lg space-y-4"
            >
                <h2 className="text-2xl font-bold mb-4 text-center ">Add New Plant Form</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
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
                            <option value="">Select Category</option>
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
                            <option value="">Select Care Level</option>
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
                            type="email"
                            name="userEmail"
                            value={user?.email}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">User Name</label>
                        <input
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
                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddPlants;