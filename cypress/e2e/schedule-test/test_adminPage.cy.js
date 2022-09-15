import { LoginPage } from "./class-login-page";

const loging = new LoginPage()


describe('Test login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:7666/login.html')
  })


  it('Schedule proeject login function test', () => {
    loging.enterUsername('exempel@nodehill.com')
    loging.enterPassword('abc123')
    loging.clickLogin()
    cy.visit('http://localhost:7666/admin/')

  })

})
