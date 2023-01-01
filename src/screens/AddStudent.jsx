import React, { useState } from 'react';

import { Form, Button, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import {addDoc, collection, doc, setDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import useAuth from '../custom-hooks/useAuth'
import '../styles/add-student.css'
import { useNavigate, useParams } from 'react-router-dom';

function AddStudent() {

  const navigate = useNavigate()

  const {currentUser} = useAuth()
  const [name, setName] = useState('')
  const [registerNumber, setRegisterNumber] = useState('')
  const [dateBirthDay, setDateBirthday] = useState('')
  const [curse, setCurse] = useState('')
  const [degree, setDegree] = useState('')
  const [imageURL, setImageURL] = useState('')

  let {id} = useParams()

  const addStudent = async()=>{
    try {
      const docRef = await addDoc(collection(db, "students"), {
        name: name,
        registerNumber:registerNumber,
        dateBirthDay:dateBirthDay,
        curse: curse,
        imageURL:imageURL,
        degree,degree,
      });
   
      console.log("Success Student added");
      navigate('/')
   
    } catch (e) {
      console.error("Error adding Student ", e);
    }

    const docRef = await addDoc(collection(db, `${curse}`), {
      name: name,
      registerNumber:registerNumber,
      dateBirthDay:dateBirthDay,
      curse: curse,
      imageURL:imageURL,
      degree:degree,
    });
  }

  return(
    <section>
      <>
       <Container>
       <Row>
          <div className='form-content'>
            <Form onSubmit={addStudent} >
                <FormGroup floating>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                  />
                  <Label for="name">
                    Name
                  </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                  <Input
                    id="number"
                    name="number"
                    placeholder="Registration number"
                    type="number"
                    value={registerNumber}
                    onChange={(e)=> setRegisterNumber(e.target.value)}
                  />
                  <Label for="number">
                    Registration Number
                  </Label>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input
                      bsSize="lg"
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                      value={dateBirthDay}
                      onChange={(e)=> setDateBirthday(e.target.value)}
                    />
                    <Label for="exampleDate">
                      Date
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup>
                  <Label for="exampleSelectMulti">
                    Select Curse
                  </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      value={curse}
                      onChange={(e)=> setCurse(e.target.value)}
                    >
                    <option>
                      Choose a course
                    </option>
                    <option>
                      Computing
                    </option>
                    <option>
                      Software Engineering
                    </option>
                    <option>
                      Project management
                    </option>
                    <option>
                      Game programming
                    </option>
                  </Input>
                </FormGroup>
                {''}
                <FormGroup>
                  <Label for="exampleSelectMulti">
                    Select Degree
                  </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      value={degree}
                      onChange={(e)=> setDegree(e.target.value)}
                    >
                    <option>
                      Choose a Degree
                    </option>
                    <option>
                      Bachelor
                    </option>
                    <option>
                      Graduation
                    </option>
                    <option>
                      Licensure, 
                    </option>
                    <option>
                      Undergraduate degree
                    </option>
                  </Input>
                </FormGroup>
                {''}
                <FormGroup>
                  <Label for="exampleFile">
                   URL Photo for Profile 
                  </Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="text"
                    value={imageURL}
                    onChange={(e)=> setImageURL(e.target.value)}
                  />
                </FormGroup>

                <Button onClick={addStudent}  className='btn'>
                  Add Student
                </Button>
            </Form>
          </div>
       </Row>
       </Container>
      </>
    </section>
  )
}

export default AddStudent;