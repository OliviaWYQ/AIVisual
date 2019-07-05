// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import React from 'react';
import { getRouterData } from './utils/utils';

import Introduction from './pages/Introduction';
// import Select from './pages/Select';
// import Step from './pages/Step';
import ModelOcr from './pages/ModelOcr';
import ModelFace from './pages/ModelFace';
import ProjectKl from './pages/ProjectKl';
import ModelSound from './pages/ModelSound';
import ProjectFraud from './pages/ProjectFraud';
import ModelImg from './pages/ModelImg';
import { asideMenuConfig } from './menuConfig';

const UserLogin = React.lazy(() => import('./pages/UserLogin'));
const UserRegister = React.lazy(() => import('./pages/UserRegister'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Setting = React.lazy(() => import('./pages/Setting'));
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

const routerConfig = [
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/Introduction/detail',
    component: Introduction,
  },
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
    path: '/exception/404',
    component: NotFound,
  },
  {
    path: '/account/setting',
    component: Setting,
  },
  {
    path: '/exception/204',
    component: Empty,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  // {
  //   path: '/select/db',
  //   component: Select,
  // },
  // {
  //   path: '/step',
  //   component: Step,
  // },
  {
    path: '/ModelOCR',
    component: ModelOcr,
  },
  {
    path: '/ModelFace',
    component: ModelFace,
  },
  {
    path: '/ProjectKL',
    component: ProjectKl,
  },
  {
    path: '/ModelSound',
    component: ModelSound,
  },
  {
    path: '/ProjectFraud',
    component: ProjectFraud,
  },
  {
    path: '/ModelImg',
    component: ModelImg,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
