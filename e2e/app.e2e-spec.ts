import { JsontestPage } from './app.po';

describe('jsontest App', () => {
  let page: JsontestPage;

  beforeEach(() => {
    page = new JsontestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
