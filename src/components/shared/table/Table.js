import React from 'react'

const Table = (tableData) => {

    console.log("Table is rendering");

    let rowsOfTable;
    let headOfTable;

    // console.log("data-------> " + tableData);                
    // tableData = tableData.data;
    console.log("data in table() " + tableData);              // array of objects


    if (tableData.data.length > 0) {
        headOfTable = Object.keys(tableData.data[0]).map((d) => {            
            return (
                <th class="table-active"> {d} </th>
            )
        })
        
    }

    console.log("Inside rows of table")
    if (tableData.data.length > 0) {
        rowsOfTable = tableData.data.map((d) => {               // d (record) and each record contain multiple values

            return (
                <tr class="table-info">
                    {
                        Object.values(d).map((t) => {
                            return (
                                <td>{t.toString()}</td>
                            )
                        })
                    }
                    
                    {tableData.isEditButton && <td> <button className="btn btn-success" onClick={()=>{
                        tableData.editFunction(d)
                    }}> Edit </button> </td>}
                    {tableData.isDeleteButton && <td> <button className="btn btn-danger" onClick={()=>{
                        tableData.deleteFunction(d)
                    }}> Delete </button> </td>}

                </tr>
            )

        });
    }
    return (

        <table class="table table-bordered mt-2 border-primary">
            <thead>
                <tr> 
                    {headOfTable} 
                    {tableData.isEditButton && <th> Edit </th>}
                    {tableData.isDeleteButton && <th> Delete </th>}
                </tr>
            </thead>
            <tbody> 
                {rowsOfTable}
            </tbody>
        </table>
    
    )
}

export default Table