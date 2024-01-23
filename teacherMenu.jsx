import React, { useState } from "react";
import UserMenu from "./UserMenuToTeacher";
import AddTaskByTeacher from "./addTaskByTeacher";
import AddTaskType from "./addTaskType";
export default function TeacherMenu(props){
    const [userMenuFlag,setUserMenuFlag]=useState(false)
    const [addTaskByTeacherFlag,setAddTaskByTeacherFlag]=useState(false)
    const [addTaskTypeFlag,setAddTaskTypeFlag]=useState(false)


    
    return(
        <>
        {!addTaskByTeacherFlag&&!addTaskTypeFlag&&!userMenuFlag&&<button onClick={()=>{setUserMenuFlag(!userMenuFlag);setAddTaskByTeacherFlag(false);setAddTaskTypeFlag(false)}}>רשימת תלמידים</button>}{/*link to login */}
        {userMenuFlag&&<UserMenu></UserMenu>}
        {!addTaskByTeacherFlag&&!addTaskTypeFlag&&!userMenuFlag&&<button onClick={()=>{setAddTaskByTeacherFlag(!addTaskByTeacherFlag);setUserMenuFlag(false);setAddTaskTypeFlag(false)}}>הוספת משימה לתלמיד</button>}{/*link to login */}
        {addTaskByTeacherFlag&&<AddTaskByTeacher></AddTaskByTeacher>}
        {!addTaskByTeacherFlag&&!addTaskTypeFlag&&!userMenuFlag&&<button onClick={()=>{setAddTaskTypeFlag(!addTaskTypeFlag);setAddTaskByTeacherFlag(false);setUserMenuFlag(false)}}>הוספת סוג משימה</button>}{/*link to login */}
        {addTaskTypeFlag&&<AddTaskType></AddTaskType>}
        </>
    )
}