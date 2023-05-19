import React from "react";
import "./footer.css";
import logo1 from "../header/mainlogo.png";

function Footer() {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column1 */}
					<div className="col">
						<h4>COLOUR ME HAPPY</h4>
						<h1 className="list-unstyled" style={{ fontSize: 15 }}>
							<img src={logo1} alt="" style={{ paddingLeft: 0, width: 150, height: 150, paddingRight: 5 }} />
						</h1>
					</div>

					{/* Column2 */}
					<div className="col">
						<h4>QUICK LINKS</h4>
						<li className="list-unstyled">
							<a href="/">HOME</a>
							<br></br>
							<a href="/aboutus">ABOUT US</a>
							<br></br>
							<a href="/articles">DOCTORS BLOG</a>
							<br></br>
							<a href="/inquiries">CONTACT US</a>
						</li>
					</div>
					{/* Column3 */}
					<div className="col">
						<h4>POPULAR LINKS</h4>
						<li className="list-unstyled">
							<a href="/treatment">TREATMENT</a>
							<br></br>
							<a href="/common-view-question">Q & A</a>
							<br></br>
							<a href="/TermsAndCondtions">TERMS & CONDITIONS</a>
							<br></br>
							<a href="/MedicalHistory">MEDICAL HISTORY</a>
						</li>
					</div>
					{/* Column4 */}
					<div className="col">
						<h4>CONTACT</h4>
						<ul className="list-unstyled">
							<li>ADDRESS : No,18,Kaduwela Rd,Malabe</li>
							<li>PHONE : 077-3872701</li>
							<li>EMAIL : ColourMeHappy@gmail.com</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()} SITE BY CREW X | Colour Me Happy | All rights reserved |
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
