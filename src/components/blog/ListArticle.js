import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import OneArticle from './OneArticle'

function ListArticle() {
    const [articles,setArticles] = useState([])
    const getAllArticles =()=>{
        axios.get("http://localhost:4000/articles")
            .then(res => setArticles(res.data))
            .catch(err=>console.error(err))
    }
    const deleteArticle =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/articles/${id}`)
                .then(()=>{
                    setArticles(articles.filter(article=> article.id !==id))
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                })
                .catch(err=>console.error(err))
            }
          })
    }
    useEffect(() => {
        getAllArticles()
    }, [])
    return (
        <div>
            <div className="row my-4">
                <div className="col-md-6">
                    <div className="h1">List of article</div>
                </div>
                <div className="col-md-6 text-end"><Link to="/article/create" className="btn btn-link">Add article</Link></div>
            </div>
            <div className='row my-3'>
                {articles && articles.map((article,index)=>(
                    <div key={index} className='col-md-6'>
                        <OneArticle title={article.title} content={article.content} />
                        <button className='btn btn-primary' onClick={()=>deleteArticle(article.id)}>Delete</button>
                   </div>
                ))}
                
            </div>
        </div>
    )
}

export default ListArticle
