import React from "react";
import { useEffect,useRef,useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/action";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
const theme = createTheme({  
  palette: {
    primary: teal,
    secondary: orange,
  }

}
);
function mapStateToProps(state){
return {UsersList: state.users.UsersList};
}
export default connect( mapStateToProps)(function Login(props){
    const {UsersList,dispatch}=props; /*{ FirstName: "shani", LastName: "fisher", Id: "326201753", Teacher: 0, phone: "0504108916" },*/
  let FirstNameRef=useRef('');
  let LastNameRef=useRef('');
  let IdRef=useRef('');
  let phoneRef=useRef('');
  let TeacherRef=useRef('');
  useEffect(function () {
    console.log("usersList", UsersList)
}, [, UsersList]);
const login=(()=>{
 
dispatch(addUser({FirstName:FirstNameRef.current.value,LastName:LastNameRef.current.value,Id:IdRef.current.value,Teacher:TeacherRef.current.checked,phone:phoneRef.current.value}))

})
  return(
    <>
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField id="outlined-basic" label="שם פרטי" variant="standard" ref={FirstNameRef} />
      <br></br>
      <TextField id="filled-basic" label="שם משפחה" variant="filled" ref={LastNameRef}/>
      <br></br>
      <TextField id="standard-basic" label="תעודת זהות" variant="standard" theme={theme}  ref={IdRef} />
      <br></br>
      <TextField id="filled-basic" label="טלפון" variant="filled" ref={phoneRef}/>
      <br></br>
      <FormControlLabel
          color="secondary"
          value="top"
          control={<Checkbox  ref={TeacherRef} />}
          label="האם מורה?"
          labelPlacement="top"
        />
      <br></br>

        <Button  theme={theme}  size="large" variant="outlined" onClick={login} > כניסה <LoginIcon/></Button>

    </Box>


    
</>
  )
})



