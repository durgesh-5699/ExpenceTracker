import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import { Transaction } from "./Transaction.jsx";

export const TransactionList=()=>{
    const {transactions=[]} = useContext(GlobalContext) ;
    return(<>
    <div className="history-container">
        <h3>History</h3>
        <ul className="list">
            {transactions.map((transaction)=>(
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
    </div>
    </>);
}