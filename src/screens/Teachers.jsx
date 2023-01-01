import React, { useEffect, useState } from 'react';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import '../styles/data-detail.css'
import student from '../assets/img/student.png'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useParams } from 'react-router-dom';



function Teacher() {
    const [teacher, setTeacher] = useState([])
    const [filterDegree, setFilterDregree] = useState([])
    
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
      setFilterDregree(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      console.log(filterDegree)
     
  }
    getCurse()
    
  }
const graduationRef= collection(db, 'Graduation'  )
const handleFindGraduation =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(graduationRef)
    setFilterDregree(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterDegree)
   
}   
    getCurse()
  
}

const licensureRef= collection(db, 'Licensure'  )
const handleFindLicensure =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(licensureRef)
    setFilterDregree(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterDegree)
   
}   
    getCurse()
  
}

const undergraduateRef = collection(db, 'Undergraduate Degree'  )
const handleFindUndergraduate =  async () =>{
  const getCurse = async()=>{
    const data =  await getDocs(undergraduateRef)
    setFilterDregree(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    console.log(filterDegree)
   
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
            {filterDegree.map((teacher)=> {
                return(
                    <Col lg="3">
                        <div className='detail'>
                            <div className='profile-detail'>
                                <h4>{teacher.name}</h4>
                                <img src={teacher.imageURL}/>
                            </div>
                            <div className='outher-info'>
                                <p>{teacher.curse}</p>
                                <p>{teacher.dateBirthDay}</p>
                                <p>{teacher.degree}</p>
                                <p>{teacher.salary} €</p>

                            </div>
                            </div>
                            <div className='footer-detail'>
                                <p className='text-center'>{teacher.registerNumber}</p>
                            </div>
                    </Col>
                )
            })}
        </Row>
            <Row>
                <h2 className='mt-5'>All Teachers</h2>
                {teacher.map((teacher)=> {
                    return(
                        <Col lg="3">
                            <div className='detail'>
                                <div className='profile-detail'>
                                    <h4>{teacher.name}</h4>
                                    <img src={teacher.imageURL}/>
                                </div>
                                <div className='outher-info'>
                                    <p>{teacher.curse}</p>
                                    <p>{teacher.dateBirthDay}</p>
                                    <p>{teacher.degree}</p>
                                    <p>{teacher.salary} €</p>

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

export default Teacher;