import { addTaskToList } from "../redux/action";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addTaskType } from "../redux/action";

function mapStateToProps(state){
    return({TaskType:state.tasks.TaskType})
    }
export default connect(mapStateToProps)(function AddTaskType(props){
    const{dispatch,TaskType}=props
    useEffect(()=>{console.log(`tasks type:`,TaskType)},[TaskType])
    //     {TaskId:1,TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
    
    let TaskTypeIdRef=useRef(0)
    let TaskTypeNameRef=useRef('') 
    
    function addThisTaskType(){  

    dispatch(addTaskType({TaskTypeId:TaskTypeIdRef.current.value,TaskTypeName:TaskTypeNameRef.current.value}))
}
    return(<>
    <label>task id</label>
    <input type="number" ref={TaskTypeIdRef} />
    <br />
    <label >סוג המשימה</label>
    <input type="text" ref={TaskTypeNameRef}/>
    <button onClick={addThisTaskType}>להוספת המשימה</button>
    </>)
})