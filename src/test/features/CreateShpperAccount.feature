@negative

Feature: Coyote POC

     Background: Pre Conditions
        Given a user navigates to the application

    Scenario Outline: Get a quote Form Missing data @negative

        When user click on the SignUp for Coyote button
        Then the user fills the signUp form
        And confirmation message is displayed