import React, { useState, useContext } from 'react'
import './Home.css'
import { UserContext } from '../context/Context'
import Axios from 'axios'
import { data } from 'jquery'
import Usercard from '../User/Usercard'
import Repos from '../User/Repos'
import { Redirect } from 'react-router-dom'
const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [user, setUser] = useState(null)
    const fetchdetails = async (e) => {
        e.preventDefault()
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log({ data })
        } catch (error) {
            alert("Not Able to Load User")
        }
    }
    if (!context.user?.uid) {
        return <Redirect to="/Signin" />
    }
    return (
        <>
            <div className="conti">
                <form>
                    <input type="text" placeholder="Enter UserName" onChange={e => setQuery(e.target.value)} value={query} className="query" /><br />
                    <button className="btn-primary query-btn" onClick={fetchdetails}>Search</button>
                </form>
                <div className="row">
                    <div className="col-lg-4">
                        {user ? <Usercard user={user} /> : null}
                    </div>
                    <div className="col-lg-8">
                        {user ? <Repos repo_url={user.repos_url} /> : null}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home
