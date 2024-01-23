import { addTaskToList } from "../redux/action";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import Autocomplete from '@mui/material/Autocomplete';
import AddTaskIcon from '@mui/icons-material/AddTask';
const theme = createTheme({  
  palette: {
    primary: teal,
    secondary: orange,
  }

}
);

function mapStateToProps(state){
    return {TaskType: state.tasks.TaskType,
        TasksList: state.tasks.TasksList};
    }
export default connect(mapStateToProps)(function AddTask(props){
    const{TaskType,dispatch,UserId,setFlag,TasksList}=props
    //     {TaskId:1,TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
    let TaskIdRef=useRef('')
    let TaskTypeIdRef=useRef('')
    let TaskNameRef=useRef('') 
    let DeadLineRef=useRef('')
    function addThisTask(){  

    dispatch(addTaskToList({TaskId:TaskIdRef.current.value,TaskTypeId:TaskTypeIdRef.current.value,TaskName:TaskNameRef.current.value,UserTaskId:UserId,DeadLine:DeadLineRef.current.value}))
   setFlag(false);
}
    return(<>
     <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField id="outlined-basic" type="number" label="task ID " variant="standard" ref={TaskIdRef} />
      <br></br>
      <Autocomplete
      disablePortal
      ref={TaskTypeIdRef}
      id="combo-box-demo"
      options={TaskType}
      getOptionLabel={(option) => option.TaskTypeName}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="סוג משימה" />}
    />
      {/* <TextField id="standard-basic" label=" שם המשימה" variant="standard" theme={theme}  ref={TaskNameRef} /> */}
      <br></br>
      <TextField id="filled-basic" type="date" label="DeadLine" variant="filled" ref={DeadLineRef}/>
      <br></br>
        <Button  theme={theme}  size="large" variant="outlined" onClick={addThisTask} > הוספת המשימה <AddTaskIcon/></Button>

    </Box>



    {/* <label>task id</label>
    <input type="number" ref={TaskIdRef} />
    <br />
    <select ref={TaskTypeIdRef}>
        <option > id בחר </option>
         {TaskType.map(x=><option key={x.TaskTypeName} value={x.TaskTypeId}>{x.TaskTypeName}</option>)}
    </select>
    <br/>
    <label >שם המשימה</label>
    <input type="text" ref={TaskNameRef} />
    <label>DeadLine</label>
    <input type="date" ref={DeadLineRef} />
    <button onClick={addThisTask}>להוספת המשימה</button> */}
    </>)
})