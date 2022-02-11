
import {
  SET_PAGE_TITLE_STYLE,
  SET_PAGE_TITLE_BACKGROUND,
  SET_PAGE_TITLE_SHADOW,
  SET_PAGE_TITLE_BREADCRUMB,
  SET_PAGE_TITLE_ICON_BOX,
  SET_PAGE_TITLE_DESCRIPTION,
  SET_FOOTER_FIXED,
  SET_FOOTER_SHADOW,
  SET_CONTENT_BACKGROUND,
  SET_THEME_CONFIGURATOR_TOGGLE,
  SET_HEADER_FIXED,
  SET_HEADER_SHADOW,
  SET_HEADER_SEARCH_HOVER,
  SET_SIDEBAR_SHADOW,
  SET_SIDEBAR_TOGGLE_MOBILE,
  SET_SIDEBAR_FIXED,
  SET_SIDEBAR_FOOTER,
  SET_SIDEBAR_TOGGLE,
  SET_SIDEBAR_USERBOX,
  SET_SIDEBAR_HOVER,
} from '.././types/uitypes';

const initialState = {
  sidebarShadow: false,
  sidebarFixed: true,
  sidebarToggleMobile: false,
  sidebarFooter: true,
  sidebarUserbox: true,
  sidebarToggle: false,
  sidebarHover: false,
  // Header
  headerFixed: true,
  headerShadow: true,
  headerSearchHover: false,
  // Main content
  contentBackground: '',
  themeConfiguratorToggle: false,
  // Footer
  footerFixed: false,
  footerShadow: false,
  // Page title
  pageTitleStyle: '',
  pageTitleBackground: '',
  pageTitleShadow: false,
  pageTitleBreadcrumb: false,
  pageTitleIconBox: true,
  pageTitleDescription: true,

};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {


    case SET_SIDEBAR_SHADOW:
      return {
        ...state,
        sidebarShadow: action.payload,
      };
    case SET_SIDEBAR_FIXED:
      return {
        ...state,
        sidebarFixed: action.payload,
      };
    case SET_SIDEBAR_TOGGLE_MOBILE:
      return {
        ...state,
        sidebarToggleMobile: action.payload,
      };
    case SET_SIDEBAR_FOOTER:
      return {
        ...state,
        sidebarFooter: action.payload,
      };
    case SET_SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebarToggle: action.payload,
      };
    case SET_SIDEBAR_HOVER:
      return {
        ...state,
        sidebarHover: action.payload,
      };
    case SET_SIDEBAR_USERBOX:
      return {
        ...state,
        sidebarUserbox: action.payload,
      };
    // Header

    case SET_HEADER_FIXED:
      return {
        ...state,
        headerFixed: action.payload,
      };
    case SET_HEADER_SHADOW:
      return {
        ...state,
        headerShadow: action.payload,
      };
    case SET_HEADER_SEARCH_HOVER:
      return {
        ...state,
        headerSearchHover: action.payload,
      };

    // Main content

    case SET_CONTENT_BACKGROUND:
      return {
        ...state,
        contentBackground: action.payload,
      };
    case SET_THEME_CONFIGURATOR_TOGGLE:
      return {
        ...state,
        themeConfiguratorToggle: action.payload,
      };
    // Footer

    case SET_FOOTER_FIXED:
      return {
        ...state,
        footerFixed: action.payload,
      };
    case SET_FOOTER_SHADOW:
      return {
        ...state,
        footerShadow: action.payload,
      };

    // Page title

    case SET_PAGE_TITLE_STYLE:
      return {
        ...state,
        pageTitleStyle: action.payload,
      };
    case SET_PAGE_TITLE_BACKGROUND:
      return {
        ...state,
        pageTitleBackground: action.payload,
      };
    case SET_PAGE_TITLE_SHADOW:
      return {
        ...state,
        pageTitleShadow: action.payload,
      };
    case SET_PAGE_TITLE_BREADCRUMB:
      return {
        ...state,
        pageTitleBreadcrumb: action.payload,
      };
    case SET_PAGE_TITLE_ICON_BOX:
      return {
        ...state,
        pageTitleIconBox: action.payload,
      };
    case SET_PAGE_TITLE_DESCRIPTION:
      return {
        ...state,
        pageTitleDescription: action.payload,
      };

    default:
      return state;
  }
}
