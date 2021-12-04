import React from 'react'
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">
                        <a href='https://www.facebook.com/usman.mahmood.56808/'>
                            <i className="fa fa-facebook-square"></i>
                         </a>
                         {/* <a href='#'>
                            <i className="fa fa-google-plus-square"></i>
                         </a> */}
                         <a href='https://www.instagram.com/iusman__/'>
                            <i className="fa fa-instagram"></i>
                         </a>
                         <a href='https://www.linkedin.com/in/usman-mahmood-5a777b21a/'>
                            <i className="fa fa-linkedin-square"></i>
                         </a>
                         <a href='https://twitter.com/iusman__'>
                            <i className="fa fa-twitter"></i>
                         </a>
                        </div>
                         
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className="highlighted-text">Usman</span>
                    </span> 
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                           {" "}
                           <Typical 
                              loop={Infinity}
                              steps={[
                                "Enthusiastic Dev 😎",
                                1000,
                                "Full stack Developer 💻",
                                1000,
                                "Mern stack Dev 📱",
                                1000,
                                "Front-End Developer 🔴",
                                1000,
                                "React js Developer🌐",
                                1000,
                              ]}

                           />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of Building applications with frontend and backend operations
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                    Hire Me
                
                    </button>
                    <a href='Usmancv.pdf' download='Usman Usmancv.pdf'>
                    <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
            <div className="profile-picture-background">
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile
