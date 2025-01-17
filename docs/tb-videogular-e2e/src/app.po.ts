import { browser, by, element } from 'protractor';

export class NgxVideogularWebsitePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('tb-videogular-root header h1')
    ).getText() as Promise<string>;
  }
}
