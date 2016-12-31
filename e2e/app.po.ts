import { browser, element, by } from 'protractor';

export class TodayTest001311216Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
