//api for adding doctor

const addDcotor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
      data,
    } = req.body;

const imageFile=req.file;

console.log(name,
    email,
    password,
    image,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    data,imageFile);


  } catch (error) {}
};


export {addDcotor}