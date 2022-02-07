import React from 'react';
import { connect } from 'react-redux';
import {authCheckState} from './actions/auth';
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-amber/theme.css';
import 'primeflex/primeflex.css';
import './grid.css';
import Alerts from "./Alerts";
import AlertMUITemplate from "react-alert-template-mui";
import {Switch, Route} from 'react-router-dom';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';
import ManagementHome from './management/dashboard/ManagementHome';
import BursarHome from './bursar/dashboard/ManagementHome';
import About from './public/about/AboutBag';

import ResetPassword from './public/accounts/ResetPassword';
import Login from './public/accounts/Auth';
import Error from './errors/Error';
import AdminFees from './management/fees/Fees';
import AdminUsers from './management/users/UserTab';
import BursarFees from './bursar/fees/Fees';
import BursarUsers from './bursar/users/UserTab';

import BursarInvoices from './bursar/invoices/InvoicesTab';
import BursarUnpaidInvoice from './bursar/invoices/Invoice';
import BursarPartiallyPaidInvoice from './bursar/invoices/PartiallyPaidInvoice';
import BursarFullyPaidInvoice from './bursar/invoices/FullyPaidInvoice';

import AdminInvoices from './management/invoices/InvoicesTab';
import AdminUnpaidInvoice from './management/invoices/Invoice';
import AdminPartiallyPaidInvoice from './management/invoices/PartiallyPaidInvoice';
import AdminFullyPaidInvoice from './management/invoices/FullyPaidInvoice';

import { library } from '@fortawesome/fontawesome-svg-core';
import './assets/base.scss';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
);
library.add(
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
);
library.add(
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
);


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const options = {
  position: positions.MIDDLE,
	timeout: 10000,
  transition: transitions.SCALE
};


class App extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <ThemeWrapper>
        <AlertProvider template={AlertMUITemplate} {...options}>
          <Alerts/>
          <AppContext.Consumer>
              {(changeMode) => (
              <Switch>
                <Route
                  exact
                  path='/'
                  component={About}
                />
                <Route
                  exact
                  path='/login'
                  component={Login}
                />
                <Route
                  exact
                  path='/reset'
                  component={ResetPassword}
                />
                <Route
                  exact
                  path='/managementdashboard'
                  component={ManagementHome}
                />
                <Route
                  exact
                  path='/managementdashboard/fees'
                  component={AdminFees}
                />
                <Route
                  exact
                  path='/managementdashboard/users'
                  component={AdminUsers}
                />

                <Route
                  exact
                  path='/bursardashboard'
                  component={BursarHome}
                />
                <Route
                  exact
                  path='/bursardashboard/fees'
                  component={BursarFees}
                />
                <Route
                  exact
                  path='/bursardashboard/users'
                  component={BursarUsers}
                />
                <Route
                  exact
                  path='/bursardashboard/invoices'
                  component={BursarInvoices}
                />
                <Route
                  exact
                  path='/bursardashboard/unpaid-invoices/:id'
                  component={BursarUnpaidInvoice}
                />
                <Route
                  exact
                  path='/bursardashboard/partially-paid-invoices/:id'
                  component={BursarPartiallyPaidInvoice}
                />
                <Route
                  exact
                  path='/bursardashboard/fully-paid-invoices/:id'
                  component={BursarFullyPaidInvoice}
                />

                <Route
                  exact
                  path='/managementdashboard/invoices'
                  component={AdminInvoices}
                />
                <Route
                  exact
                  path='/managementdashboard/unpaid-invoices/:id'
                  component={AdminUnpaidInvoice}
                />
                <Route
                  exact
                  path='/managementdashboard/partially-paid-invoices/:id'
                  component={AdminPartiallyPaidInvoice}
                />
                <Route
                  exact
                  path='/managementdashboard/fully-paid-invoices/:id'
                  component={AdminFullyPaidInvoice}
                />

                <Route component={Error} />

              </Switch>
            )}
          </AppContext.Consumer>
        </AlertProvider>
      </ThemeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
		user: state.auth.user,
		email: state.auth.email,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
