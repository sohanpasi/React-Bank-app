import React, { useEffect, useState } from 'react'
import { getAllBanks, deleteBank, validate } from '../../services/ApiService';
import Table from '../shared/table/Table';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';
import EditDetails from '../shared/model/EditDetails';

export const GetAllBanks = ({ prop }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();

    const [bank, setBank] = useState();
    const [isModelOpen, setIsModelOpen] = useState()

    const [isUserValid, setIsUserValid] = useState(true)


    const handleSubmit = async (e) => {
        let response;

        response = await getAllBanks(pageNumber, pageSize);

        console.log("Bank Records---------->",response);
        setData(response.data.content);
        setTotalElements(response.headers['x-total-count']);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / pageSize));

        console.log("Data------------>", data);
        console.log("Total Count---------------->", response.headers['x-total-count']);
        console.log("Page size ---------->", pageSize);
        console.log("Page number ---------->", pageNumber);
        console.log("Request ---------->", response.request.responseURL);
    }


    const editBankfunction=(bankToBeEdited)=>{
        console.log("Bank Record required to edit----->", bankToBeEdited);
        setBank(bankToBeEdited)
        setIsModelOpen(true)
    }

    const deleteBankfunction= async(bankToBeDeleted)=>{
        console.log("Bank Record required to delete----->", bankToBeDeleted);
        let bankId = bankToBeDeleted.bankid;
        console.log("Bank id required to delete------>", bankId);
        let response = await deleteBank(bankId);
    }


    const validateUser = async() =>{

        const authToken = localStorage.getItem('authentication');
        console.log("authToken -------->", authToken);

        if(!authToken){
            setIsUserValid(false)
        }
        let response = await validate(authToken)
        console.log(response);

        if(response.data.role[0].authority != "ROLE_ADMIN") {
            setIsUserValid(false)
        }
        
        if(response.data.role[0].authority != "ROLE_USER") {
            setIsUserValid(true)
        }
    } 

    useEffect(()=>{
        validateUser()
    },[])

    useEffect(() => {
        handleSubmit();
    }, [totalElements, pageSize, pageNumber])


    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    if(isUserValid)
    {


    return (
        <>
            {isModelOpen && <EditDetails value={bank} />}

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-8'>

                        <PaginationApp totalPages={totalPages} setPageNumber={setPageNumber} pageNumber={pageNumber}> </PaginationApp>
                        
                    </div>
                    <div className='col-2 offset-1'>

                        <PageSelect

                            totalElements={totalElements}
                            setPageSize={setPageSize}
                            setPageNumber={setPageNumber}
                            setTotalPages={setTotalPages}
                            pageSize={pageSize}
                        >


                        </PageSelect>
                    </div>
                    <div className='col-10 offset-1'>
                        <Table data={data} isEditButton={true} isDeleteButton={true} editFunction={editBankfunction} deleteFunction={deleteBankfunction}></Table>
                    </div>
                </div>
            </div>
        </>
    )
    }
    else{
        <a href='/'>Please Login First</a>
    }
}
