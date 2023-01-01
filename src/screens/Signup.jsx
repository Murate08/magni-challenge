import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button, Container, Row, Col, Spinner } from 'reactstrap';
import '../styles/auth.css'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {setDoc, doc} from 'firebase/firestore'


import {auth, storage} from '../firebase.config'

import { db } from "../firebase.config";
import { Link, useNavigate } from 'react-router-dom';



function Signup() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)


  const signup = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{



        const userCredential = await createUserWithEmailAndPassword(
            auth, 
            email,
            password
        )

        const user = userCredential.user

        const storageRef = ref(storage, `images/${Date.now() + username}`)
        const uploadTask = uploadBytesResumable(storageRef, file)


        uploadTask.on((error)=>{
            console.log(error.message)
        }, () =>{
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) =>{

                //update user profile
               await updateProfile(user,{
                    displayName:username,
                    photoURL:downloadURL
                })

                //store user data in firestore database

                await setDoc(doc(db, 'users', user.uid),{
                    uid:user.uid,
                    displayName: username,
                    email,
                    photoURL: downloadURL,
                })
            })
        })
        
        setLoading(false)

        window.alert("Conta criada com sucesso")
        navigate('/login')

    }catch(error){
        window.alert("Alguma coisa esta errada!")
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
                <h3 className="fw-bold fs-4">Create account</h3>
                <Form  onSubmit={signup}>
                  <FormGroup floating>
                      <Input
                        id="exampleEmail"
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Label for="exampleEmail">
                        Name
                      </Label>
                  </FormGroup>
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
                  <FormGroup>
                    <Label for="exampleFile">
                      Profile Photo 
                    </Label>
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>

                    <button type="submit" className="btn">Signup</button>
                    <p>I have an account. <Link to="/login">Login</Link></p>
                </Form>
            </Col>
            }
        </Row>
    </Container>
  </section>
  )
}

export default Signup;