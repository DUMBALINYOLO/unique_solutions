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
        children: [
          {
            id: "user",
            title: "USERS",
            type: "item",
            url: '/managementdashboard/users',
            exact: true,
          },

        ],
      },


      {
        id: "invoice",
        title: "INVOICES",
        type: "collapse",
        icon: <BsGraphUp />,
        children: [
          {
            id: "invoice",
            title: "INVOICES",
            type: "item",
            url: '/managementdashboard/invoices',
            exact: true,
          },
        ],
      },

      {
        id: "PRODUCTS",
        title: "PRODUCTS",
        type: "collapse",
        icon: <BsEnvelopeOpenFill/>,
        children: [
          {
            id: "enquiries",
            title: "PRODUCTS",
            type: "item",
            url: '/managementdashboard/products',
            exact: true,
          },
        ],
      },

      {
        id: "SERVICES",
        title: "SERVICES",
        type: "collapse",
        icon: <BsEnvelopeOpenFill/>,
        children: [
          {
            id: "enquiries",
            title: "SERVICES",
            type: "item",
            url: '/managementdashboard/services',
            exact: true,
          },
        ],
      },

    ],
  },
];

export default navigationConfig;
