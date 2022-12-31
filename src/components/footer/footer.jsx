import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

const Footer =()=>{
	const year = new Date().getFullYear()
    return(
		<footer className="footer">
        <Container>
            <Row>
                <Col lg="4">
				<div class="footer-col">
					<h4>Find me</h4>
					<ul>
						<li>Lisbon - Portugal</li>
						<li>amurate.ossaile@gmail.com</li>
					</ul>
					
  	 			</div>
                
                </Col>
                <Col lg="4">
					<div class="footer-col">
						<h4>Links</h4>
						<ul>
							<li><Link to="/signup">Create an account</Link></li>
							<li><Link to="/login">Login</Link></li>
						</ul>
					</div>
                	
                </Col>
			
                <Col lg="4">
                	<div className="footer_quick-links">
                       <div class="footer-col">
					   <h4>Follow me</h4>
							<div class="social-links">
								<a href="https://www.facebook.com/profile.php?id=100088430733778"><i class="ri-github-fill"></i></a>
								<a href="https://www.instagram.com/carrocell__"><i class="ri-whatsapp-fill"></i></a>
								<a href="https://www.linkedin.com/feed/?trk=onboarding-landing"><i class="ri-linkedin-fill"></i></a>
							</div>
						</div>
						
                    </div>
					
                </Col>
                <p className="footer_copyright text-center">Developed by Ayad OSsaile {year}.</p>
               
            </Row>
        </Container>

       </footer>
    )
}

export default Footer