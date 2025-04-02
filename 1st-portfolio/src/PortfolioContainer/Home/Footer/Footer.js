import React from 'react';
import "./Footer.css";
import shapeBg from "../../../assets/Home/shape-bg.png"; // Importing the image properly

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={shapeBg} 
                    alt='No internet connection' 
                />
            </div>
        </div>
    );
}

