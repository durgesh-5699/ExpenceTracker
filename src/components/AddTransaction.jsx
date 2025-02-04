import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction=()=>{
    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0) ;
    const {addTransaction} = useContext(GlobalContext)

    const formSubmit=(e)=>{
        e.preventDefault() ;

        if(text.length===0 || amount==0){
            return ;
        }
        const newTransaction = {
            id : Math.floor(Math.random()*100000000) ,
            text,
            amount : +amount
        };

        addTransaction(newTransaction) ;
        setText("") ;
        setAmount(0) ;
    }

    return(
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={formSubmit}>
                <div  className="forrm" >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount : (-)expense / (+)income</label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                </div>
                <button className="btn">Add new transaction</button>
            </form>
        </>
    );
}