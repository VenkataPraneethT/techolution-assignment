import { StudentResultBoardPage } from './app.po';

describe('student-result-board App', () => {
  let page: StudentResultBoardPage;

  beforeEach(() => {
    page = new StudentResultBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
