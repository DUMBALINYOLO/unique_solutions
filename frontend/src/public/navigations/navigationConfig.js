import React from 'react';
import { FiAirplay } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";







const navigationConfig = [
  {
    id: "Main",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "HOME",
        type: "item",
        url: "/",
        exact: true,
        icon: <FiHome/>
      },
      {
        id: "about",
        title: "ABOUT US",
        type: "item",
        url: "/about",
        exact: true,
        icon: <FiAirplay/>
      },
      {
        id: "contact",
        title: "CONTACT US",
        type: "item",
        url: "/contact",
        exact: true,
        icon: <FiMail/>
      },
      {
        id: "services",
        title: "OUR SERVICES",
        type: "item",
        url: "/services",
        exact: true,
        icon: <FiLayers/>

      },
      {
        id: "services",
        title: "OUR NEWSLETTER",
        type: "item",
        url: "/blog",
        exact: true,
        icon: <FiMessageCircle/>

      },
    ],
  },
];

export default navigationConfig;
