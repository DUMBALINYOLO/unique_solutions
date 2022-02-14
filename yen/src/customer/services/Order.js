import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import {
    addCustomerServiceLine
} from '../../actions/sales';
import { InputText } from 'primereact/inputtext';



const Buy = (props) => {
    let order = {
        type: 'SERVICES',
        service: props.id,
        quantity: 1
    }

    const {token} =props;
    const [record, setRecord]  = useState(order)
    const [orderDialog, setOrderDialog] = useState(false);

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.addCustomerServiceLine(_record, token)
            console.log(token)
        }
        props.orderDialog(false)
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }


    return (
        <div className="grid p-fluid">
          <div className="col-12 md:col-12">
            <label htmlFor="righticon">QUANTITY</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="quantity"
                    name="quantity"
                    value={record.quantity}
                    onChange={(e) => onInputChange(e, 'quantity')}
                    type='number'
                />

            </span>
            </div>
          <div className="col-12 md:col-12">
            <Button label='SUBMIT' onClick={saveItem}/>
          </div>

        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    email: state.auth.email,
})

export default connect(
  mapStateToProps,
  {addCustomerServiceLine} )
  (Buy);
