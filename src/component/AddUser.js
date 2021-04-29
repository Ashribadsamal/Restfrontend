import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';

function AddUser() {
    let history = useHistory();
    const [input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",

    })

    const {name, username,email,phone} = input;
    const onInputChange =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandel =async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:3002/users",input)
        history.push("/")
    }


    return (
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
            
            <button type="submit" class="btn btn-primary">Submit</button>
            
            </form> 
        </div>
    )
}

export default AddUser
