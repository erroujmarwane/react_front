import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function CreateArticle() {

    const title = useRef("")
    const content = useRef("")
    const history = useNavigate()

    const AddArticle = (e)=>{
        e.preventDefault()
        let article ={
            title:title.current.value,
            content:content.current.value
        }
        axios.post("http://localhost:4000/articles",article)
            .then(res =>{
                title.current.value =""
                content.current.value =""
                history("/article")
            })
            .catch(err => console.log(err.data))
    }


    return (
        <div>
            <div className="row my-4">
                <div className="col-md-6">
                    <div className="h1">Create article</div>
                </div>
                <div className="col-md-6 text-end"><Link to="/article" className="btn btn-link">Back to list</Link></div>
            </div>
            <div className="row my-3">
                <div className="col-md-8 mx-auto">
                    <form onSubmit={AddArticle} >
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Title</label>
                            <input ref={title} type="text" placeholder='Title of article' name="" id="" className="form-control" />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="" className="form-label">Content</label>
                            <textarea ref={content} name="" id=""  rows="4" className="form-control"></textarea>
                        </div>
                        <div className='d-grid'>
                            <button className="btn btn-primary" type='submit'>Add article</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateArticle
