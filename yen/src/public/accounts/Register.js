import React, { useState,  useRef} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';


const genderOptions = [
    {key: 'male', value: 'MALE'},
    {key: 'female', value:'FEMALE'},
  ]

const ForgotPassword = (props) => {
    let user = {
        email: '',
        username: '',
        password: '',
        first_name: '',
        gender: '',
        last_name: '',
        middle_name: '',
        phone_number: '',
        whatsapp_number: '',
        type: 'customer'
    }
    const toast = useRef(null);

    const [record, setRecord]  = useState(user)



    const onSubmit = e =>{
        e.preventDefault();
        let _record = {...record};
        props.addStudent(_record)
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
                        <label htmlFor="righticon">USERNAME</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="username"
                                onChange={(e) => onInputChange(e, 'username')}
                                value={record.username}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">FIRST NAME</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="first_name"
                                onChange={(e) => onInputChange(e, 'first_name')}
                                value={record.first_name}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">MIDDLE NAME</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="middle_name"
                                onChange={(e) => onInputChange(e, 'middle_name')}
                                value={record.middle_name}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">LAST NAME</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="last_name"
                                onChange={(e) => onInputChange(e, 'last_name')}
                                value={record.last_name}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">PHONE NUMBER</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="phone_number"
                                onChange={(e) => onInputChange(e, 'phone_number')}
                                value={record.phone_number}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <label htmlFor="righticon">WHATSAPP NUMBER</label>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-spin" />
                            <InputText
                                id="whatsapp_number"
                                onChange={(e) => onInputChange(e, 'whatsapp_number')}
                                value={record.whatsapp_number}
                            />
                        </span>
                    </div>
                    <div className="col-12 md:col-12">
                        <Dropdown
                            value={record.gender}
                            optionLabel="value"
                            optionValue="key"
                            options={genderOptions}
                            onChange={(e) => onInputChange(e, 'gender')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="Select Gender"
                        />

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

                    <div className="col-12 md:col-6">
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
