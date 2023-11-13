import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationApp = ({totalPages, setPageNumber, pageNumber}) => {
    
    console.log("pagination is rendering")
    let items = [];
    const [active, setActive] = useState(1);

    console.log("Total Pages in pagination------>", totalPages);
    items.push(<Pagination.Prev
        onClick={
            (e) => {
                if (active === 1) {
                    
                    setActive(totalPages );
                    setPageNumber(totalPages - 1);
                }
                else {
                    
                    setActive(active - 1);
                    setPageNumber(pageNumber-1);
                }

            }
        }
    ></Pagination.Prev>)

    for (let number = 1; number <= totalPages; number++) {

        items.push(
            <Pagination.Item key={number} active={number === active}

                onClick={
                    (e) => {
                        setPageNumber(number - 1);
                        setActive(number);
                    }
                }
            >
                {number}
            </Pagination.Item>,
        );

    }
    items.push(<Pagination.Next
        onClick={
            (e) => {

                if (active === totalPages) {
                    console.log("active " + active)
                    setActive(1);
                    setPageNumber(0);
                }
                else {
                    console.log("active " + active)
                    setActive(active + 1);
                    setPageNumber(active);
                }

            }
        }

    ></Pagination.Next>)
    
    return (
            <Pagination >
                {items}
            </Pagination>
    )
}

export default PaginationApp