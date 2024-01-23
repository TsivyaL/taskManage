const TaskType=[
        {TaskTypeId:1,TaskTypeName:"homework"},
    {TaskTypeId:2,TaskTypeName:"learn to test" } ,
    {TaskTypeId:3,TaskTypeName:"do a project" } ,
    ]
 const TasksList=[
     {TaskId:"1",TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
     {TaskId:"2",TaskTypeId:2,TaskName:"learn to test in data structue",UserTaskId:"326201759",DeadLine:"12/12/2024"},
     {TaskId:"3",TaskTypeId:3,TaskName:"do a project in python ",UserTaskId:"326201753",DeadLine:"12/12/2024"},
    ]
    exports.getAllTaskType=(req,res) =>
    {
        return res.status(200).json({TaskType:TaskType})
    };
    exports.getAllTaskList=(req,res)=> 
    {
        return res.status(200).json({TasksList:TasksList})
    }
    exports.deleteTaskById=(req,res)=>
    {
        const {Id}=req.params
        console.log(Id)
        const index=TasksList.findIndex(task=>task.TaskId===Id)
        console.log(index)
        if(index!==-1){
            TasksList.splice(index,1)
            return res.status(200).json({message:"task deleted from list successfully",TasksList:TasksList})    
        }
        else{
          return  res.status(404).json({message:"the id not exist delete"})
        }
    };
    
    exports.addTaskToList=(req,res)=>
    {
        const {newTask} = req.body
      if(! TasksList.find(task=>task.Id==newTask.Id))
         {    TasksList.push(newTask)
             return res.status(200).json({massege:"the task added to list" ,TasksList:TasksList})
         }
    else
         return res.status(404).json({message:"the id is exist add"})

    };
    
    exports.addTaskToTypeList=(req,res)=>
    {
        const {newTaskType} = req.body
      if(! TaskType.find(task=>task.Id==newTask.Id))
         {    TaskType.push(newTaskType)
             return res.status(200).json({massege:"the task added to type list" ,TaskType:TaskType})
         }
    else
         return res.status(404).json({message:"the id is exist adType"})

    };