import React from 'react';

import CategoryIcon from '@material-ui/icons/Category';
import {
  FiUsers
} from "react-icons/fi";
import {
  BsPeopleFill,
  BsFillFolderFill,
  BsBagFill,
  BsTvFill,
  BsGraphUp,
  BsBook,
  BsCameraVideo,
  BsEnvelopeOpenFill,
  BsBarChartFill,
  BsCollectionPlayFill,
  BsFillAlarmFill,
  BsAwardFill,
  BsChatQuote,
  BsCursorFill
} from "react-icons/bs";


const navigationConfig = [
  {
    id: "Main",
    type: "group",
    children: [
      {
        id: "user",
        title: "USERS",
        type: "collapse",
        icon: <BsPeopleFill />,
        badge: {
          title: "1",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "user",
            title: "USERS",
            type: "item",
            url: '/managementdashboard/users',
            exact: true,
          },
           {
            id: "authors",
            title: "AUTHORS",
            type: "item",
            url: '/managementdashboard/author',
            exact: true,
          },
        ],
      },
      {
        id: "accounts",
        title: "ACCOUNTING",
        type: "collapse",
        icon: <BsFillFolderFill />,
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "accounts",
            title: "ACCOUNTS",
            type: "item",
            url: '/managementdashboard/accounts',
            exact: true,
          },
          {
            id: "configurations",
            title: "CONFIGURATIONS",
            type: "item",
            url: '/managementdashboard/configurations',
            exact: true,
          },
          {
            id: "bills",
            title: "BILLS",
            type: "item",
            url: '/managementdashboard/bills',
            exact: true,
          },
          {
            id: "book keeping",
            title: "BOOK KEEPING",
            type: "item",
            url: '/managementdashboard/book-keeping',
            exact: true,
          },
          {
            id: "assets",
            title: "ASSETS",
            type: "item",
            url: '/managementdashboard/assets',
            exact: true,
          },
        ],
      },
      {
        id: "inventory",
        title: "INVENTORY",
        type: "collapse",
        icon: <BsBagFill/>,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "configurations",
            title: "CONFIGURATIONS",
            type: "item",
            url: '/managementdashboard/inventory-configurations',
            exact: true,
          },
          {
            id: "warehouses",
            title: "WAREHOUSES",
            type: "item",
            url: '/managementdashboard/warehouses',
            exact: true,
          },
          {
            id: "suppliers",
            title: "SUPPLIERS",
            type: "item",
            url: '/managementdashboard/suppliers',
            exact: true,
          },
          {
            id: "products",
            title: "PRODUCTS",
            type: "item",
            url: '/managementdashboard/inventory',
            exact: true,
          },
          {
            id: "orders",
            title: "ORDERS",
            type: "item",
            url: '/managementdashboard/inventory-orders',
            exact: true,
          },
          {
            id: "stock-management",
            title: "STOCK MANAGEMENT",
            type: "item",
            url: '/managementdashboard/stock-management',
            exact: true,
          },
        ],
      },
      {
        id: "invoice",
        title: "ORDERS",
        type: "collapse",
        icon: <BsGraphUp />,
        badge: {
          title: "4",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "invoice",
            title: "INVOICES",
            type: "item",
            url: '/managementdashboard/invoices',
            exact: true,
          },
          {
            id: "invoice",
            title: "ORDERS",
            type: "item",
            url: '/managementdashboard/customer-orders',
            exact: true,
          },
        ],
      },
      {
        id: "publication",
        title: "PUBLICATIONS",
        type: "collapse",
        icon: <BsBook />,
        badge: {
          title: "5",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "publication",
            title: "PUBLICATIONS",
            type: "item",
            url: '/managementdashboard/publications',
            exact: true,
          },
        ],
      },


      {
        id: "company",
        title: "ADVERTS",
        type: "collapse",
        icon: <BsCameraVideo />,
        badge: {
          title: "6",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },

      {
        id: "coommunications",
        title: "MESSAGING",
        type: "collapse",
        icon: <BsEnvelopeOpenFill/>,
        badge: {
          title: "7",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "reports",
        title: "REPORTS",
        type: "collapse",
        icon: <BsBarChartFill/>,
        badge: {
          title: "8",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "events",
        title: "EVENTS",
        type: "collapse",
        icon: <BsCollectionPlayFill/>,
        badge: {
          title: "9",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "tasks",
        title: "TASKS",
        type: "collapse",
        icon: <BsFillAlarmFill/>,
        badge: {
          title: "10",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "customers",
        title: "CUSTOMERS",
        type: "collapse",
        icon: <BsAwardFill/>,
        badge: {
          title: "11",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "ticketing",
        title: "TICKETING",
        type: "collapse",
        icon: <BsChatQuote/>,
        badge: {
          title: "12",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
      {
        id: "newsletter",
        title: "BLOG",
        type: "collapse",
        icon: <BsCursorFill/>,
        badge: {
          title: "13",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
