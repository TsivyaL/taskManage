
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TaskMenu from './components/taskMenu';
import addTask from './components/addTask';
import Enter from './components/enter';
import AddTask from './components/addTask';
import addTaskType from './components/addTaskType';
import AddTaskType from './components/addTaskType';
import AddTaskByTeacher from './components/addTaskByTeacher'
import UsersMenu from './components/UserMenuToTeacher'
import TeacherMenu from './components/teacherMenu'
import Try from './components/try'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
function App() {
  return (
    
      <div className="App" >
        <Provider store={store}>
          
        {/* <Router>

        <div>
            <Menu /> */}
            {/* <Flash /> */}
            {/* <InsertPupil /> */}
            {/* <UpdateClass></UpdateClass> */}
            {/* <Switch>
              <Route path="/enter">
                <Enter />
              </Route> */}
              {/* <Route path="/login">
                <Login />
              </Route> */}
              {/* <Route path="/home">
              <Home />
              </Route>
              <Route path="/h">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route> */}
              {/* <Route path="/insertPupil">
                <InsertPupil />
              </Route>
              <Route path="/pupilDetails">
                <PupilDetails />
              </Route>
              <Route path="/showPupil/:id">
                <ShowPupil />
              </Route> */}
            {/* </Switch>
          </div>
        </Router> */}

           {/* <TaskMenu UserId={"326201753"}></TaskMenu> */}
           <TaskMenu UserId="326201753"></TaskMenu>
           {/* <Try></Try> */}
         

        </Provider>
        {/* <AddTaskByTeacher></AddTaskByTeacher> */}
        {/* <UsersMenu></UsersMenu> */}
        {/* <TeacherMenu></TeacherMenu> */}
      </div>
    
  );
}



export default App;

