import React, { useState,  useRef} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';



const ForgotPassword = (props) => {
    let user = {
        token: '',
        password: '',
    }
    const toast = useRef(null);

    const [record, setRecord]  = useState(user)

    const returnErrors = (msg) =>{
        let erm = msg.error;
        if (erm === 'This token does not Exist'){

            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: msg.error,
                life: 9000
            });

        }else if (erm === 'This token has been used and has expired') {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: msg.error,
                life: 9000
            });

        }else{
            toast.current.show({
                severity: 'success',
                summary: 'Success',
                detail: 'Your password has been reset go on to login',
                life: 9000
            });

        }
    }

    const onSubmit = e =>{
        e.preventDefault();
        let _record = {...record};
        props.resetPassword(_record)
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
                    <label htmlFor="righticon">TOKEN</label>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-spin" />
                        <InputTextarea
                            value={record.token}
                            onChange={(e) => onInputChange(e, 'token')}
                            rows={5}
                            cols={30}
                            autoResize
                        />
                    </span>
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">PASSWORD</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <Password
                                value={record.password}
                                onChange={(e) => onInputChange(e, 'password')}
                                toggleMask
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
