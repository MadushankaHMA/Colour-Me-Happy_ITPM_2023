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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1409304190-2048x2048-transformed.jpeg?alt=media&token=c72edcc7-50d1-4fbb-9c6b-a7d31701d35c"
							/>
							<Card.Body>
								<Card.Title>Psychiatric's Shedule</Card.Title>
								<Card.Text>
									Easily view and manage appointment availability for psychiatrists on our platform.
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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1352603244-2048x2048-transformed.jpeg?alt=media&token=011e0f76-848c-461a-9070-3bc413a14bce"
							/>
							<Card.Body>
								<Card.Title>Psychiatric's Article Blog</Card.Title>
								<Card.Text>
									Stay updated and informed with insightful articles on mental health written by our expert
									psychiatrists.
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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1406496671-2048x2048-transformed.jpeg?alt=media&token=93e05b45-5721-4f2e-9e0f-2e7df6a7b846"
							/>
							<Card.Body>
								<Card.Title>Best Treatments</Card.Title>
								<Card.Text>
									Explore a comprehensive range of top-quality psychiatric treatments tailored to individual needs.
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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1021543918-2048x2048-transformed.jpeg?alt=media&token=ca53f0a3-12a1-4e52-8c03-03390ac04561"
							/>
							<Card.Body>
								<Card.Title>Medical History </Card.Title>
								<Card.Text>
									Maintain a secure and accessible record of your psychiatric medical history for informed care.
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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1334288822-2048x2048-transformed.jpeg?alt=media&token=01fb2c71-548d-4282-a3c0-86b214697d65"
							/>
							<Card.Body>
								<Card.Title>Feedback </Card.Title>
								<Card.Text>
									Share your valuable feedback to help us continually improve and enhance our psychiatric services.
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
								src="https://firebasestorage.googleapis.com/v0/b/colour-me-happy-55339.appspot.com/o/istockphoto-1357394932-2048x2048-transformed.jpeg?alt=media&token=d4395c54-6781-481a-85da-d418df6c113f"
							/>
							<Card.Body>
								<Card.Title>Q&A</Card.Title>
								<Card.Text>
									Get answers to your pressing mental health questions from our team of experienced psychiatrists
									directly on the homepage.
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
