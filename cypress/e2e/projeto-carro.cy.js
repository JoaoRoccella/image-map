describe('Testes E2E para o Projeto Carro', () => {
    // conjunto de testes

    beforeEach(() => { // caso de teste

        cy.visit('http://127.0.0.1:5500/'); // comando de teste

    });

    it('Verifica se a altura do overlay é o mesmo da imagem base', () => {

        cy.get('#imagemBase').should('have.prop', 'clientHeight').then(clientHeight => {

            cy.get('#overlay').invoke('height').then(height => {

                cy.wrap(Math.ceil(height)).should('equal', Math.ceil(clientHeight)); // Aqui é onde acontece o arredondamento da altura (height) para ser igual a altura do cliente (clientHeight)

            });

        });

    });

    it('Verifica se o overlay está oculto', () => {

        cy.get('#overlay').should('have.class', 'oculto').and('not.be.visible');

    });

    it('Verifica se a cor e a transparencia do overlay está correta', () => {

        cy.get('#overlay').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');

    });

    it('Verifica se os cards de informações estão ocultos', () => {

        cy.get('[data-test="divRetrovisorDir"]').should('have.class', 'oculto').and('not.be.visible');

        cy.get('[data-test="divParabrisa"]').should('have.class', 'oculto').and('not.be.visible');

        cy.get('[data-test="divEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');

    });

    it('Verificar se as imagens de estão ocultas', () => {

        cy.get('[data-test="imgSobreposicao"]').should('have.length.of.at.least', 3);

        cy.get('[data-test="imgSobreposicao"]').each(imagem => {

            cy.wrap(imagem).should('have.class', 'oculto').and('not.be.visible');

        });

    });

    it('Verifica se a imagem base é visível', () => {

        cy.get('[data-test="imgBase"]').should('be.visible');

    });

    it('Verifica a estruturado card Parabrisa', () => {

        cy.get('[data-test="imgSobreposicao"]').should('have.length.of.at.least', 3);

        cy.get('[data-test="divParabrisa"]').each(children => {

            cy.wrap(children).should('exist')

        });

    });

    it('Verifica a estruturado card Retrovisor Dir', () => {

        cy.get('[data-test="imgSobreposicao"]').should('have.length.of.at.least', 3);

        cy.get('[data-test="divRetrovisorDir"]').each(children => {

            cy.wrap(children).should('exist')

        });

    });

    it('Verifica a estruturado do card Espelho Retrovisor', () => {

        cy.get('[data-test="imgSobreposicao"]').should('have.length.of.at.least', 3);

        cy.get('[data-test="divEspelhoRetrovisor"]').each(children => {

            cy.wrap(children).should('exist')

        });

    });



});