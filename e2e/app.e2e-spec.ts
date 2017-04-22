import { BootcampFunctionsSitePage } from './app.po';

describe('bootcamp-functions-site App', () => {
  let page: BootcampFunctionsSitePage;

  beforeEach(() => {
    page = new BootcampFunctionsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
