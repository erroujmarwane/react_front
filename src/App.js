
import { useState } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users'
import "/node_modules/bootswatch/dist/solar/bootstrap.min.css"

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateArticle from './components/blog/CreateArticle';
import ListArticle from './components/blog/ListArticle';

function App() {

  const [title, setTitle] = useState("Mohamed")

  const [courses, setCourses] = useState([
    {id: 1, title: "Learn NodeJS"},
    {id: 2, title: "Learn ReactJS"},
    {id: 3, title: "Learn Angular"},
    {id: 4, title: "Learn Laravel"}
  ])

  const handleClick = () => {

    setTitle("MUNDIAPOLIS")
  }

  const deleteOneCourse = (id) => {
      
      setCourses(courses.filter(course => id !== course.id))
  }

  return (
    <div>

    
        <Navbar />

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
             <Routes>

                <Route path="/" element={<Home />} />
            
                <Route path="/users" element={<Users />} />
                
                <Route path="/About" element={<About />} />
            
                <Route path="/Contact" element={<Contact />} />

                <Route path="/article/create" element={<CreateArticle />} />

                <Route path="/article" element={<ListArticle />} />
            

             </Routes>


            </div>
          </div>
        </div>
    
    </div>
  );
}

export default App;
