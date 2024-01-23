import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/action";
import Login from "./Login";
function mapStateToProps(state) {
    return { UsersList: state.users.UsersList };
}
export default connect(mapStateToProps)(function UpdateUser(props) {
    const { UsersList,dispatch } = props;
    let IdRef = useRef('');
    let FirstNameRef = useRef('');
    let LastNameRef = useRef('');
    useEffect(function () {
        console.log("usersList", UsersList)
    }, [, UsersList]);
    
   function updateUserfunc(){
        

    dispatch(updateUser({Id:IdRef.current.value,FirstName:FirstNameRef.current.value,LastName:LastNameRef.current.value}))
    }
    return (
        <>
        <label>תעודת זהות</label>
            <input ref={IdRef}></input><br></br>
            <label>שם פרטי חדש</label>
            <input ref={FirstNameRef}></input><br></br>
            <label>שם משפחה חדש</label>
            <input ref={LastNameRef}></input><br></br>
            
            <button onClick={updateUserfunc}>לעדכון הפרטים</button>
            {/* <SignUp key={key}/> */}
        </>
    )
})