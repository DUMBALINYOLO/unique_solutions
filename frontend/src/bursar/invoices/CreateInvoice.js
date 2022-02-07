import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { uuid } from 'uuidv4';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {
  getUsers,
} from '../../actions/auth';
import {addInvoice, getFees} from '../../actions/fees';
import Lines from './Lines';









const styles = {
  whitePaper: {
    background: '#A9A9A9',
    color: 'yellow',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};





class CreateInvoice extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      student: '',
      due: '',
      lines:  [{ index: uuid(), fee: "", quantity:'' }],

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
    this.props.getFees(this.props.token);
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      student,
      due,
      lines,

    } = this.state;

    const invoice = {
      student,
      due,
      lines,
    };

    this.props.addInvoice(invoice, this.props.token);
    this.props.getInvoices(this.props.token);
    this.props.productDialog(false);
    this.setState({
      student: '',
      due: '',
      lines:  [{ index: uuid(), fee: "", quantity:''  }],

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
      student,
      due,
      lines,
    } = this.state;
    const {
      users,
      fees
    } = this.props;

    console.log(users)

    let students = users.filter(user => user.type ==='student')


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
                <label htmlFor="category">STUDENT</label>
                <Dropdown
                  value={student}
                  optionLabel="first_name"
                  optionValue="email"
                  name='student'
                  options={students}
                  onChange={this.handleChange('student')}
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
              fees ={fees}
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
  fees: state.fees.fees,
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    addInvoice,
    getFees,
    getUsers


   }),
    withStyles(styles)
)
    (CreateInvoice);
