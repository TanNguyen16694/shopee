Feature: Login

  Background: As a User I want to check all scenario of Login feature

  Scenario: Verfiy user can login System with correct UserName and Password
    Given User Access Website
    When User input correct UserName and Password
    Then User can login System Successfully