import React from 'react'
import { Link } from 'react-router-dom'
import { FaAnglesRight } from "react-icons/fa6";
import './Blog.css';
export default function Blog() {
    document.title = 'Safira - blog';
    return (
        <>
            <div className="blog">
                <div className='banner'>
                    <div className="container text-center">
                        <h1>Blog</h1>
                        <div className='trak'><Link to='/'>Home</Link> / <span>Blog</span></div>
                    </div>
                </div>
                <div className="bottom-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                <div className="row g-4">
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 3.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Lorem Ipsum Dolor Sit Amet, Elit. Impedit, Aliquam Animi, Saepe Ex.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 4.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Dolor Sit Amet, Elit. Illo Iste Sed Animi Quaerat Nobis Odit Nulla.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 5.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 3.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Lorem Ipsum Dolor Sit Amet, Elit. Impedit, Aliquam Animi, Saepe Ex.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 4.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Dolor Sit Amet, Elit. Illo Iste Sed Animi Quaerat Nobis Odit Nulla.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 5.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 3.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Lorem Ipsum Dolor Sit Amet, Elit. Impedit, Aliquam Animi, Saepe Ex.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 4.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Dolor Sit Amet, Elit. Illo Iste Sed Animi Quaerat Nobis Odit Nulla.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <Link to=''><img src={require('./images/asset 5.webp')} alt="" width={'100%'} /></Link>
                                        <div className="detail">
                                            <Link to=''>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</Link>
                                            <div className="dat">
                                                <span>23/06/2021</span><Link to=''>eCommerce</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 right">
                                <div className="part1">
                                    <div className="heading">SEARCH</div>
                                    <div className="detail">
                                        <input type="text" className='py-2 px-4' placeholder={'Search...'} style={{ width: '100%', border: '1px solid #EDEDED' }} />
                                        <button>SEARCH</button>
                                    </div>
                                </div>
                                <div className="part2">
                                    <div className="heading">RECENT COMMENTS</div>
                                    <div className="detail">
                                        <div className="par-1 par">
                                            <div className="im">
                                                <Link to=''><img src={require('./images/asset 6.webp')} alt="" /></Link>
                                            </div>
                                            <div className="des">
                                                <Link to='' className='colo'>demo</Link>
                                                <span>says:</span>
                                                <Link to=''>Quisque semper nunc</Link>
                                            </div>
                                        </div>
                                        <div className="par-2 par">
                                            <div className="im">
                                                <Link to=''><img src={require('./images/asset 6.webp')} alt="" /></Link>
                                            </div>
                                            <div className="des">
                                                <Link to='' className='colo'>admin</Link>
                                                <span>says:</span>
                                                <Link to=''>admin says: Quisque orci porta...</Link>
                                            </div>
                                        </div>
                                        <div className="par-3 par">
                                            <div className="im">
                                                <Link to=''><img src={require('./images/asset 6.webp')} alt="" /></Link>
                                            </div>
                                            <div className="des">
                                                <Link to='' className='colo'>demo</Link>
                                                <span>says:</span>
                                                <Link to=''> Quisque semper nunc</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="part3">
                                    <div className="heading">RECENT POSTS</div>
                                    <div className="detail">
                                        <div className="part">
                                            <div className="im">
                                                <img src={require('./images/asset 7.webp')} alt="" /></div>
                                            <div className="des">
                                                <Link to=''>Blog Image Post</Link>
                                                <span>March 16, 2018</span>
                                            </div>
                                        </div>
                                        <div className="part">
                                            <div className="im">
                                                <img src={require('./images/asset 8.webp')} alt="" />
                                            </div>
                                            <div className="des">
                                                <Link to=''>Post With Gallery</Link>
                                                <span>March 16, 2018</span>
                                            </div>
                                        </div>
                                        <div className="part">
                                            <div className="im">
                                                <img src={require('./images/asset 9.webp')} alt="" />
                                            </div>
                                            <div className="des">
                                                <Link to=''>Post With Audio</Link>
                                                <span>March 16, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="part4">
                                    <div className="heading">CATEGORIES</div>
                                    <div className="detail">
                                        <Link to=''>Audio</Link>
                                        <Link to=''>Company</Link>
                                        <Link to=''>Gallery</Link>
                                        <Link to=''>Image</Link>
                                        <Link to=''>Other</Link>
                                        <Link to=''>Travel</Link>
                                    </div>
                                </div>
                                <div className="part5">
                                    <div className="heading">TAG PRODUCTS</div>
                                    <div className="detail">
                                        <Link to='' className='tag'>asian</Link>
                                        <Link to='' className='tag'>brown</Link>
                                        <Link to='' className='tag'>euro</Link>
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
                <div className="container">
                    <div className="bord-bottom"></div>
                </div>
            </div>
        </>
    )
}
