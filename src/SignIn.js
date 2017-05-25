import React from 'react'
import './SignIn.css'
import { auth, githubProvider } from './base'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    
    return (
        <button className="SignIn" onClick={() => authenticate(githubProvider)}>
            Sign In With Github
        </button>    
    )
}
export default SignIn