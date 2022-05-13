import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Leave Application',
    path: '/leaveApplication',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View Leave Details',
    path: '/viewLeave',
    icon: <MdIcons.MdPageview />,
    cName: 'nav-text'
  },
 
];