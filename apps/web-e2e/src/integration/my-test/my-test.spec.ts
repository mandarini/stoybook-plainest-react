describe('web: MyTest component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mytest--primary&knob-name=&knob-age=0&knob-other=false'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to web!');
    });
});
