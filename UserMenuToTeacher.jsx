
import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../redux/action";
import { deleteTaskFromList } from "../redux/action";

function mapStateToProps(state){
    return { TasksList: state.tasks.TasksList,
      UsersList: state.users.UsersList };
    }

export default connect(mapStateToProps)( function UsersMenu(props){
    const {TasksList,UsersList,dispatch} = props;
    // const [useStateTasksList,setUseStateTasksList]=useState(TasksList)
    const usersArr=UsersList.filter(x=>x.Teacher===0)
useEffect(()=>{console.log(`tasks:`,TasksList)},[TasksList])
useEffect(()=>{console.log(`user:`,UsersList)},[UsersList])
    // useEffect(()=>{setUseStateTasksList(TasksList)},flag)
    function deleteSelectUser(id){
        dispatch(deleteUser({Id:id}))
        TasksList.map(x=>x.UserTaskId===id&&dispatch(deleteTaskFromList({TaskId:x.TaskId})))
    }

      return(
        <>
        <ul>
        
        {usersArr.map(x=>(<li key={x.FirstName}><h5>{x.FirstName}  {x.LastName}</h5><h5>{x.phone}</h5><button onClick={()=>deleteSelectUser(x.Id)}>למחיקת משתמש</button></li>))}
        </ul>

      </> 
      )
}
)     
