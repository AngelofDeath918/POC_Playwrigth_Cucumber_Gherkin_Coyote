@smoke
Feature: Coyote POC

    Scenario Outline: login page
        Given a user navigates to the application
        When user click on the login link
        Then the login page is displayed