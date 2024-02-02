import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
export default function About() {
      document.title = 'Safira - about us';
      return (
            <>
                  <div className="aboutus-page">
                        <div className='banner'>
                              <div className="container text-center">
                                    <h1>About Us</h1>
                                    <div className='trak'><Link to='/'>Home</Link> / <span>About Us</span></div>
                              </div>
                        </div>
                        <div className="container">
                              <div className="part1 text-center py-5">
                                    <div className="im">
                                          <img src={require('./images/asset 3.webp')} alt="" width={'100%'} />
                                    </div>
                                    <div className="tit">We Are A Digital Agency Focused On Delivering Content And Utility User-Experiences.</div>
                                    <p>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.</p>
                                    <div className="sig"><img src={require('./images/asset 4.webp')} alt="" /></div>
                              </div>
                        </div>

                        <div className="part2">
                              <div className="container d-flex g-4">
                                    <div className="row">
                                          <div className="im-card col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 5.webp')} alt="" />
                                                </div>
                                                <div className="head-ing">Creative Design</div>
                                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                          </div>
                                          <div className="im-card col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 6.webp')} alt="" />
                                                </div>
                                                <div className="head-ing">100% Money Back Guarantee</div>
                                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                          </div>
                                          <div className="im-card col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 7.webp')} alt="" />
                                                </div>
                                                <div className="head-ing">Online Support 24/7</div>
                                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="container">
                              <div className="part3 py-5">
                                    <div className="row">
                                          <div className="cs-card-10 col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 8.webp')} alt="" width={'100%'} />
                                                </div>
                                                <div className="detail">
                                                      <div className="hed-2">
                                                            What Do We Do?
                                                      </div>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                                </div>
                                          </div>
                                          <div className="cs-card-10 col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 9.webp')} alt="" width={'100%'} />
                                                </div>
                                                <div className="detail">
                                                      <div className="hed-2">
                                                            What Do We Do?
                                                      </div>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                                </div>
                                          </div>
                                          <div className="cs-card-10 col-12 col-sm-4">
                                                <div className="im">
                                                      <img src={require('./images/asset 10.webp')} alt="" width={'100%'} />
                                                </div>
                                                <div className="detail">
                                                      <div className="hed-2">
                                                            What Do We Do?
                                                      </div>
                                                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="bord-bottom"></div>
                              <div className="part4 py-5">
                                    <div className="row">
                                          <div className="col-6">
                                                <div className="tit-2">
                                                      What Can We Do For You ?
                                                </div>
                                                <div className="accordion" id="accordionExample">
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        Fast Free Delivery
                                                                  </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                                  <div className="accordion-body">
                                                                        Nam liber tempor cum soluta nobis eleifend option.
                                                                        <br /><br />
                                                                        Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                                                                        <br /><br />
                                                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        More Than 30 Years In The Business
                                                                  </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                  <div className="accordion-body">
                                                                        Nam liber tempor cum soluta nobis eleifend option.
                                                                        <br /><br />
                                                                        Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                                                                        <br /><br />
                                                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        100% Organic Foods
                                                                  </button>
                                                            </h2>
                                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                  <div className="accordion-body">
                                                                        Nam liber tempor cum soluta nobis eleifend option.
                                                                        <br /><br />
                                                                        Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                                                                        <br /><br />
                                                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                        Best Shopping Strategies
                                                                  </button>
                                                            </h2>
                                                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                  <div className="accordion-body">
                                                                        Nam liber tempor cum soluta nobis eleifend option.
                                                                        <br /><br />
                                                                        Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                                                                        <br /><br />
                                                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-6">
                                                <div className="tit-2">
                                                      What Our Customers Says ?
                                                </div>
                                                <div className="detail slider-about">
                                                      <OwlCarousel className='owl-theme' loop margin={10} items={1} id='slider-about'>
                                                            <div class='item'>
                                                                  <div className="im">
                                                                        <img src={require('./images/asset 14.webp')} alt="" />
                                                                  </div>
                                                                  <div className="detail">
                                                                        <div className="icon"><img src={require('./images/asset 12.webp')} alt="" width={'27px'} /></div>
                                                                        <p>I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..</p>
                                                                        <Link to=''>Lindsy Neloms</Link>
                                                                  </div>
                                                            </div>
                                                            <div class='item'>
                                                                  <div className="im">
                                                                        <img src={require('./images/asset 11.webp')} alt="" />
                                                                  </div>
                                                                  <div className="detail">
                                                                        <div className="icon"><img src={require('./images/asset 12.webp')} alt="" width={'27px'} /></div>
                                                                        <p>I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..</p>
                                                                        <Link to=''>Rebecka Filson</Link>
                                                                  </div>
                                                            </div>
                                                            <div class='item'>
                                                                  <div className="im">
                                                                        <img src={require('./images/asset 13.webp')} alt="" />
                                                                  </div>
                                                                  <div className="detail">
                                                                        <div className="icon"><img src={require('./images/asset 12.webp')} alt="" width={'27px'} /></div>
                                                                        <p>I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..</p>
                                                                        <Link to=''>Amber Laha</Link>
                                                                  </div>
                                                            </div>
                                                      </OwlCarousel>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="bord-bottom"></div>
                        </div>
                  </div>
            </>
      )
}
