import axios from 'axios'
import {useState, UseEffect} from 'react';
//import { link } from 'react-router-dom';
const url = 'localhost:8000/blogs/'

const CompShowsBlogs = () => {
    const [blogs, setblog] = useState([]);
    UseEffect(() => {
        getBlogs()
    }, [])
    
//para listar los blogs
    const getBlogs = async () => {
        const res = await axios.get(url)
        setblog(res.data)
        
    }

    const deleteBlogs = async (id) => {
        axios.delete(`${url}${id}`)
           getBlogs()     
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>title</th>
                                <th>content</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        {/* <link to={`/edit/${blog.id}`} className="btn bnt-info">Edit</link> */}
                                        <button onclick={() =>deleteBlogs(blog.id)} className="btn btn-danger">delete</button>
                                    </td>
                               </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowsBlogs