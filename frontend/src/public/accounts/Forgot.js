import React, { useState,  useRef} from 'react';
import {
    Card,
    CardContent,

  } from '@material-ui/core';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';



const ForgotPassword = (props) => {
    let user = {
        email: '',
    }
    const toast = useRef(null);

    const [record, setRecord]  = useState(user)

    const returnErrors = (msg) =>{
        let erm = msg.error;
        if (erm !== 'An account with this email address does not Exist'){
            toast.current.show({ 
                severity: 'success', 
                summary: 'Success', 
                detail: 'Your request has been approved. Open your email and follow the instructions to set new password', 
                life: 9000 
            });
            
        }else{
            toast.current.show({ 
                severity: 'error', 
                summary: 'Error', 
                detail: msg.error, 
                life: 9000 
            }); 
            
        }
    }

    const onSubmit = e =>{
        e.preventDefault();
        let _record = {...record};
        props.forgotPassword(_record)
        returnErrors(props.msg);
        setRecord(user)
        
    };

    

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }

    




    return(
        <Card className="mx-0 mt-0 w-100 p-0 mb-4 border-0">
            <Toast ref={toast} />
            <CardContent >
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">EMAIL</label>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-spin" />
                        <InputText
                            id="email"
                            name="email"
                            label="Name"
                            onChange={(e) => onInputChange(e, 'email')}
                            value={record.email}
                        />
                    </span>
                    </div>
                    
                    <div className="p-field p-col-12 p-md-4">
                        <Button 
                            label='SUBMIT' 
                            onClick={onSubmit}
                            className="p-button-warning p-button-rounded p-mr-2 p-mb-2"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}


export default ForgotPassword;
  