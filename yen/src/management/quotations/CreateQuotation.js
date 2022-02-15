import React, {Component} from 'react';
import { connect} from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@mui/styles';
import { uuid } from 'uuidv4';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {
  getUsers,
} from '../../actions/auth';
import {addQuotation, } from '../../actions/sales';
import { getServices }  from '../../actions/services';
import { getProducts }  from '../../actions/products';
import Lines from './Lines';




const styles = {
  whitePaper: {
    background: '#A9A9A9',
    color: 'yellow',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};



const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


class CreateQuotation extends Component {

  constructor(props){
    super(props);
    this.state = {
      customer: '',
      due: '',
      lines:  [{ index: makeid(30), product: "", quantity:'', service: "", type: "",  }],

      };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.handleLineItemChange = this.handleLineItemChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    this.props.getUsers(this.props.token);
    this.props.getServices(this.props.token);
    this.props.getProducts(this.props.token);

  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      customer,
      due,
      lines,

    } = this.state;

    const invoice = {
      customer,
      due,
      lines,
    };

    this.props.addQuotation(invoice, this.props.token);
    this.props.getQuotations(this.props.token);
    this.props.productDialog(false);
    this.setState({
      customer: '',
      due: '',
      lines:  [{ index: makeid(30), product: "", quantity:'', service: "", type: "", }],

    });

  };


  handleLineItemChange = (elementIndex) => (event) => {
    let lines = this.state.lines.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({lines})
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  handleChangeTable = (name, id) => event => {
    this.updateItem(id, { [name]: event.target.value });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });




  addNewRow = (event) => {
    this.setState({
      lines: this.state.lines.concat(
        [{  index: uuid(), fee: "", quantity:'' }]
      )
    })
  }

  deleteRow = (index) => (event) => {
    this.setState({
      lines: this.state.lines.filter((item, i) => {
        return index !== i
      })
    })
  }



  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lines: newLineItems,
    })
  }

  clickOnDelete(record) {
      this.setState({
          lines: this.state.lines.filter(r => r !== record)
      });
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  calcLineItemsTotal = () => {
    return this.state.lines.reduce((prev, cur) => (prev + cur.weight), '')
  }

  calcGrandTotal = () => {
    return this.calcLineItemsTotal()
  }

  render() {
    const {
      customer,
      due,
      lines,
    } = this.state;
    const {
      users,
      products,
      services,
    } = this.props;



    let customers = users.filter(user => user.type ==='customer')


    return (
      <>

        <div className="p-fluid p-formgrid p-grid">

            <div className="p-field p-col-12  p-md-6">
              <label htmlFor="due">DUE DATE</label>
              <Calendar
                  name='due'
                  showIcon
                  onChange={this.handleChange('due')}
                  value={due}
                  dateFormat="yy-mm-dd"
                />
            </div>

            <div className="p-field p-col-12  p-md-6">
                <label htmlFor="category">CUSTOMER</label>
                <Dropdown
                  value={customer}
                  optionLabel="first_name"
                  optionValue="email"
                  name='customer'
                  options={customers}
                  onChange={this.handleChange('customer')}
                  filter
                  showClear
                  filterBy="first_name"
                  placeholder="Select a Student"
              />
            </div>

        </div>
        <div style={{ backgroundColor: '#434547'}}>
          <Lines
              items={lines}
              addHandler={this.addNewRow}
              changeHandler={this.handleLineItemChange}
              focusHandler={this.handleFocusSelect}
              deleteHandler={this.deleteRow}
              reorderHandler={this.handleReorderLineItems}
              products ={products}
              services ={services}
          />
        </div>

        <div className="p-field p-col-12 p-md-2">

          <Button label="SUBMIT" onClick={this.onSubmit} />
        </div>

      </>
    );
  }
}



const mapStateToProps = state =>({
  users: state.auth.people,
  products: state.products.products,
  services: state.services.services,
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    addQuotation,
    getServices,
    getProducts,
    getUsers,

   }),
    withStyles(styles)
)
    (CreateQuotation);
