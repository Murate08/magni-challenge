import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useParams } from 'react-router-dom';


function Teachers() {
    const [teachers, setTeachers] = useState([])
    
  let {id} = useParams()

    
  const productCollectionRef = collection(db, 'teachers'  )
  useEffect(()=>{
      const getTeachers = async()=>{
          const data =  await getDocs(productCollectionRef)
          setTeachers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))   
          
      }
      getTeachers()
  },[])
  return (
    <section className='detail-container'>
        <Container>
            <Row>
            {teachers.map((teacher)=> {
            return(
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-content'>
                            <p>{teacher.name}</p>
                            <img src={teacher.imageURL}/>
                        </div>
                        <div className='outher-info'>
                            <p>{teacher.curse}</p>
                            <p>{teacher.salary} €</p>
                            <p>{teacher.dateBirthDay}</p>

                        </div>
                    </div>
                    <div className='footer-detail'>
                        <p className='text-center'>{teacher.registerNumber}</p>
                    </div>
               </Col>
                   )
                })}
            </Row>
        </Container>
    </section>
  )
}

export default Teachers;