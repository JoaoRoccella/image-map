describe('Testes E2E para o Projeto Carro', () => {
    // conjunto de testes

    beforeEach(() => { // caso de teste

        cy.visit('http://127.0.0.1:5500/'); // comando de teste

    });

    it('Testa se 2 é igual a 2', () => {

        expect(2).to.equal(2);
        
    });

});