import React, { useState } from 'react';

import { Form, Button, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import {addDoc, collection, doc, setDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import useAuth from '../custom-hooks/useAuth'
import '../styles/add-student.css'
import { useNavigate, useParams } from 'react-router-dom';


function AddTeacher() {
  const navigate = useNavigate()

  const {currentUser} = useAuth()
  const [name, setName] = useState('Antonio')
  const [registerNumber, setRegisterNumber] = useState('')
  const [dateBirthDay, setDateBirthday] = useState('')
  const [curse, setCurse] = useState('')
  const [salary, setSalary] = useState('')
  const [imageURL, setImageURL] = useState('')

  let {id} = useParams()

  const addTeacher = async()=>{
    try {
      const docRef = await addDoc(collection(db, "teachers"), {
        name: name,
        registerNumber:registerNumber,
        dateBirthDay:dateBirthDay,
        curse: curse,
        imageURL:imageURL,
        salary:salary,
      });
    
      console.log("Success Teacher added");
      navigate('/')
    } catch (e) {
      console.error("Error adding Teacher ", e);
    }
  }

  return(
    <Container>
    <Row>
       <div className='form-content'>
         <Form>
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
             <FormGroup floating>
               <Input
                 id="name"
                 name="name"
                 placeholder="Name"
                 type="text"
                 value={registerNumber}
                 onChange={(e)=> setRegisterNumber(e.target.value)}
               />
               <Label for="name">
                 Name
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
                 
             </FormGroup>
             {' '}
             <FormGroup floating>
               <Input
                 id="name"
                 name="name"
                 placeholder="Name"
                 type="text"
                 value={salary}
                 onChange={(e)=> setSalary(e.target.value)}
               />
               <Label for="name">
                 Salary
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
            <Button onClick={addTeacher}  className='btn'>
              Teacher
            </Button>
         </Form>
       </div>
    </Row>
    </Container>
  )
}

export default AddTeacher;



