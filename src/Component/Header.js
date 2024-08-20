import React from 'react'
import { Link } from "react-router-dom";
import { Offcanvas, Button, Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaCaretRight, FaAngleDown, FaChevronDown } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { CiYoutube, CiHeart } from "react-icons/ci"
import { ImInstagram } from "react-icons/im";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty, IoMdMenu, IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline, IoReorderThreeOutline } from "react-icons/io5";
import { TbGitCompare } from "react-icons/tb";
export default function Header() {
  return (
    <>
      <div className="top-info d-none d-lg-block" style={{ borderBottom: '1px solid #D9D9D9 ', fontSize: '14px' }}>
        <div className="container d-flex justify-content-between py-2">
          <div className="part1">
            <Link to="" className="pe-3" style={{ borderRight: '2px solid #D9D9D9' }}>Language<FaAngleDown className='ms-2' /></Link>
            <Link to="" className="ps-3" >Currency<FaAngleDown className='ms-2' /></Link>
          </div>
          <div className="part2">
            <ul className='d-flex m-0'>
              <li className='ms-3'><Link to=""><FaTwitter /></Link></li>
              <li className='ms-3'><Link to=""><TiSocialGooglePlus /></Link></li>
              <li className='ms-3'><Link to=""><CiYoutube /></Link></li>
              <li className='ms-3'><Link to=""><FaFacebookF /></Link></li>
              <li className='ms-3'><Link to=""><ImInstagram /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <header className='pt-5'>
        <Container>
          <div className="part-1 mb-2">
            <Row>
              <div className='col d-flex align-items-center justify-content-start'>
                <div className="img">
                  <img src={require('../images/asset 0.webp')} alt="" />
                </div>
              </div>
              <div className='col-6 d-none d-lg-block'>
                <div className="search d-flex" style={{ border: '1px solid #F5F5F5', borderRadius: '25px', height: '45px', overflow: 'hidden' }}>
                  <div className="pa-1 d-flex align-items-center justify-content-center" style={{ width: '35%', backgroundColor: '#F5F5F5' }}>
                    <Link to="">Select a categories <FaAngleDown /></Link>
                  </div>
                  <div className="pa-2" style={{ width: '50%' }}>
                    <input type="text" className='border-0 p-2' defaultValue={'Search product...'} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="pa-3 d-flex align-items-center justify-content-center" style={{ width: '15%', backgroundColor: '#40A944', fontSize: '200%', color: 'white' }}>
                    <IoIosSearch />
                  </div>
                </div>
              </div>
              <div className='col d-flex align-items-center justify-content-end'>
                <div className="re d-none d-sm-block">
                  <Link to="" className='me-1'>REGISTER</Link>/<Link to="" className='ms-1'>LOGIN</Link>
                </div>
                <div className="lik d-flex align-items-center justify-content-center ms-3">
                  <Link to="" className='d-flex align-items-center justify-content-center me-4'>
                    <CiHeart style={{ fontSize: '175%' }} className='me-2' />
                    <div className="circal d-flex align-items-center justify-content-center" style={{ height: '20px', width: '20px', backgroundColor: '#F5F5F5', borderRadius: '50%' }}>3</div>
                  </Link>
                  <Link to="" className='d-flex align-items-center justify-content-center'>
                    <BsCart3 style={{ fontSize: '150%' }} className='me-2' />
                    <div className="circal d-flex align-items-center justify-content-center" style={{ height: '20px', width: '20px', backgroundColor: '#F5F5F5', borderRadius: '50%' }}>2</div>
                  </Link>
                </div>
              </div>
              <div className="col d-lg-none">
                <div className="button d-flex align-items-center justify-content-end">
                  <div className="outl" style={{ padding: '5px', border: '1px solid black' }}>
                    <IoReorderThreeOutline style={{ fontSize: '30px' }} />
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className="part-2 d-none d-lg-block">
            <Row>
              <div className="col-lg-3">
                <Link to="" className='but'>
                  <IoReorderThreeOutline style={{ fontSize: '30px' }} /> ALL Cattegories<FaAngleDown />
                </Link>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <nav>
                  <ul className='d-flex align-items-center m-0 p-0 main-menu'>
                    <li><Link to="/" className='fi si'>Home<FaAngleDown /></Link>
                      <ul className="sub-menu">
                        <li>ORGANIC
                          <ul>
                            <li><Link to="">Organic 01</Link></li>
                            <li><Link to="">Organic 02</Link></li>
                            <li><Link to="">Organic 03</Link></li>
                            <li><Link to="">Organic 04</Link></li>
                            <li><Link to="">Organic 05</Link></li>
                          </ul></li>
                        <li>FASHION
                          <ul>
                            <li><Link to="">Fashion 01</Link></li>
                            <li><Link to="">Fashion 02</Link></li>
                            <li><Link to="">Fashion 03 (Comming Soon)</Link></li>
                            <li><Link to="">Fashion 04 (Comming Soon)</Link></li>
                          </ul></li>
                        <li>COSMETIC
                          <ul>
                            <li><Link to="">Cosmetic 01</Link></li>
                            <li><Link to="">Cosmetic 02</Link></li>
                            <li><Link to="">Cosmetic 03 (Comming Soon)</Link></li>
                            <li><Link to="">Cosmetic 04 (Comming Soon)</Link></li>
                          </ul></li>
                      </ul>
                    </li>
                    <li><Link className='si' to="/shop">Shop</Link></li>
                    <li><Link className='si' to="/blog">Blog</Link></li>
                    <li><Link className='si' to="/about">About Us</Link></li>
                    <li><Link className='si' to="/contact">Contact Us</Link></li>
                    <li><Link className='si' to="/privacy">Privacy Policy</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-end">
                <img src={require('../images/asset 46.webp')} alt="" />
                <div className="det d-flex align-items-end flex-column ms-2">
                  <Link to="">98751 03176</Link>
                  <span>Customer Support</span>
                </div>
              </div>
            </Row>
          </div>
          <div className="part-3 py-4 d-lg-none d-block">
            <Row className='g-4'>
              <div className="col text-center d-sm-none">
                <div className="sele d-flex w-75 m-auto align-items-center px-3 py-2" style={{ backgroundColor: '#F5F5F5', borderRadius: '5px' }}>
                  <span className='w-75'>Select a categories</span>
                  <span className='w-25'><FaAngleDown /></span>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="search d-flex" style={{ border: '1px solid #F5F5F5', borderRadius: '8px', height: '45px', overflow: 'hidden', fontSize: '12px' }}>
                  <div className='d-none d-sm-block'>
                    <div className="pa-1 d-flex align-items-center justify-content-center" style={{ width: '35%', backgroundColor: '#F5F5F5' }}>
                      <Link to="">Select a categories <FaAngleDown /></Link>
                    </div>
                  </div>
                  <div className="pa-2" style={{ width: '50%' }}>
                    <input type="text" className='border-0 p-2' defaultValue={'Search product...'} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="pa-3 d-flex align-items-center justify-content-center" style={{ width: '15%', backgroundColor: '#40A944', fontSize: '200%', color: 'white' }}>
                    <IoIosSearch />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <Link to="" className='but-3'>
                  <IoReorderThreeOutline style={{ fontSize: '30px' }} /> <span>ALL Cattegories<FaAngleDown className='ms-3' /></span>
                </Link>
              </div>
            </Row>
          </div>
        </Container>
      </header>
    </>
  )
}
