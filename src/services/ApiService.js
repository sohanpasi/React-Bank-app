import axios from "axios";


export const login = async (userName, password) => {
    let response = await axios.post(
        'http://localhost:8080/api/auth/login', {
        username: userName,
        password: password
    }
    )
    return response;
}

export const getAllBanks = async (pagenumber, pagesize) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/bank', {
        params: {
            pagenumber: pagenumber,
            pagesize: pagesize
        },
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
    }
    )
    return response;
}

export const saveBank = async (name, abbreviationName, ifscCode) => {

    try{
        let response = await axios.post(
            'http://localhost:8080/bankapp/bank', {
            bankname: name,
            abbreviation: abbreviationName,
            ifsc: ifscCode,

        }
        ,{
            params:{},
            headers:{Authorization: "Bearer " + localStorage.getItem('auth')}
        }
        )
        return response;
    }
    catch(error){
        throw error;
    }
}

export const updateBank = async (bankId, name, abbreviation, ifsccode) => {

    let response = await axios.put(
        'http://localhost:8080/bankapp/bank',
        {
            bankname: name,
            abbreviation: abbreviation,
            ifsc: ifsccode,
        },
        {
            params:{
                id:bankId
            }
        // ,headers:{
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
        }
        
    )
    return response;
}

export const deleteBank = async (bankid) => {

    let response = await axios.delete(
        'http://localhost:8080/bankapp/bank', {
        params: {
            id: bankid
        },
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
    }
    )
    return response;
}

export const updateCustomer = async (custId, custName, mobileNo, emailId) => {

    let response = await axios.post(
        'http://localhost:8080/bankapp/customer/update',
        {
            name: custName,
            mobileno: mobileNo,
            email: emailId,
        },
        {
            params:{
                id:custId
            }
        // ,headers:{
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
        }
    )
    return response;
}

export const getCustomerDetails = async (custId) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/customer/details',
        {
            params:{
                cid:custId
            }
        },
    )
    return response;
}

export const fetchAllCustomers = async (pageNumber, pageSize) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/customer', {
        params: {
            pagenumber: pageNumber,
            pagesize: pageSize
        }
        // ,
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
    }
    )

    return response;

}

export const saveCustomer = async (cname, mobile, email, userObj) => {

    let response = await axios.post(
        'http://localhost:8080/api/auth/registercustomer', {
        name: cname,
        mobileno: mobile,
        email: email,
        user: userObj

    }
    // ,headers: {
    //      Authorization: "Bearer " + localStorage.getItem('auth')
    //    }

    )

    return response;

}

export const getAllAccounts = async (pageNumber, pageSize) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/account/all', {
        params: {
            pagenumber: pageNumber,
            pagesize: pageSize
        }

        // ,headers: {
        //     Authorization: "Bearer " + localStorage.getItem('auth')
        // }
    }
    )

    return response;

}

export const saveAccount = async (balance, customerObj, bankObj) => {

    // console.log("Save account console log");
    // console.log("Balance---->" , balance);
    // console.log("customerObj------->", customerObj);
    // console.log("customerObj------->", customerObj.cid);
    // console.log("bankObj------->", bankObj);

    let response = await axios.post(
        'http://localhost:8080/bankapp/account', {
        balance: balance,
        customer: customerObj,
        bank: bankObj
    }

        //    ,headers: {
        //         Authorization: "Bearer " + localStorage.getItem('auth')
        //     }

    )

    return response;
}


export const getAccountDetails = async (accountNo) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/account', {
        params: {
            accountno: accountNo
        }
    }
    )

    return response;

}


export const getAnAccountTransaction = async (accountNo) => {

    let response = await axios.get(
        'http://localhost:8080/bankapp/account/transaction', {
        params: {
            accountno: accountNo
        }
    }
    )

    return response;

}

export const withdrawFunds = async (amount, accountObj) => {

    let response = await axios.post(
        'http://localhost:8080/bankapp/transaction/withdraw', {
        amount: amount,
        account: accountObj
    }
    // ,headers:{
    //     Authorization: "Bearer " + localStorage.getItem('auth')
    // }

    )

    return response;
}

export const depositFunds = async (amount, accountObj) => {

    let response = await axios.post(
        'http://localhost:8080/bankapp/transaction/deposit', {
        amount: amount,
        account: accountObj
    }
    // ,headers:{
    //     Authorization: "Bearer " + localStorage.getItem('auth')
    // }

    )

    return response;
}

export const transferFunds = async (receiverAccno, amount, accountObj) => {

    let response = await axios.post(
        'http://localhost:8080/bankapp/transaction/transfer', {
        receiveraccountno: receiverAccno,
        amount: amount,
        account: accountObj
    }
    // ,headers:{
    //     Authorization: "Bearer " + localStorage.getItem('auth')
    // }

    )

    return response;
}


export const validate = async (token)=>{
    let response = await axios.get('http://localhost:8080/api/auth/validate',{
        headers:{
            Authorization :'Bearer ' + token
        }
    })

    console.log(response)
    return response
}