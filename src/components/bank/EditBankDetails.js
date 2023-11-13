import React, { useState } from 'react'
import { updateBank } from '../../services/ApiService';
import { logDOM } from '@testing-library/react';

const EditBankDetails = ({editRecord}) => {

    const [bankid, setBankid] = useState(editRecord.bankid);
    const [name, setName] = useState(editRecord.bankname);
    const [abbreviation, setAbbreviation] = useState(editRecord.abbreviation);
    const [ifsc, setIfsc] = useState(editRecord.ifsc);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await updateBank(bankid, name, abbreviation, ifsc);
        console.log("Updated Bank details", response);
        if(response){
            alert("Bank Updated Successfully");
            return;
        }
            

    }



    return (
        <div>

            <form>
                <h4 align="center"> Edit Bank Details</h4>
                <div class="form-group">
                    <label for="bankidinputfield">Bank Id</label>
                    <input type="text" disabled={true} class="form-control" id="bankidinputfield"
                        aria-describedby="emailHelp" value={bankid}
                        onChange={(e) => {
                            setBankid(e.target.value)
                        }} />
                </div>

                <div class="form-group">
                    <label for="banknameinputfield">Bank Name</label>
                    <input type="text" class="form-control" id="banknameinputfield"
                        aria-describedby="emailHelp" value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />
                </div>

                <div class="form-group">
                    <label for="bankabbreviationinputfield">Abbreviation</label>
                    <input type="text" class="form-control" id="bankabbreviationinputfield"
                        aria-describedby="emailHelp" value={abbreviation}
                        onChange={(e) => {
                            setAbbreviation(e.target.value)
                        }} />
                </div>

                <div class="form-group">
                    <label for="bankifscinputfield">Ifsc Code</label>
                    <input type="text" class="form-control" id="bankifscinputfield"
                        aria-describedby="emailHelp" value={ifsc}
                        onChange={(e) => {
                            setIfsc(e.target.value)
                        }} />
                </div>

                <button type="submit" className="btn-lg btn-success rounded-pill border-0"
                    onClick={handleSubmit}
                > Save </button>
            </form>

        </div>
    )
}

export default EditBankDetails
