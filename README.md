**Automated Tests**

-------------
**Description:**

This project used Cypress.js to perform automated web application testing. Tests are configured to run automatically on every push or pull request to the main branch using GitHub Actions. Tests were developed and run using Visual Studio Code.

-------------
**What is Cypress?**

Cypress is a modern and high-performance end-to-end testing framework designed to test web applications. It provides an intuitive interface for writing and running tests and integrates easily with modern development tools.

-------------
**Why automated testing?**

Automated testing is essential to ensure the quality and stability of your application. They allow early detection of defects and prevent regressions. By automating your tests, you save time and resources in the long run by ensuring that all critical functionality of your application is working properly.

-------------
**Description of Tests:**

1. Google test (google.spec.js):
This test checks the Google search functionality. Ensures that the results page displays search results correctly.

2. LinkedIn test (linkedin.spec.js):
This test checks the login process on LinkedIn. Ensures that the user can log in correctly and that the correct items are displayed after logging in.

3. SauceDemo test (saucedemo.spec.js):
This test checks the functionality of a shopping site, SauceDemo.

+ First of all, I tested the login by entering the wrong user and password.

+ Then I tested the login with the correct user and password.

+ I tested if the user can add products to the cart.

+ I tested if the user can delete a product from the cart.

+ I tested if the user can access the page with details about a product.

+ I tested if the "back to products" button takes you back to the main page.

+ And the last time I tested the logout function.

------------
**Feedback**

Feedback is always welcome. Feel free to contact me, I would love to know if you notice something that can be done better. Please be nice, this are my first automated tests. 

