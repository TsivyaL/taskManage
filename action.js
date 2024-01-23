export function addUser(newUser) {
    return { type: 'ADD_USER', payLoad: newUser }
}

export function updateUser(user) {
    return { type: 'UPDATE_USER', payLoad: user }
}

export function deleteUser(user) {
    return { type: 'DELETE_USER', payLoad: user }
}

export function addTaskType(newTaskType) {
    return { type: 'ADD_TASK_TYPE', payLoad: newTaskType }
}

export function addTaskToList(newTask){
    return {type:'ADD_TASK_LIST',payLoad:newTask }
}
export function deleteTaskFromList(task)
{
    return{type:'DELETE_TASK_FROM_LIST',payLoad:task }
}