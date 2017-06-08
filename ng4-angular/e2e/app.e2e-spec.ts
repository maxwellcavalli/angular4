import { Ng4MaterialPage } from './app.po';

describe('ng4-material App', () => {
  let page: Ng4MaterialPage;

  beforeEach(() => {
    page = new Ng4MaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
