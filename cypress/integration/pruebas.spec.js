context('Home', () => {
   beforeEach(() => {
      cy.visit('http://localhost:4200')
    })

// it('should visit home', () => {
//     cy.visit('http://localhost:4200');
// });

// it('Button exists', () => {
//     cy.get('button');
//  });

//  it('Input exists', () => {
//     cy.get('input');
//  });

//  it('Card exists', () =>{
//     cy.get('img');
//  });

//  it('Button select exists', () =>{
//     cy.get('button#select');
//  });

//  it('Text exists', () =>{
//     cy.get('.card-body').find('.card-title');
//  });

//  it('Price exists', () =>{
//     cy.get('.card-body').find('.card-text');
//  });

//  it('Navbar exists', () =>{
//     cy.get('.navbar');
//  });

//  it('Navbar brand exists', () =>{
//     cy.get('.navbar-brand');
//  });

//  it('Navbar link inicio exists', () =>{
//     cy.get('.navbar').find('.nav-link');
//  });

//  it('Button buscar click', () => {
//     cy.get('button#buscar').click();
//  });

//  it('Input text camara', () => {
//     cy.get('input').type("camara");
//     cy.get('button#buscar').click();
//  });

})

context('Carrito', () => {
   beforeEach(() => {
      cy.visit('http://localhost:4200/carrito')
    })
 
    it('should visit home', () => {
      cy.visit('http://localhost:4200/carrito');
    });

    it('Button carrito click', () => {
      cy.get('.list-group-item#carritoButton').click().get('.table');
    });
})