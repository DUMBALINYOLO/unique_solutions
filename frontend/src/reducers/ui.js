
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
  /* Settings for Themes and layout */
  theme: 'goldTheme',
  direction: 'ltr',
  type: 'dark', // light or dark
  gradient: true, // true or false
  decoration: true, // true or false
  bgPosition: 'half', // half, header, full
  layout: 'left-sidebar', // big-sidebar, left-sidebar, top-navigation, mega-menu
  /* End settings */
  palette: [
    { name: 'Ocean Sky', value: 'skyBlueTheme' },
    { name: 'Purple', value: 'purpleRedTheme' },
    { name: 'Rose Gold', value: 'magentaTheme' },
    { name: 'Leaf', value: 'cyanTheme' },
    { name: 'Mint', value: 'blueCyanTheme' },
    { name: 'Ubuntu', value: 'orangeTheme' },
    { name: 'Ultra Violet', value: 'purpleTheme' },
    { name: 'Vintage', value: 'yellowCyanTheme' },
    { name: 'Fruit', value: 'greenOrangeTheme' },
    { name: 'Botani', value: 'pinkGreenTheme' },
    { name: 'Deep Ocean', value: 'blueTheme' },
    { name: 'School', value: 'yellowBlueTheme' },
    { name: 'Queen', value: 'pinkBlueTheme' },
    { name: 'Joker', value: 'greenPurpleTheme' },
    { name: 'Ruby', value: 'redTheme' },
    { name: 'Sultan', value: 'goldTheme' },
    { name: 'Monochrome', value: 'greyTheme' },
  ],

  pageLoaded: false,
  sidebarOpen: true,
  currentPage: 'ALL',
  item: {},
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
    case EDIT_ACTION:
      return  {
        ...state,
        profile: action.payload,
      };
    case TOGGLE_SIDEBAR:
      return  {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };
    case OPEN_MENU:
      return {
        ...state,
        sidebarOpen: state.sidebarOpen
      };
    case CLOSE_MENU:
      return {
        ...state,
        sidebarOpen: state.sidebarOpen
      };

    case CHANGE_RANDOM_THEME:
      const paletteArray = state.palette;
      const random = paletteArray[Math.floor(Math.random() * paletteArray.length)];
      return {
        ...state,
        theme: random.value,
      };

    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case CHANGE_MODE:
      return {
        ...state,
        type: action.payload,
      };
    case CHANGE_GRADIENT:
      return {
        ...state,
        gradient: action.payload,
      };
    case CHANGE_DECO:
      return{
        ...state,
        decoration: action.payload,
      };
    case CHANGE_BG_POSITION:
      return {
        ...state,
        bgPosition: action.payload
      };
    case CHANGE_LAYOUT:
      return  {
        ...state,
        layout: action.payload
      };
    case CHANGE_DIRECTION:
      return  {
        ...state,
        direction: action.payload,
      };

    case FILTER_THINGIE:
      return  {
        ...state,
        currentPage: action.payload,
      };

    case LOAD_PAGE:
      return  {
        ...state,
        pageLoaded: action.payload,
      };
    case MOVE_TO:
      return  {
        ...state,
      currePage: action.category,
      item: action.item,
      };

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
