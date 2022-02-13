import React, { useState,  useRef} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';


const Login = (props) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = e =>{
        e.preventDefault();
        props.authLogin(email, password);
    };


    return(
        <Card className="mx-0 mt-0 w-100 p-0 mb-4 border-0">
            <CardContent >
                <div className="grid p-fluid">
                    <div className="col-12 md:col-12">
                    <label htmlFor="righticon">EMAIL</label>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-spin" />
                        <InputText
                            id="email"
                            name="email"
                            label="Name"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">PASSWORD</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                toggleMask
                            />
                        </span>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <Button
                            label='LOGIN'
                            onClick={onSubmit}
                            className="p-button-warning p-button-rounded p-mr-2 p-mb-2"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}




export default Login;
