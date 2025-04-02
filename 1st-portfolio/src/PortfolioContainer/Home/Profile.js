import React from 'react'
// import Typical from 'react-typical'
import "./Profile.css"
export default function Profile() {
    return (
        <div className='profile-Container '>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>


                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='heighlighted'>Ehiedu</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                {/* <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev ",
                                        1000,
                                        "Full Stack Developer",
                                        1000,
                                        "MERN Stack Dev",
                                        1000,
                                        "Cross Platform v",
                                        1000,
                                        "React/React Native Dev",
                                        1000,
                                    ]}
                                /> */}
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end oprations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-option'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='ehizcv.pdf' download='Ehiedu ehizcv.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}


