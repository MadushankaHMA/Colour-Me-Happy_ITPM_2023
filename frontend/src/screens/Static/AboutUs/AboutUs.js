import React from "react";
import { Card } from "react-bootstrap";
import "./AboutUs.css";
function AboutUs() {
	return (
		<div className="about">
			<div className="aboutTop"></div>
			<div className="aboutBg">
				<br></br>
				<h1 style={{ alignSelf: "center", marginLeft: "35%", marginRight: "35%", fontSize: "90px" }}> About Us</h1>
				<br></br>
				<Card
					style={{
						borderWidth: 2.0,
						borderRadius: 20,
						marginBottom: 90,
						paddingInline: 10,
						background: "#f6f6f6f0",
						marginLeft: "10%",
						marginRight: "10%",
					}}
				>
					<Card.Body>
						<h3>
							<b>WHY CHOOSE US?</b>
						</h3>
						<p>
							We understand that choosing the right psychiatric platform is crucial for your mental well-being. That's
							why we stand out by providing a patient-centered approach, tailored to your unique needs. With us, you can
							expect compassionate care, a user-friendly experience, and a commitment to your overall mental wellness.
						</p>

						<br />

						<h3>
							<b>EXCELLENCE IN PSYCHIATRIC SERVICE</b>
						</h3>
						<p>
							Our platform prides itself on delivering excellence in psychiatric services. We uphold the highest
							standards of evidence-based practices, ensuring that you receive the most effective and up-to-date
							treatments available. Our team of dedicated professionals is passionate about helping you achieve your
							mental health goals.
						</p>
						<br />
						<h3>
							<b>EXPERIENCED STAFF</b>
						</h3>
						<p>
							Our platform is home to a team of experienced psychiatrists who have honed their skills through years of
							practice. With their expertise and deep understanding of various mental health conditions, they are
							equipped to provide accurate diagnoses, personalized treatment plans, and compassionate care.
						</p>
						<br />
						<h3>
							<b>ETHICAL PSYCHIATRIC SERVICE</b>
						</h3>
						<p>
							We firmly believe in providing ethical psychiatric services, guided by integrity, professionalism, and
							respect for your privacy. Your trust is of utmost importance to us, and we ensure confidentiality in all
							aspects of your care. Rest assured that your information is safe and secure with us.
						</p>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default AboutUs;
