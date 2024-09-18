import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    if (doctors && docId) {
      const doc = doctors.find(doctor => doctor._id === docId);
      setDocInfo(doc);
    }
  }, [doctors, docId]);

  if (!docInfo) {
    return <div>Loading doctor information...</div>;
  }

  return (
    <div>
      <img src={docInfo.image} alt="" />
      <h1>Appointment with {docInfo.name}</h1>
      <p>Specialty: {docInfo.speciality}</p>
      <p>Availability: {docInfo.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default Appointment;
