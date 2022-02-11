import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from '@material-ui/core/LinearProgress';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  changeThemeAction,
  changeRandomThemeAction,
  changeModeAction,
  changeGradientAction,
  changeDecoAction,
  changeBgPositionAction,
  changeLayoutAction,
  changeDirectionAction,
  setHeaderFixed,
  setHeaderShadow,
  setSidebarFixed,
  setSidebarShadow,
  setSidebarUserbox,
  setSidebarFooter,
  setPageTitleIconBox,
  setPageTitleBreadcrumb,
  setPageTitleShadow,
  setPageTitleStyle,
  setPageTitleBackground,
  setPageTitleDescription,
  setContentBackground,
  setFooterFixed,
  setFooterShadow,
} from '../actions/uiactions';
import  TemplateSettings  from '../components/TemplateSettings/';
import applicationTheme from './applicationTheme';



const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
  loading: {
    zIndex: 10,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 1,
    transition: 'opacity .5s ease'
  },
  loadingWrap: {
    background: 'none'
  },
  bar: {
    background: 'rgba(255, 255, 255, 0.7)'
  },
  hide: {
    opacity: 0
  }
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const AppContext = React.createContext();

class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: 0,
      theme: createMuiTheme(applicationTheme(props.color, props.mode, props.direction)),
      palette: undefined,
    };
  }

  componentWillMount = () => {
    this.onProgressShow();
  }

  componentDidMount = () => {
    const { palette } = this.props;
    this.playProgress();
    this.setState({ palette });
    console.log(palette)
  }

  componentWillUnmount() {
    this.onProgressShow();
  }

  onProgressShow = () => {
    this.setState({ pageLoaded: 0 });
  }

  onProgressHide = val => {
    this.setState({ pageLoaded: val });
  }

  playProgress = () => {
    let timer = null;
    this.onProgressShow();
    const setCompleted = () => {
      const diff = Math.random() * 40;
      const { pageLoaded } = this.state;
      this.onProgressHide(pageLoaded + diff);
      if (pageLoaded >= 100) {
        clearInterval(timer);
      }
    };
    timer = setInterval(setCompleted, 500);
  }

  handleChangeTheme = event => {
    const { mode, changeTheme, direction } = this.props;
    this.setState({ theme: createMuiTheme(applicationTheme(event.target.value, mode, direction)) });
    changeTheme(event.target.value);
  };

  handleChangeRandomTheme = () => {
    const { mode, direction } = this.props;
    this.props.changeRandomTheme(); // eslint-disable-line
    setTimeout(() => {
      this.setState({ theme: createMuiTheme(applicationTheme(this.props.color, mode, direction)) }); // eslint-disable-line
    }, 500);
  };

  handleChangeMode = mode => {
    const { color, changeMode, direction } = this.props;
    this.setState({ theme: createMuiTheme(applicationTheme(color, mode, direction)) });
    changeMode(mode);
  };

  handleChangeGradient = value => {
    const { changeGradient } = this.props;
    changeGradient(value);
  }

  handleChangeDecoration = value => {
    const { changeDecoration } = this.props;
    changeDecoration(value);
  }

  handleChangeBgPosition = value => {
    const { changeBgPosition } = this.props;
    changeBgPosition(value);
  }

  handleChangeLayout = value => {
    const { changeLayout } = this.props;
    changeLayout(value);
  }

  handleChangeDirection = dirVal => {
    // Set reducer state direction
    const { changeDirection, color, mode } = this.props;
    this.setState({ theme: createMuiTheme(applicationTheme(color, mode, dirVal)) });
    changeDirection(dirVal);

    // Set HTML root direction attribute
    document.dir = dirVal;
  };

  render() {
    const {
      classes,
      children,
      color,
      mode,
      gradient,
      decoration,
      bgPosition,
      layout,
      direction
    } = this.props;
    const { pageLoaded, theme, palette } = this.state;
    return (
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Loading
              variant="determinate"
              value={pageLoaded}
              className={pageLoaded >= 100 ? classes.hide : ''}
              classes={{
                root: classes.loading,
                colorPrimary: classes.loadingWrap,
                barColorPrimary: classes.bar
              }}
            />
            <TemplateSettings
              palette={palette}
              selectedValue={color}
              mode={mode}
              gradient={gradient}
              decoration={decoration}
              bgPosition={bgPosition}
              layout={layout}
              direction={direction}
              changeTheme={this.handleChangeTheme}
              changeRandomTheme={this.handleChangeRandomTheme}
              changeMode={this.handleChangeMode}
              changeGradient={this.handleChangeGradient}
              changeDecoration={this.handleChangeDecoration}
              changeBgPosition={this.handleChangeBgPosition}
              changeLayout={this.handleChangeLayout}
              changeDirection={this.handleChangeDirection}
              headerFixed = {this.props.headerFixed}
              setHeaderFixed = {this.props.setHeaderFixed}
              headerShadow = {this.props.headerShadow}
              setHeaderShadow = {this.props.setHeaderShadow}
              sidebarFixed = {this.props.sidebarFixed}
              setSidebarFixed = {this.props.setSidebarFixed}
              sidebarUserbox = {this.props.sidebarUserbox}
              setSidebarUserbox = {this.props.setSidebarUserbox}
              sidebarFooter = {this.props.sidebarFooter}
              setSidebarFooter = {this.props.setSidebarFooter}
              sidebarShadow = {this.props.sidebarShadow}
              setSidebarShadow = {this.props.setSidebarShadow }
              contentBackground = {this.props.contentBackground}
              setContentBackground = {this.props.setContentBackground}
              pageTitleStyle = {this.props.pageTitleStyle}
              setPageTitleStyle = {this.props.setPageTitleStyle}
              pageTitleBackground = {this.props.pageTitleBackground}
              setPageTitleBackground = {this.props.setPageTitleBackground}
              pageTitleShadow = {this.props.pageTitleShadow}
              setPageTitleShadow = {this.props.setPageTitleShadow}
              pageTitleBreadcrumb = {this.props.pageTitleBreadcrumb}
              setPageTitleBreadcrumb = {this.props.setPageTitleBreadcrumb}
              pageTitleIconBox = {this.props.pageTitleIconBox}
              setPageTitleIconBox = {this.props.setPageTitleIconBox}
              pageTitleDescription = {this.props.pageTitleDescription}
              setPageTitleDescription = {this.props.setPageTitleDescription}
              footerFixed = {this.props.footerFixed}
              setFooterFixed = {this.props.setFooterFixed}
              footerShadow  = {this.props.footerShadow}
              setFooterShadow = {this.props.setFooterShadow }

            />

            <AppContext.Provider value={this.handleChangeMode}>
              {children}
            </AppContext.Provider>
          </div>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
}



// const reducer = 'ui';
const mapStateToProps = state => ({

  force: state, // force state from reducer
  color: state.ui.theme,
  palette: state.ui.palette,
  mode: state.ui.type,
  gradient: state.ui.gradient,
  decoration: state.ui.decoration,
  bgPosition: state.ui.bgPosition,
  layout: state.ui.layout,
  direction: state.ui.direction,
  headerFixed: state.ui.headerFixed,
  headerShadow: state.ui.headerShadow,
  sidebarFixed: state.ui.sidebarFixed,
  sidebarUserbox: state.ui.sidebarUserbox,
  sidebarFooter: state.ui.sidebarFooter,
  sidebarShadow: state.ui.sidebarShadow,
  pageTitleStyle: state.ui.pageTitleStyle,
  pageTitleBackground: state.ui.pageTitleBackground,
  pageTitleShadow: state.ui.pageTitleShadow,
  pageTitleBreadcrumb: state.ui.pageTitleBreadcrumb,
  pageTitleIconBox: state.ui.pageTitleIconBox,
  pageTitleDescription: state.ui.pageTitleDescription,
  contentBackground: state.ui.contentBackground,
  footerFixed: state.ui.footerFixed,
  footerShadow: state.ui.footerShadow
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeRandomTheme: () => dispatch(changeRandomThemeAction),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeGradient: bindActionCreators(changeGradientAction, dispatch),
  changeDecoration: bindActionCreators(changeDecoAction, dispatch),
  changeBgPosition: bindActionCreators(changeBgPositionAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
  setHeaderFixed: enable => dispatch(setHeaderFixed(enable)),
  setHeaderShadow: enable => dispatch(setHeaderShadow(enable)),
  setSidebarFixed: enable => dispatch(setSidebarFixed(enable)),
  setSidebarUserbox: enable => dispatch(setSidebarUserbox(enable)),
  setSidebarFooter: enable => dispatch(setSidebarFooter(enable)),
  setSidebarShadow: enable => dispatch(setSidebarShadow(enable)),
  setPageTitleStyle: color => dispatch(setPageTitleStyle(color)),
  setPageTitleBackground: color => dispatch(setPageTitleBackground(color)),
  setPageTitleShadow: enable => dispatch(setPageTitleShadow(enable)),
  setPageTitleBreadcrumb: enable => dispatch(setPageTitleBreadcrumb(enable)),
  setPageTitleIconBox: enable => dispatch(setPageTitleIconBox(enable)),
  setPageTitleDescription: enable => dispatch(setPageTitleDescription(enable)),
  setContentBackground: color => dispatch(setContentBackground(color)),
  setFooterFixed: enable => dispatch(setFooterFixed(enable)),
  setFooterShadow: enable => dispatch(setFooterShadow(enable))
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
