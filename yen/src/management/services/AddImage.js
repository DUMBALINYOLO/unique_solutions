import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addServiceImage, editServiceImage } from '../../actions/services';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Dropdown } from 'primereact/dropdown';



const AddService = (props) => {

    let emptyImage = {
        service: props.service.id,
        image: '',
    };


    const {token} = props;

    const [record, setRecord] = useState(emptyImage);




    const saveService = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            props.editServiceImage(record.id, record, token);
            props.getImages(props.service.id,token);
            props.setImageDialog(false);

        }
        else {
            props.addServiceImage(_record, token)
            console.log(_record)
            props.getImages(props.service.id, token);
            props.setImageDialog(false);

        }
        props.setImageDialog(false);
        setRecord(emptyImage);
    }


    const editServiceImage = (record) => {
        setRecord({...record});
        props.setImageDialog(true);
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
      _record['image'] = base64;
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
              name='image'
              onChange={(evt) => handleFileRead(evt)}
            />


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
  {addServiceImage, editServiceImage} )
  (AddService);
