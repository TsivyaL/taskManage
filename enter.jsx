import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import UpdateUser from "./updateUser";
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Enter(props){
    const [signUpFlag,setSignUpFlag]=useState(false)
    const [LoginFlag,setLoginFlag]=useState(false)
    const [UpdateUserFlag,setUpdateUserFlag]=useState(false)

    
    return(
        <>
        
        {!UpdateUserFlag&&!LoginFlag&&!signUpFlag&&<button onClick={()=>{setLoginFlag(!LoginFlag);setSignUpFlag(false);setUpdateUserFlag(false)}}>הרשמה</button>}{/*link to login */}
        {LoginFlag&&<Login></Login>}
        {!UpdateUserFlag&&!LoginFlag&&!signUpFlag&&<button onClick={()=>{setSignUpFlag(!signUpFlag);setLoginFlag(false);setUpdateUserFlag(false)}}>התחברות</button>}{/*link to signup */}
       {signUpFlag&&<SignUp></SignUp>}
       {!UpdateUserFlag&&!LoginFlag&&!signUpFlag&&<button onClick={()=>{setUpdateUserFlag(!UpdateUserFlag);setSignUpFlag(false);setLoginFlag(false)}}>לעדכון</button>}{/*link to login */}
        {UpdateUserFlag&&<UpdateUser></UpdateUser>}

        </>
    )
}