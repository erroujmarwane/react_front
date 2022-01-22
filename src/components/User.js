import React from 'react'

function User({data}) {

    let {avatar_url, login, html_url } = data
    return (
        
            <div className="card my-3">
                <img className="card-img-top" src={avatar_url} alt={login} />
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                            <div className="card-text">
                                <a href={html_url} className='btn btn-danger'>Show more</a>
                            </div>
                    </div>
            </div>
        
    )
}

export default User
