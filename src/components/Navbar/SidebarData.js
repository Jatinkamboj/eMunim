import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'DashBoard',
    path: '/',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <FaIcons.FaExchangeAlt />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Reports',
  //   path: '/reports',
  //   icon: <FiIcons.FiBarChart2 />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Exchange',
    path: '/currencyExchange',
    icon: <BsIcons.BsCurrencyExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Setings',
    path: '/settings',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text'
  },
  
];