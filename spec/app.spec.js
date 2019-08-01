describe('Dashboard', () => {
  const Dashboard = require('../src/pages/Dashboard');
  let dashboard;

  beforeEach(() => {
    dashboard = new Dashboard();
  });

  it('dashboard', () => {
    expect(dashboard).not.toBeUndefined();
  });
});
