import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import { Transaction } from "./Transaction.jsx";

export const TransactionList=()=>{
    const {transactions=[]} = useContext(GlobalContext) ;
    return(<>
    <h3 style={{position:"initial"}}>History</h3>
    <div className="history-container">
        <ul className="list">
            {transactions.map((transaction)=>(
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
    </div>
    </>);
}