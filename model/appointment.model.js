const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema({

    patientId: {type: mongoose.Schema.Types.ObjectId,ref:"User"},       //Reference to User (patient)
    doctorId:String, //Reference to User (doctor)
    appointmentDateTime: DateTime,
    symptoms: String,
    fees: Number, //(updated by doctor after appointment)
    prescription: String,   //(updated by doctor after appointment)
    isDiagnosisDone: Boolean,  // (updated by doctor after appointment)

})

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema)

module.exports = AppointmentModel