import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Login from "./Login";
function mapStateToProps(state) {
    return { UsersList: state.users.UsersList };
}
export default connect(mapStateToProps)(function SignUp(props) {
    const { UsersList } = props;
    let IdRef = useRef('');
    let FirstNameRef = useRef('');
    const [key,setKey]=useState(0)
   function signUp(){
        
        const user = UsersList.find( x=> x.Id === IdRef.current.value && x.FirstName === FirstNameRef.current.value)
        if (!user) {
           alert("this id not found!")
            setKey(key+1)
        }
        else {
            alert(`hello to ${FirstNameRef.current.value} !!`)

        }
    }
    return (
        <>
            <label>שם פרטי</label>
            <input ref={FirstNameRef}></input><br></br>
            <label>תעודת זהות</label>
            <input ref={IdRef}></input><br></br>
            <button onClick={signUp}>להתחברות</button>
            {/* <SignUp key={key}/> */}
        </>
    )
})