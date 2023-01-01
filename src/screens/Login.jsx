
import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button, Container, Row, Col, Spinner } from 'reactstrap';
import {auth} from '../firebase.config'
import {signInWithEmailAndPassword} from  'firebase/auth'
import '../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signIn = async (e) =>{

      e.preventDefault()
      setLoading(true)


      try{
          
          const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password,    
          )

          const user = userCredential.user

          window.alert(user)
          setLoading(false)
          window.alert('Logado com sucesso')
          navigate('/')

      }catch(error){
          setLoading(false)
          window.alert(error.message)
      }
  }

  return (
    <section className='auth-content'>
      <Container>
          <Row>
              {
                  loading ? 
                    <Col lg="12" className="text-center">
                      <Spinner color="danger">
                        Loading...
                      </Spinner>
                    </Col> :
                  
              <Col lg="6" className="m-auto text-center">
                  <h3 className="fw-bold fs-4">Login</h3>
                  <Form  onSubmit={signIn}>
                    <FormGroup floating>
                      <Input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                      <Label for="exampleEmail">
                        Email
                      </Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                      />
                      <Label for="exampleEmail">
                       Password
                      </Label>
                    </FormGroup>
                      <button type="submit" className="btn">Login</button>
                      <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
                  </Form>
              </Col>
              }
          </Row>
      </Container>
    </section>
  )
}

export default Login;
