import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import HeaderLanding from '../../components/LandingPage/Header';
import Hidden from '@material-ui/core/Hidden';
import styles from './appStyles-jss';



class Parallax extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // const mainContent = document.getElementById('app');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scroll = window.pageYOffset;
    this.setState({
      transform: scroll
    });
  }

  render() {
    const {
      classes,
      children,
      gradient,
    } = this.props;
    const { transform } = this.state;
    return (
      <div className={classNames(classes.appFrameSlider, gradient ? classes.gradientBg : classes.solidBg)}>
        <Hidden only="lg">
          <HeaderLanding turnDarker={transform > 30} />
        </Hidden>
        {children}
      </div>
    );
  }
}




const mapStateToProps = state => ({
  gradient: state.ui.gradient,
});

const ParallaxMaped = connect(
  mapStateToProps,
)(Parallax);

export default (withStyles(styles)(ParallaxMaped));
