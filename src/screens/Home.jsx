import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import student from '../assets/img/student.png'
import teacher from '../assets/img/teacher.png'
import {motion} from 'framer-motion'
import univer from '../assets/img/univer.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='home-container'>
        <Container>
            <Row>
                <Col  lg="4">
                    <Link to="/all-data">
                        <motion.div   whileTap={{scale:1.2}}    className='button-content'>
                           <h5>University</h5>
                           <img src={univer}/>
                        </motion.div>
                        </Link>
                    </Col>
                
                
                <Col  lg="4">
                    <Link to="/add-student">
                        <motion.div   whileTap={{scale:1.2}}    className='button-content'>
                            <h5>Add Student</h5>
                            <img src={student}/>
                        </motion.div>
                    </Link>
                </Col>
                <Col  lg="4">
                    <Link to="/add-teacher">
                        <motion.div   whileTap={{scale:1.2}}    className='button-content'>
                            <h5>Add Teacher</h5>
                            <img src={teacher}/>
                        </motion.div>
                    </Link>
                </Col>
                
                
            </Row>
        </Container>
       
    </section>
  )
}

export default Home;