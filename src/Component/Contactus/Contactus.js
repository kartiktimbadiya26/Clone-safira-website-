import React from 'react'
import './Contactus.css'
import { FaFax } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function Contactus() {
      document.title = 'Safira - contact page';
      return (
            <>
                  <div className="contact-page">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3776869.482786959!2d71.3269721!3d22.41588245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704126766181!5m2!1sen!2sin" height={'400px'} width={'100%'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <div className="contact-detail">
                              <div className="container">
                                    <div className="row">
                                          <div className="col-12 col-sm-6">
                                                <div className="heading">Contact Us</div>
                                                <div className="detail">
                                                      <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                                                      <div className="line"></div>
                                                      <div className="fax">
                                                            <FaFax className='icon' />
                                                            <span>Address : Mota varachha , surat , Gujarat , India</span>
                                                      </div>
                                                      <div className="line"></div>
                                                      <div className="call d-flex align-items-center">
                                                            <IoIosCall className='icon' />
                                                            <Link to=''>98751 03176</Link>
                                                      </div>
                                                      <div className="line"></div>
                                                      <div className="mail d-flex align-items-center">
                                                            <CiMail className='icon' />
                                                            <Link to=''>cdmikartiktimbadiya@gmail.com</Link>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-12 col-sm-6 right">
                                                <div className="heading">Tell Us Your Project
                                                </div>
                                                <div className="detail">
                                                      <div className="part">
                                                            <div className="hea-2">Your Name (required)</div>
                                                            <input type="text" placeholder='Name*' />
                                                      </div>
                                                      <div className="part">
                                                            <div className="hea-2">Your Email (required)</div>
                                                            <input type="text" placeholder='Email*' />
                                                      </div>
                                                      <div className="part">
                                                            <div className="hea-2">Subject</div>
                                                            <input type="text" placeholder='Subject*' />
                                                      </div>
                                                      <div className="part">
                                                            <div className="hea-2">Your Message</div>
                                                            <textarea type="text" placeholder='Your Message*' />
                                                      </div>
                                                      <div className="part">
                                                            <button>Send</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bord-bottom"></div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
