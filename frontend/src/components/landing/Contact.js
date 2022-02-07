import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';
import styles from './landingStyle-jss';
import {createEnquiry} from '../../actions/messaging';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            email,
            subject,
            message,

        } = this.state;
        const enquiry = {
          name,
          email,
          subject,
          message,
        };
        this.props.createEnquiry(enquiry);
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

  render() {
    const { classes, slideMode } = this.props;
    const {
      name,
      email,
      subject,
      message,
    } = this.state;

    return (
      <div className={classNames(classes.contact, !slideMode && classes.withBg)}>
        <div className={classes.container}>
          <div className={classes.contactBubble}>
            <Title title="Make an Enquiry" align="left" nomargin />
            <Typography component="p" className={classes.contactText}>
                48A G. SILUNDIKA STREET
                BETWEEN 3rd & 4th Avenues
                Bulawayo, Zimbabwe
                Tel: +263 965796, 884866/5, 67047
                Fax: 2639884868, 884867
                Email: info@flexible.co.zw
            </Typography>
          <form onSubmit={this.onSubmit}>
              <Grid container spacing={3}>
                <Grid item lg={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      id="standard-name"
                      label="Who are You?"
                      className={classes.textField}
                      value={name}
                      required
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      id="standard-email"
                      label="Your Email?"
                      className={classes.textField}
                      value={email}
                      required
                      onChange={this.handleChange('email')}
                      margin="normal"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      id="subject"
                      label="Your Enquiry?"
                      className={classes.textField}
                      value={subject}
                      required
                      onChange={this.handleChange('subject')}
                      margin="normal"
                    />
                  </FormControl>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      id="standard-multiline-flexible"
                      label="Your Message"
                      multiline
                      rows="4"
                      value={message}
                      onChange={this.handleChange('message')}
                      className={classes.textField}
                      margin="normal"
                    />
                  </FormControl>
                  <div className={classes.btnArea}>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      className={classes.button
                      } color="secondary">Send</Button>
                  </div>
                </Grid>
              </Grid>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Contact.defaultProps = {
  slideMode: false
};

const ContactMapped = connect(
  null,
  {createEnquiry}
)(Contact);

export default withStyles(styles)(ContactMapped);
