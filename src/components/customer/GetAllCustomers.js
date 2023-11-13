import React, { useEffect, useState } from 'react'
import { fetchAllCustomers } from '../../services/ApiService';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';
import Table from '../shared/table/Table';

export const GetAllCustomers = ({ prop }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();       // total record in a table.

    const handleSubmit = async (e) => {

        let response = await fetchAllCustomers(pageNumber, pageSize);
        console.log("Customer records---->", response)
        setData(response.data.content)
        setTotalElements(response.headers['x-total-count'])
        setTotalPages(Math.ceil(response.headers['x-total-count'] / pageSize))

        console.log("Customers------------>", data);
        console.log("Total Elements---------------->", response.headers['x-total-count']);
        console.log("Page size ---------->", pageSize);
        console.log("Page number ---------->", pageNumber);
        console.log("Request URL ---------->", response.request.responseURL);
    }

    useEffect(() => {
        handleSubmit();
    }, [totalElements, pageSize, pageNumber, prop])

    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (

        <>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-8'>

                        <PaginationApp 
                            totalPages={totalPages} 
                            setPageNumber={setPageNumber} 
                            pageNumber={pageNumber}> 
                        </PaginationApp>

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
                        <Table data={data} isEditButton={true} isDeleteButton={true} ></Table>
                    </div>
                </div>
            </div>
        </>
    )
}
