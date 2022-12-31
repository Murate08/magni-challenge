import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'

function Teachers() {
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
                            <p>Birth day</p>
                            <p>Salary</p>
                            <p>Disciplines</p>

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
                            <p>Birth day</p>
                            <p>Salary</p>
                            <p>Disciplines</p>

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
                            <p>Birth day</p>
                            <p>Salary</p>
                            <p>Disciplines</p>

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
                            <p>Birth day</p>
                            <p>Salary</p>
                            <p>Disciplines</p>

                        </div>
                        <p className='text-center'>Registration Number</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Teachers;