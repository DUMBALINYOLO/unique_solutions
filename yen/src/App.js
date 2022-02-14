import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {authCheckState} from './actions/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import 'primeflex/primeflex.css';
import './assets/base.scss';
import ThemeContext from "./context/ThemeContext";
import ManagementHome from './management/layout/leftsidebar/LeftSidebar';
import getTheme from "./theme/theme";
import { ThemeProvider} from '@mui/material/styles';
import {
  Routes,
  Route,
} from "react-router-dom";
import Error from './Error';
import ManagementProducts from './management/products/Products';
import ManagementProduct from './management/products/Product';
import ManagementServices from './management/services/Services';
import ManagementService from './management/services/Service';
import PublicHome from './public/home/Home';
import PublicProducts from './public/products/Products';
import PublicProduct from './public/products/Product';
import PublicServices from './public/services/Services';
import PublicService from './public/services/Service';
import CustomerHome from './customer/home/Home';
import CustomerProducts from './customer/products/Products';
import CustomerProduct from './customer/products/Product';
import CustomerServices from './customer/services/Services';
import CustomerService from './customer/services/Service';
import CustomerInvoices from './customer/invoices/Invoices';
import ResetPassword from './public/accounts/ResetPassword';
import RegisterAccount from './public/accounts/RegisterAccount';
import Login from './public/accounts/Auth';
import ManagementInvoices from './management/invoices/Invoices';


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

const App = (props) => {
  const curThemeName = localStorage.getItem("appTheme") || "light";

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = themeName => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  useEffect(() => {
    // if(!props.fetched) {
    //     props.getProducts(props.token);
    // }
    props.onTryAutoSignup();
    console.log('mount it!');
  }, []);

  const theme = getTheme({
    paletteType: themeType
  });


  return (


      <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              exact
              path="/"
              element={<PublicHome />}
            />
            <Route
              exact
              path='/login'
              element={<Login/>}
            />
            <Route
              exact
              path='/reset'
              element={<ResetPassword/>}
            />
            <Route
              exact
              path='/register'
              element={<RegisterAccount />}
            />

            <Route
              exact
              path="/products"
              element={<PublicProducts />}
            />
            <Route
              exact
              path="/products/:id"
              element={<PublicProduct />}
            />
            <Route
              exact
              path="/services"
              element={<PublicServices />}
            />
            <Route
              exact
              path="/services/:id"
              element={<PublicService />}
            />
            <Route
              exact
              path="/customers/"
              element={<CustomerHome />}
            />
            <Route
              exact
              path="/customers/products"
              element={<CustomerProducts />}
            />
            <Route
              exact
              path="/customers/products/:id"
              element={<CustomerProduct />}
            />
            <Route
              exact
              path="/customers/services"
              element={<CustomerServices />}
            />
            <Route
              exact
              path="/customers/services/:id"
              element={<CustomerService />}
            />
            <Route
              exact
              path="/customers/invoices"
              element={<CustomerInvoices />}
            />
            <Route
              exact
              path="/management"
              element={<ManagementHome />}
            />
            <Route
              exact
              path="/management/products"
              element={<ManagementProducts />}
            />
            <Route
              exact
              path="/management/products/:id"
              element={<ManagementProduct />}
            />
            <Route
              exact
              path="/management/services"
              element={<ManagementServices />}
            />
            <Route
              exact
              path="/management/services/:id"
              element={<ManagementService />}
            />
            <Route
              exact
              path="/management/invoices"
              element={<ManagementInvoices />}
            />

            <Route
              element={<Error />}
            />

          </Routes>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
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
