import { RecipeAppPage } from './app.po';

describe('recipe-app App', () => {
  let page: RecipeAppPage;

  beforeEach(() => {
    page = new RecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
