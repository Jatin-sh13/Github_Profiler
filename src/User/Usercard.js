import React from 'react'
import './Usercard.css'
const Usercard = ({ user }) => {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={user.avatar_url} alt="" />
                <div className="card-body">
                    <p className="card-text">Name:  {user.login}</p>
                    <p className="card-text">Followers:  {user.followers}</p>
                    <a href={user.html_url}><button className="btn btn-primary">Visit Profile</button></a>
                </div>
            </div>
        </div>
    )
}
export default Usercard
