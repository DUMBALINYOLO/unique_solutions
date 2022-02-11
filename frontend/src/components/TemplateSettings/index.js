import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Palette from '@material-ui/icons/Palette';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ThemeThumb from './ThemeThumbs';
import styles from './settings-jss';
import randor from '../../images/random.jpg';
import clsx from 'clsx';
import { Tooltip, Box, Hidden } from '@material-ui/core';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';


function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const TemplateSettings =  (props) => {
  const [type, setType] = useState(0)
  const [show, setShow] = useState(false)
  const [showAllThemes, setShowAllThemes] = useState(false)
  const [name, setName] = useState()
  const [position, setPosition] = useState()
  const [direct, setDirection] = useState()
  const [deco, setDeco] = useState()
  const [grad, setGrad] = useState()
  const [state, setState] = React.useState({
    right: false
  });


  const {
    classes,
    palette,
    mode,
    gradient,
    decoration,
    bgPosition,
    selectedValue,
    layout,
    direction,
    changeTheme,
    changeRandomTheme,
    changeMode,
    headerFixed,
    setHeaderFixed,
    headerShadow,
    setHeaderShadow,
    sidebarFixed,
    setSidebarFixed,
    sidebarUserbox,
    setSidebarUserbox,
    sidebarFooter,
    setSidebarFooter,
    sidebarShadow,
    setSidebarShadow,
    contentBackground,
    setContentBackground,
    pageTitleStyle,
    setPageTitleStyle,
    pageTitleBackground,
    setPageTitleBackground,
    pageTitleShadow,
    setPageTitleShadow,
    pageTitleBreadcrumb,
    setPageTitleBreadcrumb,
    pageTitleIconBox,
    setPageTitleIconBox,
    pageTitleDescription,
    setPageTitleDescription,
    footerFixed,
    setFooterFixed,
    footerShadow,
    setFooterShadow,
    changeDirection,
    changeBgPosition,
    changeDecoration,
    changeGradient,
    changeLayout,
  } = props;




  const handleChangeTab = (event, type) => {
    this.setType(type);
  };

  const handleChangeIndexTab = index => {
    this.setType(index);
  };

  // Theme Mode Handle
  const handleSwitchMode = name => event => {
    const mode = event.target.checked ? 'dark' : 'light';
    changeMode(mode);
    setName({ [name]: event.target.checked });
  };

  const handeSwitchDirection = name => event => {
    const dir = event.target.checked ? 'rtl' : 'ltr';
    changeDirection(dir);
    setDirection({ [name]: event.target.checked });
  }

  // Background Position Handle
  const handleBgChangePosition = event => {
    setDirection({ [event.target.name]: event.target.value });
    changeBgPosition(event.target.value);
  };

  // Decoration Handle
  const handleChangeDecoration = name => event => {
    setDeco({ [name]: event.target.checked });
    changeDecoration(event.target.checked);
  };

  // Decoration Handle
  const handleChangeGradient = name => event => {
    setGrad({ [name]: event.target.checked });
    changeGradient(event.target.checked);
  };

  // Layout Handle
  const handleChangeLayout = event => {
    changeLayout(event.target.value);
  };

  // Show Hide Panel
  const handleTogglePanel = () => {
    setShow(!show);
  }

  // Toggle All Themes
  const handleToggleAllThemes = () => {
    setShowAllThemes(!showAllThemes);
  }

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };



  const toggleHeaderFixed = () => {
    setHeaderFixed(!headerFixed);
  };
  const toggleHeaderShadow = () => {
    setHeaderShadow(!headerShadow);
  };

  // Sidebar

  const toggleSidebarFixed = () => {
    setSidebarFixed(!sidebarFixed);
  };
  const toggleSidebarShadow = () => {
    setSidebarShadow(!sidebarShadow);
  };

  const toggleSidebarUserbox = () => {
    setSidebarUserbox(!sidebarUserbox);
  };
  const toggleSidebarFooter = () => {
    setSidebarFooter(!sidebarFooter);
  };

  // Footer

  const toggleFooterFixed = () => {
    setFooterFixed(!footerFixed);
  };

  const toggleFooterShadow = () => {
    setFooterShadow(!footerShadow);
  };

  // Page title

  const togglePageTitleIconBox = () => {
    setPageTitleIconBox(!pageTitleIconBox);
  };


  const togglePageTitleBreadcrumb = () => {
    setPageTitleBreadcrumb(!pageTitleBreadcrumb);
  };


  const togglePageTitleShadow = () => {
    setPageTitleShadow(!pageTitleShadow);
  };


  const togglePageTitleDescription = () => {
    setPageTitleDescription(!pageTitleDescription);
  };



  const getItem= dataArray => dataArray.map((item, index) => (
      <FormControlLabel
        key={index.toString()}
        className={
          classNames(
            classes.themeField,
            index > 7 && !showAllThemes ? classes.hide : ''
          )
        }
        control={(
          <ThemeThumb
            value={item.value}
            selectedValue={selectedValue}
            handleChange={changeTheme}
            name={item.name}
          />
        )}
      />
    ));

    return (
      <aside
        className={
          classNames(
            classes.settingSidebar,
            layout === 'right-sidebar' ? classes.leftSidebar : classes.rightSidebar,
            show && classes.expanded
          )
        }
      >
        <div className={classes.toggleButton}>
          <Fab
            size="small"
            color="primary"
            aria-label="toggle"
            className={classes.button}
            onClick={handleTogglePanel}
            classes={{
              root: classes.buttonDrawer,
            }}
          >
            {show ? <Close /> : <Palette />}
          </Fab>
        </div>
        <Slide direction={direction === 'rtl' ? 'right' : 'left'} in={show} mountOnEnter unmountOnExit>
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.tab} color="default">
              <div className={classes.header}>
                <IconButton
                  onClick={handleTogglePanel}
                  className={classes.backButton}
                  aria-label="Baack"
                >
                  <ArrowBack />
                </IconButton>
                <Typography variant="button">Template Settings</Typography>
              </div>
              <Tabs
                value={type}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="THEME" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              index={type}
              onChangeIndex={handleChangeIndexTab}
            >
              <TabContainer>
                <section className={classes.settingWraper}>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>invert_colors</Icon>
                        Theme Mode
                      </FormLabel>
                      <FormGroup className={classes.themeMode}>
                        <span>Light Mode</span>
                        <FormControlLabel
                          className={classes.switch}
                          control={(
                            <Switch
                              checked={mode === 'dark'}
                              onChange={handleSwitchMode('dark')}
                              value="dark"
                              color="default"
                              classes={{
                                track: classes.themeCheckBar,
                                thumb: classes.themeCheck,
                              }}
                            />
                          )}
                        />
                        <span>Dark Mode</span>
                      </FormGroup>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset" className={classes.themeGroup}>
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>color_lens</Icon>
                        Theme Color
                      </FormLabel>
                      <div className={classes.randomThemeField}>
                        <ButtonBase onClick={() => changeRandomTheme()}>
                          <img src={randor} alt="random" />
                        </ButtonBase>
                      </div>
                      { palette !== undefined && getItem(palette) }
                      <div className={classes.center}>
                        <Button color="primary" onClick={handleToggleAllThemes}>
                          {showAllThemes ? 'Hide Some' : 'Show All'}
                        </Button>
                      </div>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.optBlock}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" className={classes.title}>
                        <Icon className={classes.icon}>texture</Icon>
                        Art Decoration
                      </FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={decoration}
                              onChange={handleChangeDecoration('decorated')}
                              value="decorated"
                            />
                          )}
                          label="Show Art Decoration"
                        />
                      </FormGroup>
                      <FormGroup row>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={gradient}
                              onChange={handleChangeGradient('gradient')}
                              value="gradient"
                            />
                          )}
                          label="Use Gradient"
                        />
                      </FormGroup>
                    </FormControl>
                  </Paper>
                </section>
              </TabContainer>
            </SwipeableViews>
          </div>
        </Slide>
      </aside>
    );
}



TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
