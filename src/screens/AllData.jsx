import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../styles/add-student.css'
import student from '../assets/img/student.png'
import teacher from '../assets/img/teacher.png'
function GetAllData() {
  return(
    <section className='home-container'>
        <Container>
            <Row>  
                <Col  lg="6">
                    <Link to="/student">
                        <div className='button-content'>
                            See Student
                            <img src={student}/>
                        </div>
                    </Link>
                </Col>
                <Col  lg="6">
                    <Link to="/teacher">
                        <div className='button-content'>
                            See Teacher
                            <img src={teacher}/>
                        </div>
                    </Link>
                </Col>
                
                
            </Row>
        </Container>
       
    </section>
  )
}

export default GetAllData;