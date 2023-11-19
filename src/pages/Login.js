import React, { useState } from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Signup.css"

function Login() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
  return (
    <Container>
        <Row>
            <Col md={6} className='login__form--container'>
                <Form style={{width:"100%"}} >
                  <h1>Login</h1>
                  <Form.Group>
                   <Form.Label> Email id</Form.Label>
                   <Form.Control type='email' placeholder='Enter Your Email Adress' value={email} required onChange={e => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                   <Form.Label> Password</Form.Label>
                   <Form.Control type='email' placeholder='Enter Your Password'  value={password} required onChange={e=>setPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group  className='mt-3 mb-3'>
                    <Button type='submit'>Login</Button>
                  </Form.Group>
                </Form>
                <p>Don't have a account <Link to="/signup">Create Account</Link></p>
            </Col>
            <Col md={6} className='login__image--container'></Col>
        </Row>
    </Container>
  )
}

export default Login
