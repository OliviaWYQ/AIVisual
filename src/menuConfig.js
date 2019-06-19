// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: 'help',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Introduction',
    path: '/Introduction',
    icon: 'home',
    children: [
      {
        name: 'detail',
        path: '/Introduction/detail',
        // icon: 'home',
      },
    ],
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      {
        name: 'monitor',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: 'Nav_select',
    path: '/select',
    icon: 'copy',
    children: [
      {
        name: 'Nav_select',
        path: '/select/db',
        // icon: 'home',
      },
    ],
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: 'basic',
        path: '/table/basic',
        // authority: 'admin',
      },
    ],
  },
  {
    name: 'chart',
    path: '/chart',
    icon: 'chart1',
    children: [
      // {
      //   name: 'basic',
      //   path: '/chart/basic',
      // },
      {
        name: 'general',
        path: '/chart/general',
      },
    ],
  },
  // {
  //   name: '列表页',
  //   path: '/list',
  //   icon: 'copy',
  //   children: [
  //     {
  //       name: 'basic',
  //       path: '/list/basic',
  //     },
  //     // {
  //     //   name: 'general',
  //     //   path: '/list/general',
  //     // },
  //   ],
  // },
  // {
  //   name: 'profile',
  //   path: '/profile',
  //   icon: 'cascades',
  //   children: [
  //     {
  //       name: 'basic',
  //       path: '/profile/basic',
  //     },
  //     // {
  //     //   name: 'terms',
  //     //   path: '/profile/general',
  //     // },
  //   ],
  // },
  // {
  //   name: 'result',
  //   path: '/result',
  //   icon: 'edit2',
  //   children: [
  //     {
  //       name: 'success',
  //       path: '/result/success',
  //     },
  //     {
  //       name: 'fail',
  //       path: '/result/fail',
  //     },
  //   ],
  // },
  {
    name: 'account',
    path: '/account',
    icon: 'person',
    children: [
      {
        name: 'setting',
        path: '/account/setting',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
