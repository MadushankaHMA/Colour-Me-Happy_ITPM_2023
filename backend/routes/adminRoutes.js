const express = require("express");
const { registerAdmin, authAdmin, updateAdminProfile, getAdminProfile } = require("../controllers/adminController");
const {
	registerDoctor,
	getDoctors,
	getDoctorProfileById,
	deleteDoctorProfileById,
	updateDoctorProfileById,
} = require("../controllers/doctorController");
const {
	registerPatient,
	getPatients,
	getPatientProfileById,
	deletePatientProfileById,
	updatePatientProfileById,
	getPatientCount,
} = require("../controllers/patientController");

const {
	getMedicalHistory,
	createMedicalHistory,
	getMedicalHistoryById,
	UpdateMedicalHistory,
	DeleteMedicalHistory,
	getMedicalHistoryCount,
} = require("../controllers/medicalHistoryController");

const { getBlogCount } = require("../controllers/blogController");

const { protect } = require("../middlewares/authAdminMiddleware");
const { post } = require("./doctorRoutes");
const router = express.Router();

//Routes for Admin account operations
router.route("/register").post(registerAdmin);
router.route("/login").post(authAdmin);
router.route("/edit").put(protect, updateAdminProfile);
router.route("/view").get(protect, getAdminProfile);

//Routes for Doctor account operations admin end
router.route("/doctor/register").post(protect, registerDoctor);
router.route("/doctor/profile/view/:_id").get(protect, getDoctorProfileById).delete(protect, deleteDoctorProfileById);
router.route("/doctor/profile/edit/:_id").put(protect, updateDoctorProfileById);
router.route("/doctors").get(protect, getDoctors);

//Routes for Patient account operations admin end
router.route("/patient/register").post(protect, registerPatient);
router
	.route("/patient/profile/view/:_id")
	.get(protect, getPatientProfileById)
	.delete(protect, deletePatientProfileById);
router.route("/patient/profile/edit/:_id").put(protect, updatePatientProfileById);
router.route("/patients").get(protect, getPatients);
router.route("/patients/count").get(protect, getPatientCount);

//Routes for medical history management admin end
router.route("/medical_history").get(protect, getMedicalHistory);
router.route("/medical_history/create").post(protect, createMedicalHistory);
router.route("/medical_history/report").get(protect, getMedicalHistoryCount);
router
	.route("/medical_history/:id")
	.get(protect, getMedicalHistoryById)
	.put(protect, UpdateMedicalHistory)
	.delete(protect, DeleteMedicalHistory);

//Routes for Blogs
router.route("/blog/report").get(protect, getBlogCount);

module.exports = router;
