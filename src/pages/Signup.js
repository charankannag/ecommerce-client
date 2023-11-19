
import React, { useState } from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Signup.css"
function Signup() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
  return (
    <Container>
        <Row>
            <Col md={6} className='signup__form--container'>
                <Form style={{width:"100%"}} >
                  <h1>Create Your account</h1>
                  <Form.Group>
                   <Form.Label> Email id</Form.Label>
                   <Form.Control type='email' placeholder='Enter Your Email Adress' value={email} required onChange={e => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group >
                   <Form.Label> Password</Form.Label>
                   <Form.Control type='email' placeholder='Enter Your Password'  value={password} required onChange={e=>setPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className='mt-3 mb-3'>
                    <Button type='submit'>Signup</Button>
                  </Form.Group>
                </Form>
                <p>Already have a account <Link to="/login">Login here</Link></p>
            </Col>
            <Col md={6} className='sigup__image--container'></Col>
        </Row>
    </Container>
  )
}

export default Signup
