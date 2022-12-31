import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useParams } from 'react-router-dom';
function Students() {
    const [students, setStudents] = useState([])
    
  let {id} = useParams()

    
  const productCollectionRef = collection(db, 'students'  )
  useEffect(()=>{
      const getStudents = async()=>{
          const data =  await getDocs(productCollectionRef)
          setStudents(data.docs.map((doc)=>({...doc.data(), id:doc.id})))   
          
      }
      getStudents()
  },[])
  return (
    <section className='detail-container'>
        <Container>
            <Row>
            {students.map((student)=> {
            return(
                <Col lg="3">
                    <div className='detail'>
                        <div className='profile-detail'>
                            <h4>{student.name}</h4>
                            <img src={student.imageURL}/>
                        </div>
                        <div className='outher-info'>
                            <p>{student.curse}</p>
                            <p>{student.degree}</p>
                            <p>{student.dateBirthDay}</p>

                        </div>
                       
                    </div>
                    <div className='footer-detail'>
                        <p className='text-center'>{student.registerNumber}</p>
                    </div>
               </Col>
                   )
                })}
            </Row>
        </Container>
    </section>
  )
}

export default Students;