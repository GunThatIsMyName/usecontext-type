import { createContext, useContext, useReducer, useState } from "react";
import { IReducer } from "../interfaces/AppType";
import { inital_state, reducer } from "../reducer/AppReducer";


type Ichildren ={
    children:React.ReactNode;
    // JSX.Element | JSX.Element[]
}

const AppContext = createContext<IReducer>({} as IReducer );

const AppProvider =({children}:Ichildren)=>{
    // eslint-disable-next-line
    const [state,dispatch]=useReducer(reducer,inital_state);
    const [isLoading,setLoading]=useState(false);
    return <AppContext.Provider value={{state,isLoading,setLoading}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =()=>{
    const {state,isLoading,setLoading} = useContext(AppContext);
    return {...state,isLoading,setLoading};

}

export default AppProvider;