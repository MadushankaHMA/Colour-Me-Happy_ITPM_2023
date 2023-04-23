const express = require("express");
const {
	registerDoctor,
	updateDoctorProfile,
	authDoctor,
	getDoctorProfile,
	deleteDoctorProfile,
} = require("../controllers/doctorController");
const { 
	getPatients, 
	getPatientProfileById } = require("../controllers/patientController");

const { getMedicalHistory, getMedicalHistoryById } = require("../controllers/medicalHistoryController");

const { protect } = require("../middlewares/authDoctorMiddleware");
const router = express.Router();

//Routes for Doctor account operations by doctor
router.route("/register").post(registerDoctor);
router.route("/login").post(authDoctor);
router.route("/edit").put(protect, updateDoctorProfile);
router.route("/view").get(protect, getDoctorProfile);
router.route("/delete").delete(protect, deleteDoctorProfile);

//Routes for Patient account operations by doctor
router.route("/patients").get(protect, getPatients);
router.route("/patient/profile/view/:_id").get(protect, getPatientProfileById);

//Routes for doctors to get medical history
router.route("/medical_history").get(protect, getMedicalHistory);
router.route("/medical_history/:id").get(protect, getMedicalHistoryById);


module.exports = router;
