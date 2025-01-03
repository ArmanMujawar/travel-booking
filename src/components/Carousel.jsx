import { db } from './Firebase'; 
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react';

const Booking = () => {
 const[fullName, setName] = useState('');
 const[destination,setDestination]= useState('')
 const[checkIn,setCheckIn]= useState('')
 const[checkOut,setCheckOut]= useState('')

 const handlesubmit=async (e)=>{
  e.preventDefault();
  const FormData ={
    fullName,
    destination,
    checkIn,
    checkOut
  };

  try{
      const docRef = await addDoc(collection(db,"bookings"),FormData)
      console.log("booking is saved ", docRef.id)
     
      // Reset form fields after successful submission
      setName("");
      setCheckIn("");
      setCheckOut("");
      setDestination("");
    
      alert("Destination is Booked")
      
  }catch(error){
    console.error("something is wrong ", error);
  }

 }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <img
              src="/About2.jpg"
              alt="Booking"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-700">GET AN ADDITIONAL 10% OFF</p>
              <p className="text-2xl font-bold text-red-600 my-2">12 HOURS LEFT</p>
              <p className="bg-gray-800 text-white py-2 px-4 rounded-md inline-block">BOOK NOW AND SAVE</p>
            </div>

            {/* form is here */}
            <form  onSubmit={handlesubmit}  className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e)=>setName(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="destination" className="text-gray-700 font-medium mb-1">Destination</label>
                <select
                  id="destination"
                  value={destination}
                  onChange={(e)=>setDestination(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                >
                  <option value="">Select</option>
                  <option value="borabora">Bora Bora</option>
                  <option value="keywest">Key West</option>
                  <option value="maldives">Maldives</option>
                  <option value="kerala">Kerala</option>
                  <option value="goa">Goa</option>
                  <option value="shimla">Shimla</option>
                  <option value="manali">Manali</option>
                  <option value="ladakh">Ladakh</option>
                  <option value="darjeeling">Darjeeling</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="bangkok">Bangkok</option>
                  <option value="paris">Paris</option>
                  <option value="newyork">New York</option>
                  <option value="london">London</option>
                  <option value="rome">Rome</option>
                  <option value="barcelona">Barcelona</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="checkIn" className="text-gray-700 font-medium mb-1">Check In</label>
                <input
                  type="date"
                  id="checkIn"
                  value={checkIn}
                  onChange={(e)=>setCheckIn(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="checkOut" className="text-gray-700 font-medium mb-1">Check Out</label>
                <input
                  type="date"
                  id="checkOut"
                  value={checkOut}
                  onChange={(e)=>setCheckOut(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded w-full transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
