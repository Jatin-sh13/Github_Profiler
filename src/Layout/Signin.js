import React, { useState, useContext, useRef } from 'react'
import './Signin.css'
import { UserContext } from '../context/Context'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
const Signin = () => {
    const context = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const inputref = useRef('')
    const passref = useRef('')
    const handlesignin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                context.setUser({ email: res.user.email, uid: res.user.uid })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                alert("You are not a valid user")
                inputref.current.value = ""
                passref.current.value = ""
            })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        handlesignin()
    }
    if (context.user?.uid) { //if context.user have uid then
        return <Redirect path="/" />
    }
    return (
        <>
            <div className="container">
                <div className="sign">
                    <h1 className="headings">Welcome to Back</h1>
                    <h3 className="headings">SIGN IN</h3><br />
                    <form onSubmit={handlesubmit}>
                        <input type="email" ref={inputref} placeholder="Email" className="sign-input" required value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" ref={passref} placeholder="Password" class="sign-input1" required onChange={e => setPassword(e.target.value)} /><br /><br />
                        <center><button type="submit" className="btn btn-primary signin-btn">SignIn</button></center>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signin
