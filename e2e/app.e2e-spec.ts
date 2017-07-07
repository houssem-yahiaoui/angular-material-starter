import { AngularMateriaStarterPage } from './app.po';

describe('angular-materia-starter App', () => {
  let page: AngularMateriaStarterPage;

  beforeEach(() => {
    page = new AngularMateriaStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
