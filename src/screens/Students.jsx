import React, { useEffect, useState } from 'react';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useParams } from 'react-router-dom';
function Students() {
    const [students, setStudents] = useState([])
    const [filterCurse, setFilterCurse] = useState([])
    
  let {id} = useParams()

    
  const productCollectionRef = collection(db, 'students'  )
  useEffect(()=>{
      const getStudents = async()=>{
          const data =  await getDocs(productCollectionRef)
          setStudents(data.docs.map((doc)=>({...doc.data(), id:doc.id})))   
          
      }
      getStudents()
  },[])

  const softwareRef = collection(db, 'Software Engineering'  )
  const handleFindSoftware =  async () =>{
    const getCurse = async()=>{
      const data =  await getDocs(softwareRef)
      setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      
     
  }
    getCurse()
    
  }
const programmingRef= collection(db, 'Game programming'  )
const handleFindGame =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(programmingRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    
   
}   
    getCurse()
  
}

const managementRef= collection(db, 'Project management'  )
const handleFindmanagement =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(managementRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    
}   
    getCurse()
  
}

const computingRef = collection(db, 'Computing'  )
const handleFindComputing =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(computingRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
   
   
}   
    getCurse()
  
}
  return (
    <section className='detail-container'>       
        <Container>
        <div className="d-flex">
            <UncontrolledDropdown
                    className="toggle"
                    direction="down"                
                >
                    <DropdownToggle
                        caret
                        className='btn' 
                    >
                        Get Students By Curse
                    </DropdownToggle>
                    <DropdownMenu  className='w-100'>
                        <DropdownItem header>
                            Filter by Curse
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindSoftware}>Software Engineering</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindGame}>Game programming</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindmanagement}>Project Management</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindComputing}>Computing</button>
                        </DropdownItem>
                        
                    </DropdownMenu>
            </UncontrolledDropdown>
        </div>
        <Row>
            {filterCurse.map((student)=> {
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
        
            <Row>
            <h2 className='mt-5'>All Students</h2>
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