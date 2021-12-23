import React from 'react';
import * as Faicons from "react-icons/fa";

export const Signup = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const togglebutton = () =>{
        setShowPassword( showPassword => !showPassword)
    }

    return (
        <div id="container">
            
            <div id="main_content">
                <div id='header_content'>
                    <Faicons.FaArtstation size='4.5rem' color='grey'/>
                    <h2>Dompet</h2>
                </div>
                    <div id='body_content'>
                        <div className="">
                            <div className="signup_header">
                                <h1>Sign up</h1>
                                <p>Sign up by entering your data below</p>
                            </div>
                            
                            {/* ----------------------------------form---------------------------------------- */}
                            <form className="form">

                                <div className="referal">
                                    <div className="referal_icon"> <Faicons.FaUserFriends color="grey"/></div>
                                    <div className="sign_username_icon"></div>
                                    <input 
                                    type="text" 
                                    placeholder="Enter referal id" 
                                    name="username"
                                     autoComplete="off"
                                    required
                                    />
                                </div>

                                <div className="signup_email">
                                    <div className="email_icon"> <Faicons.FaEnvelope color="grey"/></div>
                                    <input 
                                    type="email" 
                                    placeholder="Enter Email" 
                                    name="email"
                                    autoComplete="off" 
                                    required
                                    />
                                </div>


                                <div className="cont">
                                    <div className="signup_surname">
                                        <div className="surname_icon"> <Faicons.FaUserAlt color="grey"/></div>
                                        <input 
                                        type="text" 
                                        placeholder="Enter Surname" 
                                        name="username"
                                        autoComplete="off"  
                                        required
                                        />
                                    </div>
                                    <div className="signup_othername">
                                        <div className="othername_icon"> <Faicons.FaUserAlt color="grey"/></div>
                                        <input 
                                        type="text" 
                                        placeholder="Enter Other names" 
                                        name="other_name" 
                                        autoComplete="off" 
                                        required
                                        />
                                    </div>
                                </div>


                                <div className="cont">
                                    <div className="signup_username">
                                        <div className="sign_username_icon"> <Faicons.FaUser color="grey"/></div>
                                        <input 
                                        type="text" 
                                        placeholder="Enter Username" 
                                        name="username" 
                                        autoComplete="off" 
                                        required
                                        />
                                    </div>

                                    <div className="signup_phone">
                                        <div className="phone_icon"> <Faicons.FaPhoneAlt color="grey"/></div>
                                        <input 
                                        type="text" 
                                        placeholder="Enter phone number" 
                                        name="phone" 
                                        autoComplete="off" 
                                        required
                                        />
                                    </div>
                                </div>


                                <div className="signup_password">
                                    <div className="signpassword_icon"> <Faicons.FaUnlockAlt color="grey"/></div>
                                    <input 
                                    type={showPassword? "text" : "password"} 
                                    placeholder="Enter Password" 
                                    name="password" 
                                    required
                                    />
                                    <div className="eye-icon" onClick={togglebutton}>
                                        {showPassword ? <Faicons.FaEye/> :   <Faicons.FaEyeSlash/> }
                                    </div>
                             
                                </div>


                                <div className="signup_password">
                                    <div className="conpassword_icon"> <Faicons.FaUnlock color="grey"/></div>
                                    <input 
                                    type={showPassword? "text" : "password"} 
                                    placeholder="Enter Confirm Password" 
                                    name="password" 
                                    required
                                    />
                                </div>



                                <div className="submit">
                                    <button> Sign Up   </button>
                                </div>

                                <span className="bot">Already  have an account <a href="#">Sign in</a></span>
                    
                            </form>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}


