import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link ,useParams} from 'react-router-dom';



function View() {

    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })
    const {id} = useParams()

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser =async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        console.log(result)
        setInput(result.data)
    }


    return (
        <div className="border shadow container mt-4 bg-danger ">
            <Link className="btn btn-primary mt-2 mb-2" to="/">Back to Home
            </Link>
            <ul className="list-group w-50 container mt-2 mb-2 ">
            <li className="list-group-item">name: {input.name}</li>
            <li className="list-group-item">Username: {input.username}</li>
            <li className="list-group-item">Email: {input.email}</li>
            <li className="list-group-item">phone: {input.phone}</li>
            </ul>

        </div>
    )
}

export default View
