import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addProduct } from '../../actions/products';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';







const AddProduct = (props) => {

    const {token} = props;
    const [type, setType] = useState();
    const [visibility, setVisibility] = useState();
    const [return_policy, setReturnPolicy] = useState();
    const [primary_image, setPrimaryImage] = useState();
    const [digital, setDigital] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    
    


    const saveImage = (e) => {
        e.preventDefault();

        const uploadData = {
          type,
          visibility,
          return_policy,
          primary_image,
          digital,
          name,
          price,
        }
        props.addProduct(uploadData)
        props.imageDialog(false)
        props.getProducts()
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
      setImage(base64)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="image/*"
              type="file"
              name='cover'
              onChange={(evt) => handleFileRead(evt)}
            />


          </div>

          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveImage}/>
          </div>
          
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addProduct} )
  (AddProduct);