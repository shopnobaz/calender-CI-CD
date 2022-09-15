Feature: login page
  Feature login page will work depending on the user credentials

  Background: 
    Given A user visit nodehill localhost website

  Scenario: Success Login
    When A user enters the email
    And A user enters the password
    And A user clicks on the login button
    Then The website will show the schedule page