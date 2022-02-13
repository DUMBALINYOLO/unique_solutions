import React, { useState,  useRef} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';



const ForgotPassword = (props) => {
    let user = {
      email: '',
      password: '',
      password2: '',
    }
    const toast = useRef(null);

    const [record, setRecord]  = useState(user)

    const returnErrors = (msg) =>{
        let erm = msg.error;
        if (erm !== ''){

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
                detail: 'You have succesfully registered. Go on to login',
                life: 9000
            });

        }
    }

    const onSubmit = e =>{
        e.preventDefault();
        let _record = {...record};
        props.activateUser(_record)
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
                <div className="grid p-fluid">
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">EMAIL</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="email"
                                onChange={(e) => onInputChange(e, 'email')}
                                value={record.email}
                            />
                        </span>
                    </div>

                    <div className="col-12 md:col-12">
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
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">PASSWORD2</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <Password
                                value={record.password2}
                                onChange={(e) => onInputChange(e, 'password2')}
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
