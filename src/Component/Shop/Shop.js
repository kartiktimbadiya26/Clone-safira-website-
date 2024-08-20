import React from 'react'
import { Link } from "react-router-dom";
import './Shop.css'
import { GoPlus } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { TbGitCompare } from "react-icons/tb";
import { CiHeart } from "react-icons/ci"
import { FaAngleDown } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

export default function Shop() {
  document.title = 'Safira - shop';
  return (
    <>
      <div className="shop">
        <div className='banner'>
          <div className="container text-center">
            <h1>Shop</h1>
            <div className='trak'><Link to='/'>Home</Link> / <span>Shop</span></div>
          </div>
        </div>
        <div className="shop-body py-5">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 order-1 order-lg-0'>
                <div className="part1">
                  <div className="heading">WOMEN</div>
                  <div className="detail">
                    <Link to=''>Shoes<GoPlus /></Link>
                    <Link to=''>Bags<GoPlus /></Link>
                    <Link to=''>Clothing<GoPlus /></Link>
                  </div>
                </div>
                <div className="part2">
                  <div className="heading">FILTER BY PRICE</div>
                  <div className="detail">
                    <div className="slid"></div>
                    <div className="pri">
                      <Link to='' className="">Filter</Link>
                      ₹0 - ₹500
                    </div>
                  </div>
                </div>
                <div className="part3">
                  <div className="heading">SELECT BY COLOR</div>
                  <div className="detail">
                    <Link to=''>Black <span>(6)</span></Link>
                    <Link to=''>Blue <span>(8)</span></Link>
                    <Link to=''>Brown <span>(10)</span></Link>
                    <Link to=''>Green <span>(6)</span></Link>
                    <Link to=''>Pink <span>(4)</span></Link>
                  </div>
                </div>
                <div className="part4">
                  <div className="heading">SELECT BY SIZE</div>
                  <div className="detail">
                    <Link to=''>S<span>(6)</span></Link>
                    <Link to=''>M<span>(8)</span></Link>
                    <Link to=''>L<span>(10)</span></Link>
                    <Link to=''>XL<span>(6)</span></Link>
                    <Link to=''>XLL<span>(4)</span></Link>
                  </div>
                </div>
                <div className="part5">
                  <div className="heading">MANUFACTURER</div>
                  <div className="detail">
                    <Link to=''>Brake Parts<span>(6)</span></Link>
                    <Link to=''>Accessories<span>(10)</span></Link>
                    <Link to=''>Engine Parts<span>(4)</span></Link>
                    <Link to=''>hermes<span>(10)</span></Link>
                    <Link to=''>louis vuitton<span>(8)</span></Link>
                  </div>
                </div>
                <div className="part6">
                  <div className="heading">PRODUCT TAGS</div>
                  <div className="detail">
                    <Link to='' className='tag'>Men</Link>
                    <Link to='' className='tag'>Women</Link>
                    <Link to='' className='tag'>Watches</Link>
                    <Link to='' className='tag'>Bags</Link>
                    <Link to='' className='tag'>Dress</Link>
                    <Link to='' className='tag'>Belt</Link>
                    <Link to='' className='tag'>Accessories</Link>
                    <Link to='' className='tag'>Shoes</Link>
                  </div>
                </div>
                <div className="part7">
                  <img src={require('./images/asset 3.webp')} alt="" />
                </div>
              </div>
              <div className='col-lg-9 order-0 order-lg-1 px-4'>
                <div className="top-bar">
                  <div className="row">
                    <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-start py-2 align-items-center">
                      <Link to='' style={{ marginRight: '15px' }}><img src={require('./images/asset 28.webp')} alt="" /></Link>
                      <Link to='' style={{ marginRight: '15px' }}><img src={require('./images/asset 29.webp')} alt="" /></Link>
                      <Link to=''><img src={require('./images/asset 30.webp')} alt="" /></Link>
                    </div>
                    <div className="col-12 col-sm-4 d-flex justify-content-center py-2 ">
                      <div className="box">
                        <Link to=''>Sort by average rating <FaAngleDown /></Link>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 d-flex justify-content-center py-2 align-items-center justify-content-sm-end">
                      <span>Showing 1–9 of 21 results</span>
                    </div>
                  </div>
                </div>
                <div className="prod py-5">
                  <div className="row">
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 4.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Aliquam Consequat</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹26.00</div>
                          <div className="old">₹362.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 6.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Cas Meque Metus</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹32.00</div>
                          <div className="old">₹342.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 8.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Donec Ac Tempus</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹46.00</div>
                          <div className="old">₹322.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 10.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Donec Non Est</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹28.00</div>
                          <div className="old">₹382.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 12.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Etiam Gravida</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹26.00</div>
                          <div className="old">₹362.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 14.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Fusce Aliquam</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹36.00</div>
                          <div className="old">₹322.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 16.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Letraset Sheets</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹56.00</div>
                          <div className="old">₹286.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 5.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Lorem Ipsum Lec</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹26.00</div>
                          <div className="old">₹362.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 7.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Mauris Vel Tellus</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹65.00</div>
                          <div className="old">₹292.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 9.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Nunc Neque Eros</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹26.00</div>
                          <div className="old">₹362.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 11.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Proin Lectus Ipsum</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹44.00</div>
                          <div className="old">₹332.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="cs5-card col-12 col-sm-4">
                      <div className="top h-o">
                        <img src={require('./images/asset 13.webp')} alt="" width={'100%'} />
                        <div className="ho-box">
                          <ul className='d-flex justify-content-evenly p-0 m-0'>
                            <li><Link to=""><IoCartOutline /></Link></li>
                            <li><Link to=""><IoIosSearch /></Link></li>
                            <li><Link to=""><CiHeart /></Link></li>
                            <li><Link to=""><TbGitCompare /></Link></li>
                          </ul>
                        </div>
                        <div className="it-sale">SALE</div>
                        <div className="it-new">NEW</div>
                      </div>
                      <div className="botom">
                        <Link to=''>Quisque In Arcu</Link>
                        <Link to=''>Fruits</Link>
                        <div className="prise">
                          <div className="new">₹26.00</div>
                          <div className="old">₹362.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-bar">
                  <span className="box" style={{ backgroundColor: '#40A944', color: 'white' }}>1</span>
                  <span className="box">2</span>
                  <span className="box">3</span>
                  <span className="box1">next</span>
                  <span className="box1"><FaAnglesRight /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bord-bottom"></div>
        </div>
      </div>
    </>
  )
}
