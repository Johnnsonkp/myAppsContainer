import React, {useEffect, useState} from 'react'

import { AuthProps } from "./Auth.modules"
import appsLogo from './appsTechLogo.png'
import { styles } from "./Auth.styles"

export const Auth: React.FC<AuthProps> = (props) => {
    const [userAuth, setUserAuth] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e: any) => {
        console.log(e.target.value)
        // setUserAuth({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setUserAuth({email: '', password: ''})
    }

    return(
        <>
        
            <div style={props.style}>
                <div style={{background: 'rgb(245, 243, 241)', width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '105%'}}>
                    {/* <h2 style={{color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>My Apps</h2> */}
                    <img src={appsLogo} style={{width: '450px', marginBottom: '50px'}}/>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '50%'}}>
                    <div className='text-content'>
                        <h2>My Account</h2>
                        <h3>LOG IN TO YOUR ACCOUNT</h3>
                        <span>for existing users & wishlist holders</span>
                    </div>
                    
                    <form onSubmit={(e) => handleSubmit(e)} style={{display: 'flex', flexDirection: 'column'}}>
                        <input name="email"  type="email" value={userAuth.email} required />
                        <input name="password"  type="password" value={userAuth.password} required />

                        <div className='buttons'>
                            <button type="submit" value="submit">Sign In</button>
                            <button   style={{textAlign: 'center'}}>
                                <button style={{ fontSize: '18px'}}/> Sign In with Google
                            </button>
                        </div>
                        
                    </form>
                    <button onClick={() => props.loginToggle && props.loginToggle(!props.login)}>Login</button>
                </div>
            </div>
        </>
    )
}