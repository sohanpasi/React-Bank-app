import React from 'react'

const PageSelect = (data) => {
  
  console.log("Page Select is rendering")
  console.log("Data", data)

  return (
    <div>
      <select className=" form-select" aria-label="Default select example" onChange={(e) => {
          
          data.setPageSize(e.target.value);
          data.setPageNumber(0);
          data.setTotalPages(Math.ceil(data.totalElements / e.target.value));
        }

        }>
        <option value="1" selected={1 === data.pageSize}>1</option>
        <option value="2" selected={2 === data.pageSize}>2</option>
        <option value="5" selected={5 === data.pageSize}>5</option>
        <option value="10" selected={10 === data.pageSize}>10</option>
      </select>

    </div>
  )
}

export default PageSelect