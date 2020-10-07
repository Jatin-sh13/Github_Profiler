import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Layout/Signup'
import Signin from './Layout/Signin'
import Navbar from './Layout/Navbar'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { UserContext } from './context/Context'
import firebaseconfig from './Config/firebaseconfig'
import Home from './Layout/Home'
//Firebase initialize
firebase.initializeApp(firebaseconfig);
const App = () => {
    const [user, setUser] = useState(null)
    return (
        <div>
            <Router>
                <UserContext.Provider value={{ user, setUser }}>
                    {/* mtlb user ki value provide krdi ab isko hum components mai use kr skte hai or ismai value bhi store  kr skte hai */}
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Signup" component={Signup} />
                        <Route exact path="/Signin" component={Signin} />
                    </Switch>
                </UserContext.Provider>
            </Router>
        </div>
    )
}
export default App
