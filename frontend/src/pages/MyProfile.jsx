import React, { useState } from 'react';
import { assets } from '../assets/assets';
import user_image from '../assets/logo/profile (2).png';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Priyanshu Kumar",
    image: assets.profile_pic,
    email: "kmpriyanshu9009@gmail.com",
    phone: "0123456789",
    address: {
      line1: "village, district",
      line2: "state, india"
    },
    gender: "male",
    dob: "2002-07-25" // Ensure this is in YYYY-MM-DD format for the date input to work properly
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile-container max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={user_image} alt="User Profile" />
      {
        isEdit ? (
          <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
            type="text"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        )
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              />
            ) : (
              <p>{userData.phone}</p>
            )
          }
          <p>Address:</p>
          {
            isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={e => setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))}
                />
                <br />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={e => setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))}
                />
              </>
            ) : (
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )
          }
        </div>
      </div>
      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender:</p>
          {
            isEdit ? (
              <select
                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                value={userData.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )
          }
          <p>Birthday:</p>
          {
            isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              />
            ) : (
              <p>{userData.dob}</p>
            )
          }
        </div>
      </div>


      <button className="border border-black px-8 py-4 text-sm" onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Save" : "Edit Information"}
      </button>
    </div>
  );
}

export default MyProfile;
