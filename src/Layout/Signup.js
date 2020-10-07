import React, { useState, useContext } from 'react'
import './Signup.css'
import firebase from 'firebase/app'
import { UserContext } from '../context/Context'
import { Redirect } from 'react-router-dom'
const Signup = () => {
    const context = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(0)
    const handleSignup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                context.setUser({ email: res.user.email, uid: res.user.uid }) //context mai user ki information store kar rhe hai 
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                alert("Email ID already taken")
            })
    }
    const handleSubmit =  (e) => {
        e.preventDefault()
        handleSignup()
    }
    if (context.user?.uid) { //if context.user have uid then
        return <Redirect path="/" />
    }
    return (
        <>
            <div className="container">
                <div className="sign">
                    <h1 className="headings">Welcome to GITFIRE</h1>
                    <h3 className="headings text-whi">SIGN UP</h3><br />
                    <form>
                        <input type="email" placeholder="Email" className="sign-input" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" class="sign-input1" required onChange={e => setPassword(e.target.value)} /><br /><br />
                        <center><button type="submit" className="btn btn-primary signup-btn" onClick={handleSubmit}>SIGN UP</button></center>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup
