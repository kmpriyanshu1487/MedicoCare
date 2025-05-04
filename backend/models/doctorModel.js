import mongoose from "mongoose";

const doctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    expreience: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    data: {
      type: Number,
      require: true,
    },
    slot_booked: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);


const doctorModel=mongoose.models.doctor || mongoose.model('doctor',doctorsSchema);

export default doctorModel;