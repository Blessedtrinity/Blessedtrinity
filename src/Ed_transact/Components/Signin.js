import React, {useState} from 'react'
import * as Faicons from "react-icons/fa";

export  function Signin() {

    const [showPassword, setShowPassword] = useState(false)

    const togglebutton = () =>{
        setShowPassword( showPassword => !showPassword)
    }



    return (
        <div id="container">
            <div id='parent'>
                {/* ---------------------------First div------------------------------------------ */}
                <div className='first_child'>
                    <div id="ed_transact">
                        <Faicons.FaWallet size="5.5rem" color="red"/>
                        <h2>Comp</h2>
                    </div>
                <div className="main_content">
                    <h3>Welcome to Comp</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="icons">
                        <span className="facebook_icon">
                            <Faicons.FaFacebookSquare size="2rem"/>
                            </span>
                        <span className="twitter_icon">
                            <Faicons.FaTwitter size="2rem"/>
                            </span>
                        <span className="linkedin_icon">
                            <Faicons.FaLinkedin size="2rem"/>
                            </span>
                        
                    </div>
                    </div>

                    
                </div>
                {/* ---------------------------Second div----------------------------------------------- */}
                <div className='second_child'>
                    <div className="header">
                            <h1>Sign in</h1>
                            <p>Sign in by entering your information below</p>
                    </div>

                    {/* -----------------form------------------------------------------------- */}
                    <form className="form">
                        <div className="username">
                            <label htmlfor="username">Username</label><br/>
                            <div className="username_icon"> <Faicons.FaUser color="grey"/></div>
                            <input 
                            type="text" 
                            placeholder="Enter Username" 
                            name="username" 
                            required
                            />
                        </div>

                        <div className="password">
                            <label htmlfor="password">password</label><br/>
                            <div className="password_icon"> <Faicons.FaKey color="grey"/></div>
                            <input 
                            type={showPassword? "text" : "password"} 
                            placeholder="Enter Password" 
                            name="password" 
                            required
                            />
                              <div className="eye_icon" onClick={togglebutton}>
                                  {showPassword ? <Faicons.FaEye/> :   <Faicons.FaEyeSlash/> }
                              </div>
                             
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" id="" name="check"/>
                            <p>Remember my Preference</p>
                        </div>

                        <div className="submit">
                            <button> Submit   </button>
                        </div>

                        <span className="bot">Don't have an account? <a href="#">Sign up</a></span>
                    
                       
                        </form>
                    
                </div>
            </div>
            
        </div>
    )
}

