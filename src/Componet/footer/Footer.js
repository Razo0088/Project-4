import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter, FaSnapchat } from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";
import"./footer.css"
export default function Footer() {
    return (
        <footer>
            <div className='foot'>
                <h3>Find Us On</h3>
                <div className='icons'>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://www.facebook.com/"><FaFacebookSquare/></a>
                    <a href="https://www.pinterest.com/"><LiaPinterestP/></a>
                    <a href="https://www.linkedin.com/feed/"><FaLinkedinIn/></a>
                    <a href="https://twitter.com"><FaTwitter/></a>
                    <a href="https://www.snapchat.com/"><FaSnapchat/></a>
                </div>
                <p>Travel to <a href="https://armenia.travel/ru/">Armenia</a></p>


            </div>

        </footer>
    )
}
