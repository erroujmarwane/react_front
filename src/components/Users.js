import React, { useEffect, useState } from 'react'
import axios from 'axios'

import User from './User'


function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [url, setUrl] = useState("https://api.github.com/users")

    const searchChange = (e) => {
        setSearch(e.target.value)
    }

    const getUsers = async () => {

        try {
           let response = await axios.get(url)
           setUsers(response.data.items ? response.data.items : response.data)
           
        } catch (error) {
            console.error(error)
        }
    }

    const resultSearch = async () => {

        setUrl(`https://api.github.com/search/users?q=${search}`)

        console.log(url)

        // try {
        //    let response = await axios.get(`https://api.github.com/search/users?q=${search}`)
        //    setUsers(response.data.items)
           
        // } catch (error) {
        //     console.error(error)
        // }
    }

    useEffect(() => {
        getUsers()
    }, [url])
 

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                     <h1>list of users</h1>
                </div>
                <div className="col-md-6 text-end">
                    <div className="input-group mb-3">
                        <input onChange={searchChange} type="text" className="form-control" placeholder="Search a user" />
                        <button onClick={resultSearch} className="btn btn-outline-primary" type="search" >Search</button>
                    </div>
                </div>
            </div>
            <hr />

            <div className="row">
                {users && users.map(user => (
                    
                    <div className="col-md-3" key={user.id}>
                        <User data={user}/>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Users
