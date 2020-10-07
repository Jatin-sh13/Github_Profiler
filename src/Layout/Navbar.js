import React, { useContext } from 'react'
import Logo from '../Layout/GitLo.png'
import '../Layout/Navbar.css'
import { UserContext } from '../context/Context'
const Navbar = () => {
    const context = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={Logo} className="Nav-logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {
                                context.user ? (
                                    <li className="nav-item">
                                        <a className="nav-link text-white" onClick={() => {
                                            context.setUser(null)
                                        }}>Logout</a>
                                    </li>
                                ) : (
                                        <>
                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="/Signin">SignIn</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="/Signup">SignUp</a>
                                            </li>
                                        </>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
