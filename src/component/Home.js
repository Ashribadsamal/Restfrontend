import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom'

function Home() {
    const [user,setUser] = useState([])

    useEffect(()=>{
        loadData();
    },[])


    const loadData = async ()=>{
        const data = await axios.get("http://localhost:3002/users");
        //console.log(data.data)
        setUser(data.data.reverse())
    }

    const deleteHandel =async (id)=>{
        await axios.delete(`http://localhost:3002/users/${id}`);

        loadData();
    }

   
    return (
        <div className="container pt-2">
            <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {user.map((item,index)=>(
                     <tr>
                     <th scope="row">{index + 1}</th>
                     <td>{item.name}</td>
                     <td>{item.username}</td>
                     <td>{item.email}</td>
                     <td>
                         <Link className= "btn btn-primary mr-2" to={`/view/${item.id}`}>View</Link>
                         <Link className= "btn btn-outline-success mr-2" to ={`/${item.id}`}>Edit</Link>
                         <Link className= "btn btn-outline-success" onClick={()=>deleteHandel(item.id)} >Delete</Link>
                     </td>
                     </tr>
                ))}
            </tbody>
            </table>

        </div>
    )
}

export default Home



/*
 const deleteHandel =async (id)=>{
        await axios.delete(`http://localhost:3002/users/${id}`);

        loadData();
    }

onClick={()=>deleteHandel(item.id)} */