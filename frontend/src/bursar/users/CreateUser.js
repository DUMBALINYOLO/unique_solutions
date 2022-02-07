import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';

import { addUser } from '../../actions/users/users';
import { Dropdown } from 'primereact/dropdown';
import {connect} from 'react-redux';
import { Button } from 'primereact/button';
import {Password} from 'primereact/password';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))

const CreateUser = (props) => {
    const {
        getUsers,
        userDialog

    } =props;

    let emptyUser = {
        email: '',
        username: '',
        type: '',
        gender: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        password: '',
    };

    const userOptions = [
      {key: 'admin', value: 'ADMIN'},
      {key: 'bursar', value:'BURSAR'},
      {key: 'student', value:'STUDENT'},

    ]

    const genderOptions = [
        {key: 'male', value: 'MALE'},
        {key: 'female', value:'FEMALE'},
      ]

    const classes = useStyles();
    const [record, setRecord] = useState(emptyUser);
    const {token} = props;


    const saveUser = (e) => {
        e.preventDefault();
        let _record = {...record};
        props.addUser(_record, token)
        getUsers(token)
        setRecord(emptyUser);
        userDialog(token);
    }


    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    return (
      < >
        <Paper className={classes.pageContent}>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">USER NAME</label>
                    <span className="p-float-label p-input-icon-right">
                        <InputText
                          id="username"
                          name="username"
                          label="User Name"
                          value={record.username}
                          onChange={(e) => onInputChange(e, 'username')}
                          tooltip="Choose User Name"
                        />
                    </span>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">EMAIL</label>
                    <span className="p-float-label p-input-icon-right">
                        <InputText
                        id="email"
                        name="email"
                        label="Email"
                        value={record.email}
                        onChange={(e) => onInputChange(e, 'email')}
                        tooltip="Choose Email"
                        />

                    </span>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">FIRST NAME</label>
                    <span className="p-float-label p-input-icon-right">
                        <InputText
                        value={record.first_name}
                        onChange={(e) => onInputChange(e, 'first_name')}
                        />

                    </span>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">MIDLE NAME</label>
                    <span className="p-float-label p-input-icon-right">
                        <InputText
                        value={record.middle_name}
                        onChange={(e) => onInputChange(e, 'middle_name')}
                        />

                    </span>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="righticon">LAST NAME</label>
                    <span className="p-float-label p-input-icon-right">
                        <InputText
                        value={record.last_name}
                        onChange={(e) => onInputChange(e, 'last_name')}
                        />

                    </span>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <Dropdown
                        value={record.type}
                        optionLabel="value"
                        optionValue="key"
                        options={userOptions}
                        onChange={(e) => onInputChange(e, 'type')}
                        filter
                        showClear
                        filterBy="value"
                        placeholder="Select Role"
                    />

                </div>
                <div className="p-field p-col-12 p-md-12">
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
                    <Button label="SUBMIT" onClick={saveUser} />
                </div>
            </div>
          </Paper>
        </ >
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addUser} )
  (CreateUser);
