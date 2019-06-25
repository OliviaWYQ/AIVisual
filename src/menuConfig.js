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
    // 平台功能
    name: 'Introduction',
    path: '/Introduction',
    icon: 'home2',
    children: [
      {
        name: 'detail',
        path: '/Introduction/detail',
        // icon: 'home',
      },
    ],
  },
  // { // 控制台
  //   name: 'Dashboard',
  //   path: '/dashboard',
  //   icon: 'home2',
  //   children: [
  //     {
  //       name: 'monitor',
  //       path: '/dashboard/monitor',
  //     },
  //   ],
  // },
  {
    // 算法模型
    name: '表格页',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: 'Nav_ModelOCR',
        path: '/ModelOCR',
        // icon: 'home',
      },
      {
        name: 'Nav_ModelFace',
        path: '/ModelFace',
        // icon: 'home',
      },
    ],
  },
  {
    // 项目分析
    name: 'Nav_select',
    path: '/select',
    icon: 'copy',
    children: [
      {
        name: 'Nav_select',
        path: '/select/db',
        // icon: 'home',
      },
      {
        name: 'Nav_step',
        path: '/step',
        // icon: 'home',
      },
      {
        name: 'general',
        path: '/chart/general',
      },
      {
        name: 'Nav_ProjectKL',
        path: '/ProjectKL',
        // icon: 'home',
      },
    ],
  },
  {
    // 个人中心
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
