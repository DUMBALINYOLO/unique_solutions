import React from 'react'
import { TextField } from '@material-ui/core';

export default function DateInput(props) {

    const { name, label, value,error=null, onChange, id } = props;
    return (
        <TextField
            variant="outlined"
            id={id}
            type="date"
            label={label}
            name={name}
            defaultValue="2021-01-01"
            format="yy-mm-dd"
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            InputLabelProps={{
              shrink: true,
            }}
        />
    )
}
