
import React  from 'react'

function OneArticle({title,content}) {
 

    return (
        <div>
            <div className="card my-3">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                    {/* <button className='btn btn-primary' onClick={()=>deleteArticle(id)}>Delete</button> */}
                </div>
            </div>
        </div>
    )
}

export default OneArticle
