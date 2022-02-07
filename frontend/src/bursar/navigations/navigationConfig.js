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
        id: "invoice",
        title: "INVOICES",
        type: "collapse",
        icon: <BsGraphUp />,
        children: [
          {
            id: "invoice",
            title: "INVOICES",
            type: "item",
            url: '/bursardashboard/invoices',
            exact: true,
          },
        ],
      },

      {
        id: "fees",
        title: "FEES",
        type: "collapse",
        icon: <BsEnvelopeOpenFill/>,
        children: [
          {
            id: "enquiries",
            title: "FEES",
            type: "item",
            url: '/bursardashboard/fees',
            exact: true,
          },
        ],
      },

    ],
  },
];

export default navigationConfig;
