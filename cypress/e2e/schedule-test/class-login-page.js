
export class LoginPage {


  loginpage_username_textbox = '#email'   //css locator -class variable
  loginpage_password_textbox = '#password'   //css locator 
  loginpage_clicklogin_textbox = '[type="submit"]'  //css locator

  enterUsername(email) {
    cy.get(this.loginpage_username_textbox).type(email)

  }

  enterPassword(password) {

    cy.get(this.loginpage_password_textbox).type(password)
  }

  clickLogin() {
    cy.get(this.loginpage_clicklogin_textbox).click()

  }


}














