import React from 'react';

import CategoryIcon from '@mui/icons-material/Category';
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
            url: '/management/users',
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
            url: '/management/invoices',
            exact: true,
          },
        ],
      },
      {
        id: "quotation",
        title: "QUOTATIONS",
        type: "collapse",
        icon: <BsGraphUp />,
        children: [
          {
            id: "quotation",
            title: "QUOTATIONS",
            type: "item",
            url: '/management/quotations',
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
            url: '/management/products',
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
            url: '/management/services',
            exact: true,
          },
        ],
      },

    ],
  },
];

export default navigationConfig;
