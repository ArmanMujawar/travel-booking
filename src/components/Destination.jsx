import React from 'react';
import borabora from '../assets/borabora.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const Destination = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All-Inclusive Resorts</h1>
          <p className="text-gray-600">On the Caribbean's Best Beaches</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="md:col-span-3 md:row-span-2">
            <img src={borabora} alt="Bora Bora Resort" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={keywest} alt="Key West Resort" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={maldives} alt="Maldives Resort 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={maldives2} alt="Maldives Resort 2" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={maldives3} alt="Maldives Resort 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;