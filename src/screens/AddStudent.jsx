import React from 'react';

import { Form, Button, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import '../styles/add-student.css'

function AddStudent() {
  return(
    <section>
      <>
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
                <FormGroup floating>
                  <Input
                    id="number"
                    name="number"
                    placeholder="Registration number"
                    type="number"
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
      </>
    </section>
  )
}

export default AddStudent;