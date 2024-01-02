describe('Meu primeiro conjunto de testes', () => {
    // conjunto de testes

    it('Visita uma URL', () => { // caso de teste

        cy.visit('http://127.0.0.1:5500/'); // comando de teste

    });

    it('Verifica o para-brisa', function() {
        cy.visit('http://127.0.0.1:5500/');
        cy.get('#overlay').should('be.hidden');
        cy.get('map > [data-target="parabrisa"]').click({force: true});
        cy.get('[src="./img/parabrisa.png"]').should('have.class', 'sobreposicao');
        cy.get('[src="./img/parabrisa.png"]').should('have.attr', 'data-target', 'parabrisa');
        cy.get('[src="./img/parabrisa.png"]').should('be.visible');
        cy.get('#parabrisa > .close').click();
        cy.get('map > [data-target="parabrisa"]').click({force: true});
        cy.get('#parabrisa > h3').should('be.visible');
        cy.get('#parabrisa > .close').should('have.text', '✖');
        cy.get('#parabrisa > .close').should('have.class', 'close');
        cy.get('#parabrisa > .close').should('be.visible');
        cy.get('#parabrisa > .caption').should('have.class', 'caption');
        cy.get('#parabrisa > .caption').should('be.visible');
        cy.get('#parabrisa').should('have.id', 'parabrisa');
        cy.get('#parabrisa').should('have.class', 'data');
        cy.get('#parabrisa').should('be.visible');
        cy.get('#overlay').should('have.id', 'overlay');
        cy.get('#overlay').should('be.visible');

    });

    it('Verifica o retrovisor direito', function() {
        
        cy.visit('http://127.0.0.1:5500/');
        cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
        cy.get('#overlay').should('have.id', 'overlay');
        cy.get('#overlay').should('be.visible');
        cy.get('#retrovisor-dir').should('have.id', 'retrovisor-dir');
        cy.get('#retrovisor-dir').should('have.class', 'data');
        cy.get('#retrovisor-dir').should('be.visible');
        cy.get('#retrovisor-dir > h3').should('be.visible');
        cy.get('#retrovisor-dir > .close').should('have.text', '✖');
        cy.get('#retrovisor-dir > .close').should('have.class', 'close');
        cy.get('#retrovisor-dir > .close').should('be.visible');
        cy.get('#retrovisor-dir > .caption').should('have.class', 'caption');
        cy.get('#retrovisor-dir > .caption').should('be.visible');
        cy.get('[src="./img/retrovisor-dir.png"]').should('have.class', 'sobreposicao');
        cy.get('[src="./img/retrovisor-dir.png"]').should('have.attr', 'data-target', 'retrovisor-dir');
        cy.get('[src="./img/retrovisor-dir.png"]').should('be.visible');
        cy.get('#retrovisor-dir > .close').click();
        
    });
});