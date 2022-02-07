import * as types from '.././types/uitypes';
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

export const toggleAction = { type: types.TOGGLE_SIDEBAR };
export const openMenuAction = { type: types.OPEN_MENU };
export const closeMenuAction = { type: types.CLOSE_MENU };

export const openAction = initialLocation => ({
  type: types.OPEN_SUBMENU,
  payload: initialLocation
});
export const changeThemeAction = theme => ({
  type: types.CHANGE_THEME,
  payload: theme

});
export const changeRandomThemeAction = {
  type: types.CHANGE_RANDOM_THEME,
};
export const changeModeAction = mode => ({
  type: types.CHANGE_MODE,
  payload: mode
});
export const changeGradientAction = gradient => ({
  type: types.CHANGE_GRADIENT,
  payload: gradient
});
export const changeDecoAction = deco => ({
  type: types.CHANGE_DECO,
  payload: deco
});
export const changeLayoutAction = layout => ({
  type: types.CHANGE_LAYOUT,
  payload: layout
});
export const changeBgPositionAction = position => ({
  type: types.CHANGE_BG_POSITION,
  payload: position
});
export const changeDirectionAction = direction => ({
  type: types.CHANGE_DIRECTION,
  payload: direction
});
export const playTransitionAction = isLoaded => ({
  type: types.LOAD_PAGE,
  payload: isLoaded
});

export const editAction = item => ({
  type: types.EDIT_ACTION,
  payload: item
});



export const filterAction = filter => ({
  type: types.FILTER_THINGIE,
  payload: filter,
});


export const moveAction = (item, category) => ({
  type: types.MOVE_TO,
  item, 
  category
});


export const setSidebarShadow = sidebarShadow => ({
  type: SET_SIDEBAR_SHADOW,
  payload: sidebarShadow,
});

export const setSidebarFixed = sidebarFixed => ({
  type: SET_SIDEBAR_FIXED,
  payload: sidebarFixed,
});

export const setSidebarToggleMobile = sidebarToggleMobile => ({
  type: SET_SIDEBAR_TOGGLE_MOBILE,
  payload: sidebarToggleMobile,
});


export const setSidebarFooter = sidebarFooter => ({
  type: SET_SIDEBAR_FOOTER,
  payload: sidebarFooter,
});


export const setSidebarToggle = sidebarToggle => ({
  type: SET_SIDEBAR_TOGGLE,
  payload: sidebarToggle,
});


export const setSidebarHover = sidebarHover => ({
  type: SET_SIDEBAR_HOVER,
  payload: sidebarHover,
});


export const setSidebarUserbox = sidebarUserbox => ({
  type: SET_SIDEBAR_USERBOX,
  payload: sidebarUserbox,
});

export const setHeaderFixed = headerFixed => ({
  type: SET_HEADER_FIXED,
  payload: headerFixed,
});
export const setHeaderShadow = headerShadow => ({
  type: SET_HEADER_SHADOW,
  payload: headerShadow,
});
export const setHeaderSearchHover = headerSearchHover => ({
  type: SET_HEADER_SEARCH_HOVER,
  payload: headerSearchHover,
});



export const setContentBackground = contentBackground => ({
  type: SET_CONTENT_BACKGROUND,
  payload: contentBackground,
});


export const setThemeConfiguratorToggle = themeConfiguratorToggle => ({
  type: SET_THEME_CONFIGURATOR_TOGGLE,
  payload: themeConfiguratorToggle,
});


export const setFooterFixed = footerFixed => ({
  type: SET_FOOTER_FIXED,
  payload: footerFixed,
});


export const setFooterShadow = footerShadow => ({
  type: SET_FOOTER_SHADOW,
  payload: footerShadow,
});



export const setPageTitleStyle = pageTitleStyle => ({
  type: SET_PAGE_TITLE_STYLE,
  payload: pageTitleStyle,
});


export const setPageTitleBackground = pageTitleBackground => ({
  type: SET_PAGE_TITLE_BACKGROUND,
  payload: pageTitleBackground,
});


export const setPageTitleShadow = pageTitleShadow => ({
  type: SET_PAGE_TITLE_SHADOW,
  payload: pageTitleShadow,
});


export const setPageTitleBreadcrumb = pageTitleBreadcrumb => ({
  type: SET_PAGE_TITLE_BREADCRUMB,
  payload: pageTitleBreadcrumb,
});


export const setPageTitleIconBox = pageTitleIconBox => ({
  type: SET_PAGE_TITLE_ICON_BOX,
  payload: pageTitleIconBox,
});


export const setPageTitleDescription = pageTitleDescription => ({
  type: SET_PAGE_TITLE_DESCRIPTION,
  payload: pageTitleDescription,
});




