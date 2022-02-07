import React, { useState} from 'react';
import {Password} from 'primereact/password';
import {
    Card,
    CardContent,

  } from '@material-ui/core';
import { Button } from 'primereact/button';
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
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-12">
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
                    <div className="p-field p-col-12 p-md-12">
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
  