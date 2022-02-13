import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addProduct, editProduct } from '../../actions/products';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Dropdown } from 'primereact/dropdown';



let emptyProduct = {
    type: '',
    visibility: '',
    return_policy: '',
    primary_image: '',
    digital: '',
    name: '',
    price: '',
};

const visibilityOptions = [

    {key: 'visible', value: 'VISIBLE'},
    {key: 'invisible', value:'INVISIBLE'},
    {key: 'deleted', value:'DELETED'},
]


const booleanOptions = [

    {key: 'YES', value: 'YES'},
    {key: 'NO', value:'NO'},
]


const typeOptions = [

    {key: 'art', value: 'art'},
    {key: 'automative', value: 'automative'},
    {key: 'computer', value: 'computer'},
    {key: 'electronic', value: 'electronic'},
    {key: 'fashion', value: 'fashion'},
    {key: 'industrial_and_scientific', value: 'industrial_and_scientific'},
    {key: 'video_game', value: 'video_game'},
]


const returnOptions = [

    {key: 'returnable', value: 'This Item is returnable'},
    {key: 'unreturnable', value: 'This item is not returnable'},
]







const AddProduct = (props) => {

    const {token} = props;
    // const [type, setType] = useState();
    // const [visibility, setVisibility] = useState();
    // const [return_policy, setReturnPolicy] = useState();
    // const [primary_image, setPrimaryImage] = useState();
    // const [digital, setDigital] = useState();
    // const [name, setName] = useState();
    // const [price, setPrice] = useState();


    const [record, setRecord] = useState(emptyProduct);




    const saveProduct = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            props.editProduct(record.id, record, token);
            props.getProducts(token);
            props.setProductDialog(true);

        }
        else {
            props.addProduct(_record, token)
            console.log(_record)
            props.getProducts(token);

        }
        props.setProductDialog(false);
        setRecord(emptyProduct);
    }


    const editProduct = (record) => {
        setRecord({...record});
        props.setProductDialog(true);
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
        <div className="cardssds">
          <div className="grid p-fluid">
            <div className="col-12 md:col-12">
              <div className="p-inputgroup">
                <input
                  accept="image/*"
                  type="file"
                  name='primary_image'
                  onChange={(evt) => handleFileRead(evt)}
                />
            </div>



            </div>
            <div className="col-12 md:col-12">

                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText
                        id="name"
                        value={record.name}
                        onChange={(e) => onInputChange(e, 'name')}
                        tooltip="Choose Currency Name"
                    />
                  <label htmlFor="righticon">NAME</label>
                </span>
            </div>
            <div className="col-12 md:col-12">
              <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-spin pi-spinner" />
                  <InputText
                      id="price"
                      type='number'
                      value={record.price}
                      onChange={(e) => onInputChange(e, 'price')}
                      tooltip="Choose Currency price"
                  />
                <label htmlFor="righticon">PRICE</label>
              </span>
            </div>

            <div className="col-12 md:col-12">
                <label htmlFor="category">VISIBILITY</label>
                <Dropdown
                  value={record.visibility}
                  optionLabel="value"
                  optionValue="key"
                  options={visibilityOptions}
                  onChange={(e) => onInputChange(e, 'visibility')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select Visibility Status"
                />
            </div>
            <div className="col-12 md:col-12">
                <label htmlFor="category">TYPE</label>
                <Dropdown
                  value={record.type}
                  optionLabel="value"
                  optionValue="key"
                  options={typeOptions}
                  onChange={(e) => onInputChange(e, 'type')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select Type"
                />
            </div>
            <div className="col-12 md:col-12">
                <label htmlFor="category">IS DIGITAL</label>
                <Dropdown
                  value={record.digital}
                  optionLabel="value"
                  optionValue="key"
                  options={booleanOptions}
                  onChange={(e) => onInputChange(e, 'digital')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select Type"
                />
            </div>

            <div className="col-12 md:col-12">
                <label htmlFor="category">RETURN POLICY</label>
                <Dropdown
                  value={record.return_policy}
                  optionLabel="value"
                  optionValue="key"
                  options={returnOptions}
                  onChange={(e) => onInputChange(e, 'return_policy')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select Return Policy"
                />
            </div>

            <div className="col-12 md:col-4">
              <Button label='SUBMIT' onClick={saveProduct}/>
            </div>

          </div>
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addProduct, editProduct} )
  (AddProduct);
