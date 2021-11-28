import { Todo, TodoState } from "../interfaces/AppType";

export const inital_state:TodoState = {
    todoCount:1,
    compledted:2,
    todos:[
        {id:1,desc:"one",completed:true}
    ],
    pending:2,
}


type TodoAction = 
    | {type:"addTodo" , payload:Todo}
    | {type:"helloTodo" , payload:{id:string,loading:boolean}}

export const reducer = (state:TodoState,action:TodoAction):TodoState=>{
    switch (action.type) {
        case "addTodo":
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            throw new Error("this is erororr")
    }
}