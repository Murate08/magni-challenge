import React, { useEffect, useState } from 'react';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useParams } from 'react-router-dom';



function Teacher() {
    const [teacher, setTeacher] = useState([])
    const [filterCurse, setFilterCurse] = useState([])
    
  let {id} = useParams()

    
  const productCollectionRef = collection(db, 'teachers'  )
  useEffect(()=>{
      const getTeacher = async()=>{
          const data =  await getDocs(productCollectionRef)
          setTeacher(data.docs.map((doc)=>({...doc.data(), id:doc.id})))   
          
      }
      getTeacher()
  },[])

  const BachelorRef = collection(db, 'Bachelor'  )
  const handleFindBachelor =  async () =>{
    const getCurse = async()=>{
      const data =  await getDocs(BachelorRef)
      setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      console.log(filterCurse)
     
  }
    getCurse()
    
  }
const graduationRef= collection(db, 'Graduation'  )
const handleFindGraduation =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(graduationRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterCurse)
   
}   
    getCurse()
  
}

const licensureRef= collection(db, 'Licensure'  )
const handleFindLicensure =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(licensureRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterCurse)
   
}   
    getCurse()
  
}

const undergraduateRef = collection(db, 'Undergraduate Degree'  )
const handleFindUndergraduate =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(undergraduateRef)
    setFilterCurse(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterCurse)
   
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
                        Get Teachers By Degree
                    </DropdownToggle>
                    <DropdownMenu  className='w-100'>
                        <DropdownItem header>
                            Filter by Degree
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindBachelor}>Bachelor</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindGraduation}>Graduation</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindLicensure}>Licensure</button>
                        </DropdownItem>
                        <DropdownItem>
                            <button className='btn_filter' onClick={handleFindUndergraduate}>Undergraduate Degree</button>
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
                                <p>{student.dateBirthDay}</p>
                                <p>{student.degree}</p>
                                <p>{student.salary} €</p>

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
                <h2 className='mt-5'>All Teachers</h2>
                {teacher.map((student)=> {
                    return(
                        <Col lg="3">
                            <div className='detail'>
                                <div className='profile-detail'>
                                    <h4>{student.name}</h4>
                                    <img src={student.imageURL}/>
                                </div>
                                <div className='outher-info'>
                                    <p>{student.curse}</p>
                                    <p>{student.dateBirthDay}</p>
                                    <p>{student.degree}</p>
                                    <p>{student.salary} €</p>

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

export default Teacher;