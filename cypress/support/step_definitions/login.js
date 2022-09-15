import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";




Given("A user visit nodehill localhost website", () => {
  cy.visit("http://localhost:7666/login.html");
});

When("A user enters the email", () => {
  cy.get('#email').type('exempel@nodehill.com')

});

And("A user enters the password", () => {
  cy.get('#password').type('abc123')
});

And("A user clicks on the login button", () => {
  cy.get('[type="submit"]').click()
});

Then("The website will show the schedule page", () => {
  cy.url('http://localhost:7666/admin/')
  //cy.get(this.loginpage_clicklogin_textbox).click()

});
