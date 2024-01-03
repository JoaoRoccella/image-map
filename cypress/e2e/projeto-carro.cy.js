describe('testes E2E para o Projeto Carro', () => {

  beforeEach( () => { //caso de testes

    cy.visit('http://127.0.0.1:5500'); //comando de testes

  });

it('Verifica se a altura do overlay é o mesmo da imagem base', () => {

    cy.get('[data-test="divOverlay" > img]').should('have.prop', 'clientHeigth').then(clientHeigth => {

      cy.get('#overlay').invoke('heigth').then(heigth => {
        
        cy.wrap(Math.round(heigth)).should('equal', Math.round(clientHeigth));

      })

    })

});

it('Verifica se o overlay está oculto', () => {
  
  cy.get('#overlay').should('have.class', 'oculto').and('not.be.visible')
  
});

it('Verifica se a cor de transparência do overlay está correta', () => {
    
  cy.get('#overlay').should('have.css', 'background-color', 'rgba(0, 0, 0.533)');

});

it('Verifica se os cards de informações estão ocultos', () => {

  cy.get('.data').each(card =>{

      cy.wrap(card).should('have.class', 'oculto').and('not.be.visible')

  })
    
});

});