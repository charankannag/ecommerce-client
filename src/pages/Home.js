import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../categories'
import { LinkContainer } from 'react-router-bootstrap'
import {Col,Row} from "react-bootstrap"
import './home.css'

function Home() {
  return (
    <div>
        <img src='https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' className='home-banner'/>
         <div className='featured-product-container mt4'>
          <h3>Last Product</h3>
         </div>
         <div>
          <Link to="/category/all" style={{textAlign: "right", display:"block", textDecoration:"none"}} >See more{">>"}</Link>
         </div>

          <div className='sale_banner--container mt-4'>
            <img src='https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'/>
          </div>
          <div className='recent-product-container container mt-4'>
            <h2>Categories</h2>
            
          <Row>
            {Categories.map((category)=>(
              <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
               <Col md={4}>
               <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${category.img})`,gap:'10px'}}className='category-title'>
                    {category.name}
                    
               </div>
               </Col>
              </LinkContainer>
            ))}
          </Row>
          </div>
    </div>
  )
}

export default Home
