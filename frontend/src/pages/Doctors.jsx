import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);

  // Function to filter doctors based on selected speciality
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  // Function to dynamically apply classes to selected filter button
  const getClassName = (currentSpeciality) =>
    `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === currentSpeciality ? 'bg-indigo-100 text-black' : ''
    }`;

  // Function to handle navigation and close filters
  const handleNavigate = (path) => {
    navigate(path);
    setShowFilter(false);  // Close the filter after selection
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors by specialty.</p>
      <div className='flex flex-col gap-4 mt-5 sm:flex-row items-start'>
        
        {/* Toggle Filters on Mobile */}
        <button 
          onClick={() => setShowFilter(prev => !prev)} 
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
        >
          Filters
        </button>

        {/* Filters Section */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p
            onClick={() => handleNavigate(speciality === "General physician" ? '/doctors' : '/doctors/General physician')}
            className={getClassName("General physician")}
          >
            General physician
          </p>
          <p
            onClick={() => handleNavigate(speciality === "Gynecologist" ? '/doctors' : '/doctors/Gynecologist')}
            className={getClassName("Gynecologist")}
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleNavigate(speciality === "Dermatologist" ? '/doctors' : '/doctors/Dermatologist')}
            className={getClassName("Dermatologist")}
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleNavigate(speciality === "Pediatricians" ? '/doctors' : '/doctors/Pediatricians')}
            className={getClassName("Pediatricians")}
          >
            Pediatricians
          </p>
          <p
            onClick={() => handleNavigate(speciality === "Neurologist" ? '/doctors' : '/doctors/Neurologist')}
            className={getClassName("Neurologist")}
          >
            Neurologist
          </p>
          <p
            onClick={() => handleNavigate(speciality === "Gastroenterologist" ? '/doctors' : '/doctors/Gastroenterologist')}
            className={getClassName("Gastroenterologist")}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctor List Section */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {filterDoc.length > 0 ? (
            filterDoc.map((doctor, index) => (
              <div
                onClick={() => navigate(`/appointment/${doctor._id}`)}
                key={index}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500'
              >
                <img src={doctor.image} alt={doctor.name} className='bg-blue-50' />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                  <p className='text-sm text-gray-600'>{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='col-span-full text-center text-gray-600'>No doctors available for the selected speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
