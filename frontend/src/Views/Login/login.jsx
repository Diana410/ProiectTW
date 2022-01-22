import React, {userState, useState} from "react"
import {useDispatch} from 'react-redux'
import {signIn} from'../../Controllers/Redux/authSlice'
import './login.css'
import { useNavigate, useParams } from 'react-router-dom';


export default ()=>{
    const dispatch=useDispatch();

    const navigate = useNavigate();

    
    const [formInput,setFormInput]=useState({
        name:"",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }


    return (
        <div className="loginBG">
            <form className='login-panel'>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged}value={formInput.form}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged}value={formInput.password}></input>
                {/* <button type='submit' onClick={submit}>Login</button> */}
                <button type='submit' onClick={()=>{navigate("BugList")}}>Login</button>

            </form>
        </div>
    )
}