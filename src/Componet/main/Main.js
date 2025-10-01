import React, { useState } from 'react';
import { FaPlane, FaCar } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import "./main.css";
import Contact from './contact/Contact';
import{motion} from "framer-motion"

export default function Main() {
    const [activ, setActiv] = useState("Flight")

    return (
        <main>
            <motion.div initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }} >
                <div className='blok'>
                    <div className='box1'>
                        <img src="/img/london2.jpg" alt="London" />

                        <div className='nav_tablo'>
                            <div className='navigation'>
                                <button onClick={() => { setActiv("Flight") }}>
                                    <FaPlane className='FaPlane' /> Flight
                                </button>
                                <button onClick={() => { setActiv("hotel") }}>
                                    <MdHotel className='MdHotel' /> Hotel
                                </button>
                                <button onClick={() => { setActiv("rentcar") }}>
                                    <FaCar className='FaCar' /> Rentcar
                                </button>
                            </div>
                            <div className='tablo'>

                                {activ === "Flight" && (
                                    <div className="samalet" >
                                        <h2>Travel the world with us</h2>
                                        <div className='inputs'>
                                            <div className='inp_1'> <p>From</p> <input type="text" placeholder='Departing from' /></div>
                                            <div className='inp_2'><p>To</p><input type="text" placeholder='Arriving at' /></div>
                                        </div>
                                        <div className='btn'><button>Serach and find dates</button></div>
                                    </div>
                                )

                                }
                                {activ === "hotel" && (
                                    <div className="hotel" >
                                        <h2>Find the best hotels</h2>
                                        <p>Book a hotel with us and get the best fares and promotions.</p>
                                        <p>We know hotels - we know comfort.</p>
                                        <div className='btn_2'>  <button>Serarch Hotels</button></div>
                                    </div>
                                )}
                                {
                                    activ === "rentcar" && (
                                        <div className='retcar'>
                                            <h2>Best car rental in the world!</h2>
                                            <p><span>DISCOUNT!</span>  Special offer if you book today: 25% off anywhere in the world with CarServiceRentalRUs</p>
                                            <div className='inp_3'> <input type="text" placeholder='Pick-up point' /></div>
                                            <div><button>Serach Availability</button></div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>
           </motion.div>
           
              <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1}}
                    viewport={{once:true,amount:0.3}}>
                <div className='blok2'>
                    <div className='good'>
                        <h2>Good Offers Right Now</h2>
                        <p>Up to 50% discount.</p>
                    </div>

                    <div className='box2'>
                        <div className='big_img'><img src="/img/cinqueterre.jpg" alt="cinqueterre" />  <p>Cinque Terre</p></div>
                        <div className='smal_img'>
                            <div className='smal'>
                                <div><img src="/img/newyork2.jpg" alt="New York" /> <p>New York</p></div>
                                <div><img src="/img/sanfran.jpg" alt="Sanfacisko" /> <p>San Francisco</p></div>
                            </div>
                            <div className='smal'>
                                <div><img src="/img/pisa.jpg" alt="Pisa" /> <p>Pisa</p></div>
                                <div><img src="/img/paris.jpg" alt="Paris" /> <p>Paris</p></div>
                            </div>

                        </div>
                    </div>

                    <div className='box3'>
                        <div className='exploer'> <h2>Explore Nature</h2> <p>Travel with us and see nature at its finest.</p></div>
                    </div>
                    <div className='Sea_mountain'>
                        <div className='sea'>
                            <img src="/img/ocean2.jpg" alt=" Sea" />
                            <div><h2>West Coast, Norway</h2>
                                <span>Roundtrip from $79</span>
                                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button>Buy Tickets</button></div>
                        </div>
                        <div className='tain'>
                            <img src="/img/mountains2.jpg" alt="mountain" />
                            <div>
                                <h2>Mountains, Austria</h2>
                                <span>One-way from $39</span>
                                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button>Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
                  </motion.div> 

           
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{once:true,amount:0.3}}>
              
                <div className='Blok3'>
                    <Contact />
                </div>
            </motion.div>
            
        </main>
    );
}