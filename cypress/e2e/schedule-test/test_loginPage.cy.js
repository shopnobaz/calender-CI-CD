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

  })

  it.skip('Schedule proeject login function test', () => {
    loging.enterUsername('exempel@nodehill.com')
    loging.enterPassword('abc1234')
    loging.clickLogin()

  })

})



