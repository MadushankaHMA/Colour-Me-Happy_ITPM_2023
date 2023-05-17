import React from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import MainScreen from "../../../components/MainScreen";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="homebg">
			<MainScreen>
				<br></br>
				<br></br>
				<div className="home-container" style={{ borderRadius: 20 }}>
					<Carousel variant="dark" style={{ height: 500, width: 700, marginTop: 50, alignSelf: "center" }}>
						<Carousel.Item>
							<img
								style={{ height: 400, width: 500 }}
								className="d-block w-100"
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/download%20(1).jpg?alt=media&token=d00eeb27-03e5-4e7f-a0a1-ce4b18149c3b"
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								style={{ height: 400, width: 500 }}
								className="d-block w-100"
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/AdobeStock_495359867-scaled.jpeg?alt=media&token=717f1035-cec2-42b7-b878-835f59131a57"
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								style={{ height: 400, width: 500 }}
								className="d-block w-100"
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/world_mental_health_day_2022.jpeg?alt=media&token=5d0f1340-6925-463b-afaf-39337d32e040"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								style={{ height: 400, width: 500 }}
								className="d-block w-100"
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/stuart-rimmer-mental-health-feat.jpg?alt=media&token=d0d4d3b5-c6e4-4754-b031-042a5806edfc"
								alt="First slide"
							/>
						</Carousel.Item>
					</Carousel>

					<h1>Welcome To Colour Me Happy</h1>
					<p>What are you waiting for?</p>
					<div className="home-btns">
						<Button href="/login-select" className="btns">
							GET STARTED
						</Button>
						<br></br>
						<br></br>
					</div>
					<br></br>
				</div>
				<br></br>
				<br></br>
				<Row style={{ marginLeft: 17 }}>
					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{
									marginTop: 20,
									height: 200,
									width: 300,
									alignSelf: "center",
									marginLeft: 2,
									marginRight: 2,
								}}
								src="https://media.istockphoto.com/photos/3d-render-of-tooth-calendar-and-dental-diagnostic-instruments-over-picture-id1225834953?k=20&m=1225834953&s=612x612&w=0&h=Kxr4sd4pVmu8T_9bcUtq1zkVZ3F3vaku_XPG5mBAoys="
							/>
							<Card.Body>
								<Card.Title>Doctor’s Schedule</Card.Title>
								<Card.Text>
									Go to Doctor’s Schedule and find your specialist doctor today. Aim to provide the best dental clinic
									service. We provide you the best dental clinic service.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{
									marginTop: 20,
									height: 200,
									width: 300,
									alignSelf: "center",
									marginLeft: 2,
									marginRight: 2,
								}}
								src="https://media.istockphoto.com/photos/dentist-appointment-picture-id505498068?k=20&m=505498068&s=612x612&w=0&h=MmaB7vyztl0jmLX8SHS16xu0qaZIJXh3vd4lk7US5zk="
							/>
							<Card.Body>
								<Card.Title>Appointments</Card.Title>
								<Card.Text>
									Easy, quick and safest way to book your appointments.Make an appointment with your favorite doctor.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{
									marginTop: 20,
									height: 200,
									width: 300,
									alignSelf: "center",
									marginLeft: 2,
									marginRight: 2,
								}}
								src="https://media.istockphoto.com/photos/dentist-and-her-assistant-performing-dental-drilling-on-young-woman-picture-id936750238?k=20&m=936750238&s=612x612&w=0&h=tg9hBPrrjyJnDNb1ezLb28GLoaAJh10K8wzWKiBzFZ0="
							/>
							<Card.Body>
								<Card.Title>Best Treatments</Card.Title>
								<Card.Text>
									Treatments are based on your needs. You can choose the treatment that works best for you. Our dental
									provide high quality dental care.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br></br>
				<br></br>
				<Row style={{ marginLeft: 17 }}>
					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{ height: 200, width: 300, alignSelf: "center", marginLeft: 2, marginRight: 2, marginTop: 20 }}
								src="https://media.istockphoto.com/photos/dentist-showing-a-patient-her-xray-picture-id654945798?k=20&m=654945798&s=612x612&w=0&h=MU8fUumxflXUhzRbo9Kj_0B4KadXrx6GVIL-YDBPcVM="
							/>
							<Card.Body>
								<Card.Title>Medical History </Card.Title>
								<Card.Text>
									The past medical history is an overall view of the patient's health prior to the present illness.You
									can view, add your medical history.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{
									marginTop: 20,
									height: 200,
									width: 300,
									alignSelf: "center",
									marginLeft: 2,
									marginRight: 2,
								}}
								src="https://media.istockphoto.com/photos/little-girl-learning-how-to-brush-her-teeth-at-dentists-office-picture-id878852372?k=20&m=878852372&s=612x612&w=0&h=xZGNeI4ZWVpPf-DyMSHO9TwCbN83rlXUdI02MyZW7i4="
							/>
							<Card.Body>
								<Card.Title>Doctor’s Article Blog </Card.Title>
								<Card.Text>
									Read and upgrade your knowledge about oral health and dentistry here. Check out our blog for all your
									tips on all aspects of dental care.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "23rem", borderRadius: 10 }}>
							<Card.Img
								className="image"
								variant="top"
								style={{
									marginTop: 20,
									height: 200,
									width: 300,
									alignSelf: "center",
									marginLeft: 2,
									marginRight: 2,
								}}
								src="https://media.istockphoto.com/photos/portrait-of-two-young-dentists-showing-thumbs-up-in-their-consulting-picture-id1371010290?k=20&m=1371010290&s=612x612&w=0&h=ifiqMqVIfsoPUtI4yk9yHQURHf705E0i4-9bSUziCqM="
							/>
							<Card.Body>
								<Card.Title>Feedback and Q&A </Card.Title>
								<Card.Text>
									Our Family Dental Clinic offers quality dental treatments. Please take a moment to provide us with
									your feedback.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br></br>
				<br></br>
			</MainScreen>
		</div>
	);
}

export default HomePage;
