import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

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

  const getClassName = (currentSpeciality) =>
    `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === currentSpeciality ? 'bg-indigo-100 text-black' : ''
    }`;

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors by specialty.</p>
      <div className='flex flex-col gap-4 mt-5 sm:flex-row items-start'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p
            onClick={() => navigate(speciality === "General physician" ? '/doctors' : '/doctors/General physician')}
            className={getClassName("General Physician")}
          >
            General Physician
          </p>
          <p
            onClick={() => navigate(speciality === "Gynecologist" ? '/doctors' : '/doctors/Gynecologist')}
            className={getClassName("Gynecologist")}
          >
            Gynecologist
          </p>
          <p
            onClick={() => navigate(speciality === "Dermatologist" ? '/doctors' : '/doctors/Dermatologist')}
            className={getClassName("Dermatologist")}
          >
            Dermatologist
          </p>
          <p
            onClick={() => navigate(speciality === "Pediatricians" ? '/doctors' : '/doctors/Pediatricians')}
            className={getClassName("Pediatricians")}
          >
            Pediatricians
          </p>
          <p
            onClick={() => navigate(speciality === "Neurologist" ? '/doctors' : '/doctors/Neurologist')}
            className={getClassName("Neurologist")}
          >
            Neurologist
          </p>
          <p
            onClick={() => navigate(speciality === "Gastroenterologist" ? '/doctors' : '/doctors/Gastroenterologist')}
            className={getClassName("Gastroenterologist")}
          >
            Gastroenterologist
          </p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
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
          }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
