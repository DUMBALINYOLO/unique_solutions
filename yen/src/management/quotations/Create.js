import React, {useState} from 'react';
import { uuid } from 'uuidv4';


const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


const emptyQuotation = {
  customer: '',
  due: '',
  lines:  [{ index: makeid(30), product: "", quantity:'', service: "", type: "",  }],
}


const Create  = (props) => {
  const [record, setRecord] = useState(emptyQuotation);
  console.log(record);




  return (
    <div>
      <input />
      <input />
      <input />

    </div>
  );
}



export default Create;
