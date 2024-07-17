import React from 'react'
import './Navbar.css'
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='ContenierNav'>
            <div className="Navbar">
                <div className="NavbarMedme">
                    <h1>medme</h1>
                    <p>hybrid learing platfrom</p>
                </div>
                <div className="NavbarIcon">
                    <div className="NavbarManzil">
                        <p>+998 94 432 44 54</p>
                        <p>Toshkent sh. Yunusobod</p>
                    </div>
                    <div className="NavIcon">
                        <div className="NavbarInsta">
                            <Link to="https://www.instagram.com/">
                                <p><AiFillInstagram /></p>
                            </Link>
                        </div>
                        <div className="NavbarYoutobe">
                            <Link to="https://www.youtube.com/">
                                <p><FaYoutube /></p>
                            </Link>
                        </div>
                        <div className="NavbarTelgram">
                            <Link to="https://web.telegram.org/k/">
                                <p><FaTelegramPlane /></p>
                            </Link>
                        </div>
                    </div>
                    <p></p>
                    <div className="NavUZRS">
                        <b>Ru</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;