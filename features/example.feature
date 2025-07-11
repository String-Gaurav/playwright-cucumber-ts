Feature: Google Search

  Scenario: Open Google and search Playwright
    Given I launch the browser
    When I go to "https://www.google.com"
    Then the title should contain "Google"
     Then close the browser "test"

  # Scenario: Open Google and search Playwright
  #   Given I launch the browser
  #   When I go to "https://www.bing.com"
  #   Then the title should contain "Bing"
  #    Then close the browser