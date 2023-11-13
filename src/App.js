import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import AdminHome from './components/admin/AdminHome';
import CustomerHome from './components/customer/CustomerHome';
import AddBank from './components/bank/AddBank';
import AddCustomer from './components/customer/AddCustomer'
import AddAccount from './components/account/AddAccount';
import Transaction from './components/transaction/Transaction';
import Passbook from './components/account/Passbook'
import Withdraw from './components/transaction/Withdraw'
import Deposit from './components/transaction/Deposit'
import Transfer from './components/transaction/Transfer'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>

        {/* Admin dashboard */}
        <Route exact path="/admin/:username" element={<AdminHome/>}></Route>
        <Route exact path="/customer/:username" element={<CustomerHome/>}></Route>
        <Route exact path="/addBank" element={<AddBank/>}></Route>
        <Route exact path="/addCustomer" element={<AddCustomer/>}></Route>
        <Route exact path="/addAccount" element={<AddAccount/>}></Route>
        <Route exact path="/transaction" element={<Transaction/>}></Route>
        <Route exact path="/passbook" element={<Passbook/>}></Route>
        <Route exact path="/withdraw" element={<Withdraw/>}></Route>
        <Route exact path="/deposit" element={<Deposit/>}></Route>
        <Route exact path="/tansfer" element={<Transfer/>}></Route>
        

        {/* Customer dashboard */}
        

      </Routes>
    </>
  );
}

export default App;
