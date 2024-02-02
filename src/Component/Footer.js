import React from 'react'
import { Link } from "react-router-dom";
import { Offcanvas, Button, Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <section className='sec-12 py-5'>
        <Container>
          <Row className='g-4' style={{ fontSize: '16px' }}>
            <div className='col-12 col-md-12 col-lg-4 text-center text-md-start'>
              <div className="logo">
                <img src={require('../images/asset 0.webp')} alt="" className='mb-4' />
                <p>We are a team of designers and developers that create high quality eCommerce, WordPress, Shopify .</p>
                <div className="add mb-2">
                  <span style={{ fontWeight: '500' }}>Address:</span>
                  <span> 4710-4890 Breckinridge USA</span>
                </div>
                <div className="mail mb-2">
                  <span style={{ fontWeight: '500' }}>Email:</span>
                  <Link to=""> demo@hasthemes.com</Link>
                </div>
                <div className="call mb-2">
                  <span style={{ fontWeight: '500' }}>Call us:</span>
                  <Link to=''> (08) 23 456 789</Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-3 col-lg-2 text-center text-md-start'>
              <p style={{ fontWeight: '500', fontSize: '18px' }}>Information</p>
              <ul className='p-0 m-0'>
                <li><Link to="">About Us</Link></li>
                <li><Link to="">Delivery Information</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
                <li><Link to="">Terms & Conditions</Link></li>
                <li><Link to="">Contact Us</Link></li>
                <li><Link to="">Site Map</Link></li>
              </ul>
            </div>
            <div className='col-12 col-md-3 col-lg-2 text-center text-md-start'>
              <p style={{ fontWeight: '500', fontSize: '18px' }}>Information</p>
              <ul className='p-0 m-0'>
                <li><Link to="">Brands</Link></li>
                <li><Link to="">Gift Certificates</Link></li>
                <li><Link to="">Affiliate</Link></li>
                <li><Link to="">Specials</Link></li>
                <li><Link to="">Returns</Link></li>
                <li><Link to="">Order History</Link></li>
              </ul>
            </div>
            <div className='col-12 col-md-6 col-lg-4 text-center text-md-start'>
              <p style={{ fontWeight: '500', fontSize: '18px' }}>Sign Up Newsletter</p>
              <p>Get updates by subscribe our weekly newsletter</p>
              <div className="box text-start" style={{ border: '1px solid #EDEDED', borderRadius: '25px', overflow: 'hidden', backgroundColor: '#40A944' }}>
                <input type='text' placeholder='Enter you email' className='border-0 p-3' style={{ width: '75%' }} />
                <Link to="" style={{ backgroundColor: '#40A944' }} className='an ms-2'>SUBSCRIBE</Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='sec-13 py-4 text-center' style={{ backgroundColor: '#40A944' }}>
        <Container>
          <Row>
            <div className="col-12 col-md-6 text-md-start d-flex align-items-center">
              <p className='m-sm-0 mb-3' style={{ color: 'white', fontSize: '14px' }}>Copyright © 2021 Safira . All Rights Reserved.Design By Safira</p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <Link to="">
                <img src={require('../images/asset 38.webp')} alt="" className='mx-2' style={{ borderRadius: '3px' }} />
              </Link>
              <Link to="">
                <img src={require('../images/asset 39.webp')} alt="" className='mx-2' style={{ borderRadius: '3px' }} />
              </Link>
              <Link to="">
                <img src={require('../images/asset 40.webp')} alt="" className='mx-2' style={{ borderRadius: '3px' }} />
              </Link>
              <Link to="">
                <img src={require('../images/asset 41.webp')} alt="" className='mx-2' style={{ borderRadius: '3px' }} />
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}
