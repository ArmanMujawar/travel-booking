import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="./About2.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <h2 className="text-2xl font-semibold italic mb-6 text-gray-700">Arman Travels</h2>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to make travel easier, more accessible, and more enjoyable for everyone. We provide
                personalized travel booking services to help you plan your perfect trip, whether it's an adventure, a
                relaxing getaway, or a cultural experience. Our goal is to create unforgettable journeys that allow
                you to explore the world with ease, comfort, and affordability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We aspire to be a leading global travel service provider, revolutionizing how people book their
                travel experiences. Through innovative technology, a user-friendly platform, and exceptional
                customer service, we aim to be your trusted partner in all things travel, helping you explore the
                world, one journey at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;