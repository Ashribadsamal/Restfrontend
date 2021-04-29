import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

function EditUser() {
    let history = useHistory();
    let {id} = useParams()
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })

    useEffect(()=>{
        loadUser();
    },[])

    const {name, username,email,phone} = input;
    const onInputChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandel =async (e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`,input)
        history.push("/")
    }

    const loadUser =async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        console.log(result)
        setInput(result.data)
    }


   return(

    <div className="container border shadow mt-4">
    <form onSubmit={submitHandel}>
    <div class="form-group">
         <label>Name</label>
         <input type="text" class="form-control"
         name="name" value={name} placeholder="Enter Name" onChange={ onInputChange}/>
     </div>
     <div class="form-group">
         <label >User Name</label>
         <input type="text" class="form-control" id="exampleInputUserName"
         name="username" value={username}  placeholder="Enter UserName" onChange={onInputChange}/>
         
     </div>
     <div class="form-group">
         <label >Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={email} placeholder="Enter email" onChange={onInputChange}/>
         
     </div>
     <div class="form-group">
         <label>Phone no.</label>
         <input type="tel" class="form-control"
         name="phone" value={phone}  id="exampleInputtel" placeholder="Phone no." onChange={onInputChange}/>
     </div>
     
     <button type="submit" class="btn btn-primary">Update </button>
     
     </form> 
     </div>

    ) 
}

export default EditUser





/* let history = useHistory();
    let {id} = useParams()
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })

    useEffect(()=>{
        loadUser();
    },[])

    const {name, username,email,phone} = input;
    const onInputChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandel =async (e)=> {
        e.preventDefault();
        await axios.post(`http://localhost:3002/users/${id}`,input)
        history.push("/")
    }

    const loadUser =async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        console.log(result)
        setInput(result.data)
    }


   return(
    <div className="container border shadow mt-4">
    <form onSubmit={submitHandel}>
    <div class="form-group">
         <label for="exampleInputName">Name</label>
         <input type="text" class="form-control"
         name="name" value={name} placeholder="Enter Name" onChange={ onInputChange}/>
     </div>
     <div class="form-group">
         <label for="exampleInputUserName">User Name</label>
         <input type="text" class="form-control" id="exampleInputUserName"
         name="username" value={username}  placeholder="Enter UserName" onChange={onInputChange}/>
         
     </div>
     <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={email} placeholder="Enter email" onChange={onInputChange}/>
         
     </div>
     <div class="form-group">
         <label for="exampleInputPhoneno">Phone no.</label>
         <input type="tel" class="form-control"
         name="phone" value={phone}  id="exampleInputtel" placeholder="Phone no." onChange={onInputChange}/>
     </div>
     
     <button type="submit" class="btn btn-primary">Update </button>
     
     </form> */

