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
        name: 'Nav_ModelOCR',
        path: '/ModelOCR',
      },
      {
        name: 'Nav_ModelFace',
        path: '/ModelFace',
      },
      {
        name: 'Nav_ModelImg',
        path: '/ModelImg',
      },
      {
        name: 'Nav_ModelSound',
        path: '/ModelSound',
      },
      {
        name: 'Nav_ProjectKL',
        path: '/ProjectKL',
      },
      {
        name: 'Nav_ProjectFraud',
        path: '/ProjectFraud',
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
        name: 'monitor',
        path: '/dashboard/monitor',
      },
      {
        name: 'setting',
        path: '/account/setting',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
