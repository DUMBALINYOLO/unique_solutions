import React, { Component } from 'react'
import { MdCancel as DeleteIcon } from 'react-icons/md'
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';








class Line extends Component {


  render = () => {

    const { index, quantity, fees, fee } = this.props;


    return (
      <div style={{backgroundColor:''}}>
        <div className="p-fluid p-formgrid p-grid">

          <div className="p-field p-col-12 p-md-5" style={{padding: 20}}>
              <Dropdown
                  value={fee}
                  optionLabel="name"
                  optionValue="id"
                  name="fee"
                  options={fees}
                  onChange={this.props.changeHandler(index)}
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select a Fee"
                />
          </div>
          <div className="p-field p-col-12 p-md-5" style={{padding: 20}}>
            <InputText
              value={quantity}
              name="quantity"
              type="number"
              tooltip="Enter Quantiy"
              onChange={this.props.changeHandler(index)}
              onFocus={this.props.focusHandler}
            />
          </div>
          <div className="p-field p-col-12 p-md-2" style={{padding: 20}}>
            <button type="button"
              className='deleteItem'
              onClick={this.props.deleteHandler(index)}
            ><DeleteIcon size="1.25em" /></button>
          </div>
        </div>
      </div>

    )
  }
}

export default Line;
