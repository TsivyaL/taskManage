import { addTaskToList } from "../redux/action";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";



function mapStateToProps(state){
    return {TaskType: state.tasks.TaskType,
        TasksList: state.tasks.TasksList,
        UsersList:state.users.UsersList
    };
    }
export default connect(mapStateToProps)(function AddTaskByTeacher(props){
    const{TaskType,dispatch,setFlag,TasksList,UsersList}=props
    //     {TaskId:1,TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
    let TaskIdRef=useRef('')
    let UserIdRef=useRef('')
    let TaskTypeIdRef=useRef('')
    let TaskNameRef=useRef('') 
    let DeadLineRef=useRef('')
    useEffect(()=>{console.log(`tasks:`,TasksList)},[TasksList])
    function addThisTask(){  

    dispatch(addTaskToList({TaskId:TaskIdRef.current.value,TaskTypeId:TaskTypeIdRef.current.value,TaskName:TaskNameRef.current.value,UserTaskID:UserIdRef.current.value,DeadLine:DeadLineRef.current.value}))
   //setFlag(false);
}
    return(<>
    <label>task id</label>
    <input type="number" ref={TaskIdRef} />
    <br />
    <select ref={TaskTypeIdRef}>
        <option > סוג משימה</option>
         {TaskType.map(x=><option key={x.TaskTypeName} value={x.TaskTypeId}>{x.TaskTypeName}</option>)}
    </select>
    <br/>
    <select ref={UserIdRef}>
        <option > בחר תלמיד</option>
         {UsersList.map(x=>x.Teacher===0&&<option key={x.Id} value={x.Id}>{x.FirstName } {x.LastName}</option>)}
    </select>
    <br/>
    <label >שם המשימה</label>
    <input type="text" ref={TaskNameRef} />
    <label>DeadLine</label>
    <input type="date" ref={DeadLineRef} />
    <button onClick={addThisTask}>להוספת המשימה</button>
    </>)
})