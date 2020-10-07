import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Usercard.css'
import { ListGroupItem, ListGroup } from 'reactstrap'
const Repos = ({ repo_url }) => {
    const [repos, setRepos] = useState([])
    const fetchrepo = async () => {
        const { data } = await Axios.get(repo_url)
        setRepos(data)
    }
    useEffect(() => {
        fetchrepo()
    }, [repo_url])

    return (
        <div>
            {
                repos ? (<ListGroup>
                    {repos.map(repo => (
                        <ListGroupItem key={repo.id}>
                            <div className="text-primary">{repo.name}</div>
                            <div className="text-primary">{repo.language}</div>
                            <div className="text-primary">{repo.description}</div>
                        </ListGroupItem>
                    ))}
                </ListGroup>) : (
                    <>
                        <h1>fvdshbijofwehidsn;ubfw;edsyhx;</h1>
                        <h1>fvdshbijofwehidsn;ubfw;edsyhx;</h1>
                        </>
                    )
            }
        </div>
    )
}
export default Repos
