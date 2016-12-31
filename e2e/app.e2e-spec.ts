import { TodayTest001311216Page } from './app.po';

describe('today-test001311216 App', function() {
  let page: TodayTest001311216Page;

  beforeEach(() => {
    page = new TodayTest001311216Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
