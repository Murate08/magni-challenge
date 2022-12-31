import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
function Students() {
  return (
    <section className='detail-container'>
        <Container>
            <Row>
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-content'>
                            <p>Nome</p>
                            <img src={student}/>
                        </div>
                        <div className='outher-info'>
                            <p>Curse</p>
                            <p>Degree</p>
                            <p>Birth day</p>

                        </div>
                        <p className='text-center'>Registration Number</p>
                    </div>
                </Col>
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-content'>
                            <p>Nome</p>
                            <img src={student}/>
                        </div>
                        <div className='outher-info'>
                            <p>Curse</p>
                            <p>Degree</p>
                            <p>Birth day</p>

                        </div>
                        <p className='text-center'>Registration Number</p>
                    </div>
                </Col>
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-content'>
                            <p>Nome</p>
                            <img src={student}/>
                       
                        </div>
                        <div className='outher-info'>
                            <p>Curse</p>
                            <p>Degree</p>
                            <p>Birth day</p>

                        </div>
                        <p className='text-center'>Registration Number</p>
                    </div>
                </Col>
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-content'>
                            <p>Nome</p>
                            <img src={student}/>
                        
                        </div>
                        <div className='outher-info'>
                            <p>Curse</p>
                            <p>Degree</p>
                            <p>Birth day</p>

                        </div>
                        <p className='text-center'>Registration Number</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Students;