import { AddTransaction } from "./components/AddTransaction"
import { Balance } from "./components/Balance"
import { Header } from "./components/Header"
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from "./components/TransactionList"
import {GlobalProvider} from "./context/GlobalState.jsx"

function App() {
  return (<>
    <GlobalProvider>
      <div className="container">
      <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  </>)
}

export default App
