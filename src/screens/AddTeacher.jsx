import React from 'react';

import { Form, Button, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import '../styles/add-student.css'

function AddTeacher() {
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
                 />
                 
             </FormGroup>
             {' '}
             <FormGroup floating>
               <Input
                 id="name"
                 name="name"
                 placeholder="Name"
                 type="text"
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
                Profile Photo 
               </Label>
               <Input
                 id="exampleFile"
                 name="file"
                 type="file"
               />
             </FormGroup>

             <Button className='btn'>
               Add Student
             </Button>
         </Form>
       </div>
    </Row>
    </Container>
  )
}

export default AddTeacher;