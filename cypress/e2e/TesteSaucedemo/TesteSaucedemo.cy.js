describe('Site Saucedemo.com' , () => {  

    // //Test the login with standard user//
    // it('check if you are logged in' , () => {

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();

    //     cy.get('.shopping_cart_link').should('exist');
    // })

   
    
    // //Test the login with wrong user or password//
    // it('check if you have an error message' , () => {
        
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('123456');
    //     cy.get('#login-button').click();

    //     cy.get('.error-button').should('exist');
    // })


    
    // //Test the logout//
    // it('check if you can logout' , () => {  

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#react-burger-menu-btn').click();
    //     cy.get('#logout_sidebar_link').click();
        
    //     cy.get('#login-button').should('exist');
    // })



    // //Test of adding a product to the cart//
    // it('check if you can add a product to the cart' , () => {

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#add-to-cart-sauce-labs-backpack').click();
    //     cy.get('.shopping_cart_link').click();

    //     cy.get('.cart_list').should('exist');
    // })



    // //Test the deleting a product from the cart//
    // it('you can delete a product from the cart' , () => {

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#add-to-cart-sauce-labs-backpack').click();
    //     cy.get('.shopping_cart_link').click();
    //     cy.get('#remove-sauce-labs-backpack').click();

    //     cy.get('#remove-sauce-labs-backpack').should('not.exist');
    // })



    // //Test if you can access the page with the details of a product//
    // it('you can access the details about a product' , () => {

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#item_0_img_link').click();

    //     cy.get('.inventory_details_desc_container').should('exist');
    // })



    // //Test if the "Back to products" button on a product page takes you to the main page//
    // it('check if the button takes you back to the main page' , () => {

    //     cy.visit('https://www.saucedemo.com/');
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    //     cy.get('#item_0_img_link').click();
    //     cy.get('#back-to-products').click();
    
    //     cy.get('.title').should('exist');
    // })
})
