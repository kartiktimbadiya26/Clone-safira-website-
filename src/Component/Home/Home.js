import React from 'react'
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaCaretRight, FaAngleDown, FaChevronDown } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { CiYoutube, CiHeart } from "react-icons/ci"
import { ImInstagram } from "react-icons/im";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty, IoMdMenu, IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline, IoReorderThreeOutline } from "react-icons/io5";
import { TbGitCompare } from "react-icons/tb";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Offcanvas, Button, Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  const sli_2 = {
    responsive: {
      0: {
        items: 1
      },
      578: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }
  const sli_3 = {
    responsive: {
      0: {
        items: 1
      },
      578: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }
  const sli_4 = {
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    }
  }
  const sli_5 = {
    responsive: {
      0: {
        items: 1
      },
      578: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }
  const sli_6 = {
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
    }
  }
  const sli_7 = {
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
    }
  }
  const sli_8 = {
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
    }
  }
  return (
    <>
      <OwlCarousel className='owl-theme' loop margin={10} items={1} id='slider1'>
        <div className='item item1'>
          <div className="content container">
            <Row>
              <div className="col-lg-6">
                <h1>Vegetables Big Sale</h1>
                <p className='des'>Fresh Farm Products</p>
                <p className='det'>10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!</p>
                <Link to="" className='btn' style={{ marginTop: '25px' }}>READ MORE</Link>
              </div>
            </Row>
          </div>
        </div>
        <div className='item item2'>
          <div className="content container">
            <Row>
              <div className="col-lg-6">
                <h1>Vegetables Big Sale</h1>
                <p className='des'>Fresh Farm Products</p>
                <p className='det'>10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!</p>
                <Link to="" className='btn' style={{ marginTop: '25px' }}>READ MORE</Link>
              </div>
            </Row>
          </div>
        </div>
        <div className='item item3'>
          <div className="content container">
            <Row>
              <div className="col-lg-6">
                <h1>Vegetables Big Sale</h1>
                <p className='des'>Fresh Farm Products</p>
                <p className='det'>10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!</p>
                <Link to="" className='btn' style={{ marginTop: '25px' }}>READ MORE</Link>
              </div>
            </Row>
          </div>
        </div>
      </OwlCarousel>
      <section className='sec-2 mt-5'>
        <Container>
          <Row className='flex-wrap-wrap gx-0'>
            <div className="col-lg-3 col-sm-6 col-12 d-flex py-3 px-2">
              <div className="icon" style={{ marginRight: '10px' }}>
                <img src={require('../../images/asset 3.webp')} alt="" />
              </div>
              <div className="detail">
                <p className='he'>FREE SHIPPING</p>
                <p className='de'>Free shipping on all US order or order above $200</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex py-3 px-2">
              <div className="icon" style={{ marginRight: '10px' }}>
                <img src={require('../../images/asset 4.webp')} alt="" />
              </div>
              <div className="detail">
                <p className='he'>Support 24/7</p>
                <p className='de'>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex py-3 px-2">
              <div className="icon" style={{ marginRight: '10px' }}>
                <img src={require('../../images/asset 5.webp')} alt="" />
              </div>
              <div className="detail">
                <p className='he'>30 Days Return</p>
                <p className='de'>Simply return it within 30 days for an exchange</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex py-3 px-2">
              <div className="icon" style={{ marginRight: '10px' }}>
                <img src={require('../../images/asset 6.webp')} alt="" />
              </div>
              <div className="detail">
                <p className='he'>100% Payment Secure</p>
                <p className='de'>We ensure secure payment with PEV</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='sec-3 py-5'>
        <Container>
          <div className="top text-center">
            <i>Recently added our store</i>
            <p>Trending Products</p>
            <div className="select">
              <Link to="" style={{ color: '#40A944', border: '1px solid #40A944' }}>VEGETABLES</Link>
              <Link to="">FRUITS</Link>
              <Link to="">SALADS</Link>
            </div>
          </div>
          <div className="bottom mt-5">
            <OwlCarousel className='owl-theme' loop margin={10} nav items={5} dots={false} id='slider2' {...sli_2}>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 22.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Aliquam Consequat</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 18.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Donec Non Est</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$46.00</span>
                      <span className="old">$382.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 7.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Etiam Gravida</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$56.00</span>
                      <span className="old">$322.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 9.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Fusce Aliquam</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$66.00</span>
                      <span className="old">$312.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 11.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Letraset Sheets</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$36.00</span>
                      <span className="old">$262.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 13.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Lorem Ipsum Lec</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$36.00</span>
                      <span className="old">$145.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 15.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Mauris Vel Tellus</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$48.00</span>
                      <span className="old">$257.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 14.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Nunc Neque Eros</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$35.00</span>
                      <span className="old">$245.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 26.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Proin Lectus Ipsum</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 27.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Quisque In Arcu</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$55.00</span>
                      <span className="old">$235.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs-card pb-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 8.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Cas Meque Metus</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
                <div className="cs-card mt-4">
                  <div className="img h-o">
                    <img src={require('../../images/asset 9.webp')} alt="" width={'100%'} />
                    <div className="ho-box">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Aliquam Consequat</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$46.00</span>
                      <span className="old">$382.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container >
      </section >
      <section className='sec-4'>
        <div className="container">
          <Row className='gy-5'>
            <div className="col-12 col-sm-6 e1">
              <Link to="">
                <img src={require('../../images/asset 20.webp')} alt="" width={'100%'} className='' />
              </Link>
            </div>
            <div className="col-12 col-sm-6 text-end e2">
              <Link to="">
                <img src={require('../../images/asset 21.webp')} alt="" width={'100%'} />
              </Link>
            </div>
          </Row>
        </div>
      </section>
      <section className='sec-5 py-5'>
        <div className="top text-center">
          <i>Recently added our store</i>
          <p>Deals Of The Weeks</p>
        </div>
        <div className="bottom px-5">
          <OwlCarousel className='owl-theme' loop margin={25} nav items={5} id='slider3' dots={false} {...sli_3}>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img h-o">
                  <img src={require('../../images/asset 8.webp')} alt="" width={'100%'} />
                  <div className="ho-box">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Mauris Vel Tellus</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$48.00</span>
                    <span className="old">$257.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img h-o">
                  <img src={require('../../images/asset 22.webp')} alt="" width={'100%'} />
                  <div className="ho-box">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Nunc Neque Eros</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$35.00</span>
                    <span className="old">$245.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img h-o">
                  <img src={require('../../images/asset 24.webp')} alt="" width={'100%'} />
                  <div className="ho-box">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Proin Lectus Ipsum</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$26.00</span>
                    <span className="old">$362.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img h-o">
                  <img src={require('../../images/asset 13.webp')} alt="" width={'100%'} />
                  <div className="ho-box">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Quisque In Arcu</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$55.00</span>
                    <span className="old">$235.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img h-o">
                  <img src={require('../../images/asset 17.webp')} alt="" width={'100%'} />
                  <div className="ho-box">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Cas Meque Metus</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$26.00</span>
                    <span className="old">$362.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className="cs-card pb-4">
                <div className="img">
                  <img src={require('../../images/asset 23.webp')} alt="" width={'100%'} />
                  <div className="ho-box h-o">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                  <div className="it-sale">SALE</div>
                  <div className="it-new">NEW</div>
                </div>
                <div className="detail text-center">
                  <Link to="" className='na'>Aliquam Consequat</Link>
                  <Link to="" className='ty'>Fruits</Link>
                  <div className="prise d-flex justify-content-evenly">
                    <span className="new">$26.00</span>
                    <span className="old">$362.00</span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className='sec-6'>
        <div className="banner">
          <div className="container">
            <div className="detail">
              <p className='l1'>BLACK FRIDAYS !</p>
              <h1>SALE 50% OFF</h1>
              <p className='l2'>ALL VEGETABLE PRODUCTS</p>
              <Link to="" className='btn mt-5'>DISCOVER NOW</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='sec-7 py-5'>
        <Container>
          <div className="top text-center">
            <i>Recently added our store</i>
            <p>Best Sellers</p>
          </div>
          <div className="bottom mt-3">
            <Row>
              <div className="col-12 col-sm-4">
                <img src={require('../../images/asset 30.webp')} alt="" width={'100%'} />
              </div>
              <div className="col-12 col-sm-8">
                <OwlCarousel className='owl-theme' loop margin={25} nav {...sli_4} dots={false} id='slider4'>
                  <div className='item'>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 15.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Mauris Vel Tellus</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$48.00</span>
                          <span className="old">$257.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 19.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Donec Non Est</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$46.00</span>
                          <span className="old">$382.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 10.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Donec Non Est</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$46.00</span>
                          <span className="old">$382.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 16.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Aliquam Consequat</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$26.00</span>
                          <span className="old">$362.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 18.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Donec Non Est</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$46.00</span>
                          <span className="old">$382.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 7.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Mauris Vel Tellus</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$56.00</span>
                          <span className="old">$362.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 9.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Quisque In Arcu</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$20.00</span>
                          <span className="old">$352.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 11.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Cas Meque Metus</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$72.00</span>
                          <span className="old">$352.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs3-card d-flex mb-4 h-o2">
                      <div className="img">
                        <img src={require('../../images/asset 13.webp')} alt="" />
                      </div>
                      <div className="detail ps-3" style={{ width: '99%' }}>
                        <Link to="" className='na'>Proin Lectus Ipsum</Link>
                        <Link to="" className='ty'>Fruits</Link>
                        <div className="prise d-flex justify-content-between">
                          <span className="new">$36.00</span>
                          <span className="old">$282.00</span>
                        </div>
                      </div>
                      <div className="ho-box2">
                        <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                          <li><Link to=""><IoCartOutline /></Link></li>
                          <li><Link to=""><IoIosSearch /></Link></li>
                          <li><Link to=""><CiHeart /></Link></li>
                          <li><Link to=""><TbGitCompare /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </Row>
          </div>
        </Container>
      </section>
      <section className='sec-8 py-5'>
        <Container>
          <div className="top text-center">
            <i>Recently added our store</i>
            <p>Mostview Products</p>
          </div>
          <div className="bottom">
            <OwlCarousel className='owl-theme' loop margin={25} nav items={5} id='slider5' dots={false} {...sli_5}>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 13.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Quisque In Arcu</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$55.00</span>
                      <span className="old">$235.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 17.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Cas Meque Metus</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 9.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Aliquam Consequat</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 8.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Mauris Vel Tellus</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$48.00</span>
                      <span className="old">$257.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 16.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Nunc Neque Eros</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$35.00</span>
                      <span className="old">$245.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img h-o">
                    <img src={require('../../images/asset 19.webp')} alt="" />
                    <div className="ho-box h-o">
                      <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                        <li><Link to=""><IoCartOutline /></Link></li>
                        <li><Link to=""><IoIosSearch /></Link></li>
                        <li><Link to=""><CiHeart /></Link></li>
                        <li><Link to=""><TbGitCompare /></Link></li>
                      </ul>
                    </div>
                    <div className="it-sale">SALE</div>
                    <div className="it-new">NEW</div>
                  </div>
                  <div className="detail text-center">
                    <Link to="" className='na'>Proin Lectus Ipsum</Link>
                    <Link to="" className='ty'>Fruits</Link>
                    <div className="prise d-flex justify-content-evenly">
                      <span className="new">$26.00</span>
                      <span className="old">$362.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>
      </section>
      <section className='sec-9 py-5' style={{ backgroundColor: '#F4F4F4' }}>
        <Container className='py-5'>
          <div className="top text-center">
            <i>Our recent articles about Organic</i>
            <p>Our Blog Posts</p>
          </div>
          <div className="bottom">
            <OwlCarousel className='owl-theme' loop margin={25} nav items={3} id='slider6' dots={false} {...sli_6}>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img">
                    <img src={require('../../images/asset 33.webp')} alt="" />
                  </div>
                  <div className="detail text-start p-4" style={{ backgroundColor: 'white' }}>
                    <div className="line-1">
                      <span className='date me-2' style={{ fontSize: '15px' }}>23/06/2021</span>|<Link to="" className='ms-2' style={{ fontSize: '15px' }}>eCommerce</Link>
                    </div>
                    <div className="line-2 mt-3 mb-5" style={{ width: '90%' }}>
                      <Link to="" style={{ fontSize: '18px', lineHeight: '1.1' }}>Lorem ipsum dolor sit amet,  elit. Impedit, aliquam animi, saepe ex.</Link>
                    </div>
                    <div className="line-3 d-flex">
                      <Link to="" className='d-block me-2'>SHOW MORE</Link>
                      <div className="mi-ci d-flex text-center p-1" style={{ height: '17px', width: '17px', borderRadius: '50%', backgroundColor: '#40A944' }}><FaCaretRight style={{ color: 'white', fontSize: '12px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img">
                    <img src={require('../../images/asset 31.webp')} alt="" />
                  </div>
                  <div className="detail text-start p-4" style={{ backgroundColor: 'white' }}>
                    <div className="line-1">
                      <span className='date me-2' style={{ fontSize: '15px' }}>23/06/2021</span>|<Link to="" className='ms-2' style={{ fontSize: '15px' }}>eCommerce</Link>
                    </div>
                    <div className="line-2 mt-3 mb-5" style={{ width: '90%' }}>
                      <Link to="" style={{ fontSize: '18px', lineHeight: '1.1' }}> dolor sit amet, elit. Illo iste sed animi quaerat  nobis odit  nulla.</Link>
                    </div>
                    <div className="line-3 d-flex">
                      <Link to="" className='d-block me-2'>SHOW MORE</Link>
                      <div className="mi-ci d-flex text-center p-1" style={{ height: '17px', width: '17px', borderRadius: '50%', backgroundColor: '#40A944' }}><FaCaretRight style={{ color: 'white', fontSize: '12px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs4-card">
                  <div className="img">
                    <img src={require('../../images/asset 32.webp')} alt="" />
                  </div>
                  <div className="detail text-start p-4" style={{ backgroundColor: 'white' }}>
                    <div className="line-1">
                      <span className='date me-2' style={{ fontSize: '15px' }}>23/06/2021</span>|<Link to="" className='ms-2' style={{ fontSize: '15px' }}>eCommerce</Link>
                    </div>
                    <div className="line-2 mt-3 mb-5" style={{ width: '90%' }}>
                      <Link to="" style={{ fontSize: '18px', lineHeight: '1.1' }}>maxime laborum voluptas minus, est, unde eaque esse tenetur.</Link>
                    </div>
                    <div className="line-3 d-flex">
                      <Link to="" className='d-block me-2'>SHOW MORE</Link>
                      <div className="mi-ci d-flex text-center p-1" style={{ height: '17px', width: '17px', borderRadius: '50%', backgroundColor: '#40A944' }}><FaCaretRight style={{ color: 'white', fontSize: '12px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>
      </section>
      <section className='sec-10 py-5'>
        <Container className='py-5'>
          <div className="top text-center pb-5">
            <i>Recently added our store</i>
            <p>Featured Products</p>
          </div>
          <div className="bottom">
            <OwlCarousel className='owl-theme' loop margin={75} nav={true} dots={false} id='slider7' {...sli_7}>
              <div className='item'>
                <div className="cs5-card d-flex mb-5  h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 9.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Quisque In Arcu</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$20.00</span>
                      <span className="new">$352.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 11.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Cas Meque Metus</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$72.00</span>
                      <span className="new">$352.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 13.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Proin Lectus Ipsum</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$36.00</span>
                      <span className="new">$282.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 15.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Mauris Vel Tellus</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$45.00</span>
                      <span className="new">$162.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 12.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Donec Non Est</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$46.00</span>
                      <span className="new">$382.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 10.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Donec Non Est</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$46.00</span>
                      <span className="new">$382.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 22.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Aliquam Consequat</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$26.00</span>
                      <span className="new">$362.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 13.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Donec Non Est</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$46.00</span>
                      <span className="new">$382.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="cs5-card d-flex mb-5 h-o2">
                  <div className="img" style={{ width: '35%' }}><img src={require('../../images/asset 11.webp')} alt="" /></div>
                  <div className="detail ms-3 d-flex flex-column" style={{ width: '65%' }}>
                    <Link to="" style={{ fontSize: '18px' }} className='mb-2'>Mauris Vel Tellus</Link>
                    <Link to="" style={{ fontSize: '15px' }} className='mb-2'>Fruits</Link>
                    <div className="prise" style={{ fontSize: '15px' }}>
                      <span className="old me-5" style={{ color: '#40A944' }}>$56.00</span>
                      <span className="new">$362.00</span>
                    </div>
                  </div>
                  <div className="ho-box2">
                    <ul className='d-flex justify-content-evenly p-0 m-0' style={{ fontSize: '18px' }}>
                      <li><Link to=""><IoCartOutline /></Link></li>
                      <li><Link to=""><IoIosSearch /></Link></li>
                      <li><Link to=""><CiHeart /></Link></li>
                      <li><Link to=""><TbGitCompare /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>
      </section>
      <section className='sec-11'>
        <Container style={{ border: '1px solid #EFEFEF', borderRadius: '10px' }} className='p-4'>
          <OwlCarousel className='owl-theme' loop margin={25} dots={false} id='slider8' {...sli_8}>
            <div className='item'>
              <img src={require('../../images/asset 34.webp')} alt="" style={{ opacity: '0.5' }} />
            </div>
            <div className='item'>
              <img src={require('../../images/asset 35.webp')} alt="" style={{ opacity: '0.5' }} />
            </div>
            <div className='item'>
              <img src={require('../../images/asset 36.webp')} alt="" style={{ opacity: '0.5' }} />
            </div>
            <div className='item'>
              <img src={require('../../images/asset 37.webp')} alt="" style={{ opacity: '0.5' }} />
            </div>
          </OwlCarousel>
        </Container>
      </section>
    </>
  )
}
