import React from "react";

const Publications = () => {
  return (
    <div id="publications" className="min-h-screen bg-heroBG py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Publications
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="img4.jpg"
            alt="publication 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-bold mb-3">Letter to the Delhi CM</h3>
            <button className='px-4 py-1.5 border border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition text-sm'>
          Read More
        </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="img5.jpg"
            alt="publication 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-bold mb-3">Air Pollution Se Azadi</h3>
                  <button className='px-4 py-1.5 border border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition text-sm'>
          Join the Journey
        </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="img6.jpg"
            alt="publication 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-bold mb-3">End the Age of Plastic!</h3>
                   <button className='px-4 py-1.5 border border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition text-sm'>
          Raise your Voice
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
