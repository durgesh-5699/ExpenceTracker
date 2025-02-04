import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
    transactions : [] 
}

export const GlobalContext = createContext(initialState) ;

export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState) ;

    const deleteTransaction=(id)=>{
        dispatch({type:"delete",payload:id});
    }

    const addTransaction=(transaction)=>{
        dispatch({type:"add",payload:transaction});
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions , 
        deleteTransaction ,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}

