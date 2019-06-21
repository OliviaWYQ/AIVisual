// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import React from 'react';
import { getRouterData } from './utils/utils';

import Introduction from './pages/Introduction';
import Select from './pages/Select';
import Step from './pages/Step';
// import Export from './pages/Export';
import ModelOcr from './pages/ModelOcr';
import ModelFace from './pages/ModelFace';
import { asideMenuConfig } from './menuConfig';

const UserLogin = React.lazy(() => import('./pages/UserLogin'));
const UserRegister = React.lazy(() => import('./pages/UserRegister'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Charts = React.lazy(() => import('./pages/Charts'));
const BasicCharts = React.lazy(() => import('./pages/BasicCharts'));
// const Terms = React.lazy(() => import('./pages/Terms'));
// const Result = React.lazy(() => import('./pages/Result'));
const BasicList = React.lazy(() => import('./pages/BasicList'));
// const ProjectList = React.lazy(() => import('./pages/ProjectList'));
const BasicTable = React.lazy(() => import('./pages/BasicTable'));
// const GeneralTable = React.lazy(() => import('./pages/'));
// const Profile = React.lazy(() => import('./pages/Profile'));
const Setting = React.lazy(() => import('./pages/Setting'));
// const Fail = React.lazy(() => import('./pages/Fail'));
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

const routerConfig = [
  // {
  //   path: '/profile/general',
  //   component: Terms,
  // },
  // {
  //   path: '/table/general',
  //   component: ,
  // },
  {
    path: '/account/setting',
    component: Setting,
  },
  {
    path: '/exception/204',
    component: Empty,
  },
  {
    path: '/chart/basic',
    component: BasicCharts,
  },
  {
    path: '/list/basic',
    component: BasicList,
  },
  // {
  //   path: '/list/general',
  //   component: ProjectList,
  // },
  {
    path: '/table/basic',
    component: BasicTable,
  },
  // {
  //   path: '/profile/basic',
  //   component: Profile,
  // },
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/exception/500',
    component: ServerError,
  },
  {
    path: '/exception/403',
    component: Forbidden,
  },
  {
    path: '/chart/general',
    component: Charts,
  },
  {
    path: '/exception/404',
    component: NotFound,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/Introduction/detail',
    component: Introduction,
  },
  {
    path: '/select/db',
    component: Select,
  },
  {
    path: '/step',
    component: Step,
  },
  {
    path: '/ModelOCR',
    component: ModelOcr,
  },
  {
    path: '/ModelFace',
    component: ModelFace,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
