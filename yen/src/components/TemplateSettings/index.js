import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@mui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@mui/core/Typography';
import AppBar from '@mui/core/AppBar';
import Fab from '@mui/core/Fab';
import Tabs from '@mui/core/Tabs';
import Tab from '@mui/core/Tab';
import IconButton from '@mui/core/IconButton';
import Paper from '@mui/core/Paper';
import ArrowBack from '@mui/icons/ArrowBack';
import FormLabel from '@mui/core/FormLabel';
import FormControl from '@mui/core/FormControl';
import FormGroup from '@mui/core/FormGroup';
import FormControlLabel from '@mui/core/FormControlLabel';
import Checkbox from '@mui/core/Checkbox';
import Switch from '@mui/core/Switch';
import Icon from '@mui/core/Icon';
import Button from '@mui/core/Button';
import ButtonBase from '@mui/core/ButtonBase';
import Palette from '@mui/icons/Palette';
import Close from '@mui/icons/Close';
import Slide from '@mui/core/Slide';
import ThemeThumb from './ThemeThumbs';
import styles from './settings-jss';
import randor from '../../images/random.jpg';
import clsx from 'clsx';
import { Tooltip, Box, Hidden } from '@mui/core';
import SettingsTwoToneIcon from '@mui/icons/SettingsTwoTone';
import CloseTwoToneIcon from '@mui/icons/CloseTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';


