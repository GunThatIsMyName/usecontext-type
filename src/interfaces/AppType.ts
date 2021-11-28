export interface Todo{
    id:number;
    desc:string
    completed:boolean;
}

export interface TodoState{
    todoCount:number;
    todos:Todo[],
    compledted:number;
    pending:number;
}

export type IReducer={
    state:TodoState;
    isLoading:boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
