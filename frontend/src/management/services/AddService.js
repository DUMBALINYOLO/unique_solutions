import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addService, editService } from '../../actions/services';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';



let emptyService = {
    name: '',
    description: '',
    fee: '',
    category: '',
    listed: '',
    primary_image: '',
};



const booleanOptions = [

    {key: 'YES', value: 'YES'},
    {key: 'NO', value:'NO'},
]


const categoryOptions = [

    {key: 'REPAIR', value: 'REPAIR'},
    {key: 'PRINTING', value: 'PRINTING'},
    {key: 'PHOTOCOPYING', value: 'PHOTOCOPYING'},
    {key: 'LAMINATING', value: 'LAMINATING'},
]



const AddService = (props) => {

    const {token} = props;
    const [record, setRecord] = useState(emptyService);




    const saveService = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            props.editService(record.id, record, token);
            props.getServices(token);
            props.setServiceDialog(true);

        }
        else {
            props.addService(_record, token)
            console.log(_record)
            props.getServices(token);

        }
        props.setServiceDialog(false);
        setRecord(emptyService);
    }


    const editService = (record) => {
        setRecord({...record});
        props.setServiceDialog(true);
    }


    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error);
        }
      })
    }


    const handleFileRead = async (event) => {
      const file = event.target.files[0]
      const base64 = await convertBase64(file)
      let _record = {...record};
      _record['primary_image'] = base64;
      setRecord(_record);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="image/*"
              type="file"
              name='primary_image'
              onChange={(evt) => handleFileRead(evt)}
            />


          </div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="name"
                    value={record.name}
                    onChange={(e) => onInputChange(e, 'name')}
                    tooltip="Choose Name"
                />
              <label htmlFor="righticon">NAME</label>
            </span>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="fee"
                    type='number'
                    value={record.fee}
                    onChange={(e) => onInputChange(e, 'fee')}
                    tooltip="Choose Fee"
                />
              <label htmlFor="righticon">FEE</label>
            </span>
          </div>

          <div className="p-field p-col-12  p-md-12">
              <label htmlFor="category">LISTED ?</label>
              <Dropdown
                value={record.listed}
                optionLabel="value"
                optionValue="key"
                options={booleanOptions}
                onChange={(e) => onInputChange(e, 'listed')}
                filter
                showClear
                filterBy="value"
                placeholder="Select Listed Status"
              />
          </div>
          <div className="p-field p-col-12  p-md-12">
              <label htmlFor="category">CATEGORY</label>
              <Dropdown
                value={record.category}
                optionLabel="value"
                optionValue="key"
                options={categoryOptions}
                onChange={(e) => onInputChange(e, 'category')}
                filter
                showClear
                filterBy="value"
                placeholder="Select Type"
              />
          </div>
          <div className="p-field p-col-12">
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputTextarea
                    id="description"
                    value={record.description}
                    onChange={(e) => onInputChange(e, 'description')}
                    required
                    autoFocus
                    rows={3}
                    cols={30}
                    autoResize
                  />
                <label htmlFor="righticon">DESCRIPTION</label>
              </span>
          </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveService}/>
          </div>

        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addService, editService} )
  (AddService);