function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}



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



  const getItem = dataArray => dataArray.map((item, index) => (
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
                <Box p={0} className="theme-config-content">
                  <PerfectScrollbar>
                    <h4 className="theme-configurator--heading">Header</h4>
                    <ul className="theme-configurator--list">
                      <li>
                        <div>
                          <Switch
                            className="switch-small toggle-switch-line toggle-switch-success"
                            onChange={toggleHeaderFixed}
                            checked={props.headerFixed}
                          />
                        </div>
                        <div className="theme-configurator--list__heading">
                          Fixed Header
                        </div>
                      </li>
                      <li>
                        <div>
                          <Switch
                            className="switch-small toggle-switch-line toggle-switch-success"
                            onChange={toggleHeaderShadow}
                            checked={props.headerShadow}
                          />
                        </div>
                        <div className="theme-configurator--list__heading">
                          Header Shadow
                        </div>
                      </li>
                    </ul>

                    <h4 className="theme-configurator--heading">Sidebar</h4>
                    <ul className="theme-configurator--list">
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleSidebarFixed}
                          checked={props.sidebarFixed}
                        />
                        <div className="theme-configurator--list__heading">
                          Fixed sidebar
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleSidebarShadow}
                          checked={props.sidebarShadow}
                        />
                        <div className="theme-configurator--list__heading">
                          Sidebar shadow
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleSidebarFooter}
                          checked={props.sidebarFooter}
                        />
                        <div className="theme-configurator--list__heading">
                          Sidebar footer
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleSidebarUserbox}
                          checked={props.sidebarUserbox}
                        />
                        <div className="theme-configurator--list__heading">
                          Sidebar userbox
                        </div>
                      </li>
                    </ul>
                    <h4 className="theme-configurator--heading">Main content</h4>

                    <ul className="theme-configurator--list">
                      <li className="d-block py-3 px-2">
                        <div>
                          <div className="rounded-sm pt-2 text-center">
                            <h5 className="font-size-lg font-weight-bold mb-2">
                              Color schemes
                            </h5>
                            <div className="theme-configurator--swatches">
                              <div
                                onClick={() => {
                                  setContentBackground('');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                                  {
                                    active: contentBackground === 'bg-neutral-primary'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-gray-100');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-100',
                                  { active: contentBackground === 'bg-gray-100' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-gray-200');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-200',
                                  { active: contentBackground === 'bg-gray-200' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-gray-300');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-300',
                                  { active: contentBackground === 'bg-gray-300' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-gray-400');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-400',
                                  { active: contentBackground === 'bg-gray-400' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-gray-500');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-500',
                                  { active: contentBackground === 'bg-gray-500' }
                                )}
                              />
                              <div className="divider my-2" />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-primary');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                                  {
                                    active: contentBackground === 'bg-neutral-primary'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-secondary');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-secondary',
                                  {
                                    active:
                                      contentBackground === 'bg-neutral-secondary'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-success');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-success',
                                  {
                                    active: contentBackground === 'bg-neutral-success'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-info');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-info',
                                  { active: contentBackground === 'bg-neutral-info' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-warning');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-warning',
                                  {
                                    active: contentBackground === 'bg-neutral-warning'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-danger');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-danger',
                                  {
                                    active: contentBackground === 'bg-neutral-danger'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setContentBackground('bg-neutral-dark');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-dark',
                                  { active: contentBackground === 'bg-neutral-dark' }
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="theme-configurator--heading">Page title</h4>
                    <ul className="theme-configurator--list">
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={togglePageTitleIconBox}
                          checked={props.pageTitleIconBox}
                        />
                        <div className="theme-configurator--list__heading">
                          Enable title icon box
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={togglePageTitleBreadcrumb}
                          checked={props.pageTitleBreadcrumb}
                        />
                        <div className="theme-configurator--list__heading">
                          Enable breadcrumb section
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={togglePageTitleShadow}
                          checked={props.pageTitleShadow}
                        />
                        <div className="theme-configurator--list__heading">
                          Page title shadow
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={togglePageTitleDescription}
                          checked={props.pageTitleDescription}
                        />
                        <div className="theme-configurator--list__heading">
                          Enable heading description
                        </div>
                      </li>
                      <li className="d-block p-3">
                        <div>
                          <div className="rounded-sm bg-light p-3 text-center">
                            <h5 className="font-size-lg font-weight-bold mb-3">
                              Page title styles
                            </h5>
                            <div>
                              <Button
                                onClick={() => {
                                  setPageTitleStyle('');
                                  setPageTitleShadow(false);
                                }}
                                size="small"
                                variant="outlined"
                                color="primary"
                                className={clsx('m-1', {
                                  active: pageTitleStyle === ''
                                })}>
                                Style 1
                              </Button>
                              <Button
                                onClick={() => {
                                  setPageTitleStyle('app-page-title-alt-1');
                                  setPageTitleShadow(true);
                                }}
                                size="small"
                                variant="outlined"
                                color="primary"
                                className={clsx('m-1', {
                                  active: pageTitleStyle === 'app-page-title-alt-1'
                                })}>
                                Style 2
                              </Button>
                              <Button
                                onClick={() => {
                                  setPageTitleStyle('app-page-title-alt-2');
                                  setPageTitleShadow(true);
                                }}
                                size="small"
                                variant="outlined"
                                color="primary"
                                className={clsx('m-1', {
                                  active: pageTitleStyle === 'app-page-title-alt-2'
                                })}>
                                Style 3
                              </Button>
                              <Button
                                onClick={() => {
                                  setPageTitleStyle('app-page-title-alt-3');
                                  setPageTitleShadow(true);
                                }}
                                size="small"
                                variant="outlined"
                                color="primary"
                                className={clsx('m-1', {
                                  active: pageTitleStyle === 'app-page-title-alt-3'
                                })}>
                                Style 4
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-block py-3 px-2">
                        <div>
                          <div className="rounded-sm pt-2 text-center">
                            <h5 className="font-size-lg font-weight-bold mb-2">
                              Color schemes
                            </h5>
                            <div className="theme-configurator--swatches">
                              <div
                                onClick={() => {
                                  setPageTitleBackground('');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg',
                                  { active: pageTitleBackground === '' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-gray-100');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-100',
                                  { active: pageTitleBackground === 'bg-gray-100' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-gray-200');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-200',
                                  { active: pageTitleBackground === 'bg-gray-200' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-gray-300');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-300',
                                  { active: pageTitleBackground === 'bg-gray-300' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-gray-400');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-400',
                                  { active: pageTitleBackground === 'bg-gray-400' }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-gray-500');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-gray-500',
                                  { active: pageTitleBackground === 'bg-gray-500' }
                                )}
                              />
                              <div className="divider my-2" />
                              <div
                                onClick={() => {
                                  setPageTitleBackground(
                                    'bg-deep-sky app-page-title--dark'
                                  );
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-deep-sky app-page-title--dark',
                                  {
                                    active:
                                      pageTitleBackground ===
                                      'bg-deep-sky app-page-title--dark'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground(
                                    'bg-royal app-page-title--dark'
                                  );
                                }}
                                className={clsx(
                                  "theme-config-swatch theme-config-swatch--lg bg-royal app-page-title--dark')",
                                  {
                                    active:
                                      pageTitleBackground ===
                                      'bg-royal app-page-title--dark'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground(
                                    'bg-sunrise-purple app-page-title--dark'
                                  );
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-sunrise-purple app-page-title--dark',
                                  {
                                    active:
                                      pageTitleBackground ===
                                      'bg-sunrise-purple app-page-title--dark'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground(
                                    'bg-vicious-stance app-page-title--dark'
                                  );
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-vicious-stance app-page-title--dark',
                                  {
                                    active:
                                      pageTitleBackground ===
                                      'bg-vicious-stance app-page-title--dark'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground(
                                    'bg-slick-carbon app-page-title--dark'
                                  );
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-slick-carbon app-page-title--dark',
                                  {
                                    active:
                                      pageTitleBackground ===
                                      'bg-slick-carbon app-page-title--dark'
                                  }
                                )}
                              />
                              <div className="divider my-2" />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-primary');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                                  {
                                    active:
                                      pageTitleBackground === 'bg-neutral-primary'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-secondary');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-secondary',
                                  {
                                    active:
                                      pageTitleBackground === 'bg-neutral-secondary'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-success');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-success',
                                  {
                                    active:
                                      pageTitleBackground === 'bg-neutral-success'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-info');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-info',
                                  {
                                    active: pageTitleBackground === 'bg-neutral-info'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-warning');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-warning',
                                  {
                                    active:
                                      pageTitleBackground === 'bg-neutral-warning'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-danger');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-danger',
                                  {
                                    active:
                                      pageTitleBackground === 'bg-neutral-danger'
                                  }
                                )}
                              />
                              <div
                                onClick={() => {
                                  setPageTitleBackground('bg-neutral-dark');
                                }}
                                className={clsx(
                                  'theme-config-swatch theme-config-swatch--lg bg-neutral-dark',
                                  {
                                    active: pageTitleBackground === 'bg-neutral-dark'
                                  }
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="theme-configurator--heading">Footer</h4>
                    <ul className="theme-configurator--list">
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleFooterFixed}
                          checked={props.footerFixed}
                        />
                        <div className="theme-configurator--list__heading">
                          Fixed footer
                        </div>
                      </li>
                      <li>
                        <Switch
                          className="switch-small toggle-switch-line toggle-switch-success"
                          onChange={toggleFooterShadow}
                          checked={props.footerShadow}
                        />
                        <div className="theme-configurator--list__heading">
                          Footer shadow
                        </div>
                      </li>
                    </ul>
                  </PerfectScrollbar>
                </Box>
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
