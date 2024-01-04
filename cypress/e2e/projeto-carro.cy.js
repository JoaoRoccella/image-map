describe('Testes E2E para o Projeto Carro', () => {
    // conjunto de testes

    beforeEach(() => { // caso de teste

        cy.visit('http://127.0.0.1:8080/'); // comando de teste

    });

    context('Testes para desktop', () => { //Testes para desktop

        beforeEach(() => {

            cy.viewport(1000, 660);

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

        it('Verifica a quantidade minima de cada card de informação', () => {

            cy.get('[data-test="divCard"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se os cards de informações estão ocultos', () => {

            cy.get('[data-test="divCard"]').each(card => {

                cy.wrap(card).should('have.class', 'oculto').and('be.hidden');

            });

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

        it('Verifica a estrutura do rodapé', () => {
            cy.get('[data-test="rodape"]').should('exist', 'a', 'p');

            cy.get('[data-test="ancora"]').invoke('attr', 'href').then(link => {

                cy.request(link).then(resposta => {

                    expect(resposta.status).to.equal(200);

                });

            });

        });

        it('Verifica se a quantidade de cards é a mesma de imagens de sobreposição', () => {

            cy.get('[data-test="divCard"]').then(quantidade => {

                cy.get('[data-test="imgSobreposicao"]').should('have.length', quantidade.length);

            });

        });

    });

    context('Testes para mobile', () => {

        beforeEach(() => {

            cy.viewport(380, 600);

        });

        // it('Verifica se a altura do overlay é o mesmo da imagem base', () => {

        //     cy.get('#imagemBase').should('have.prop', 'clientHeight').then(clientHeight => {

        //         cy.get('#overlay').invoke('height').then(height => {

        //             cy.wrap(Math.ceil(height)).should('equal', Math.ceil(clientHeight)); // Aqui é onde acontece o arredondamento da altura (height) para ser igual a altura do cliente (clientHeight)

        //         });

        //     });

        // });

        it('Verifica se o overlay está oculto', () => {

            cy.get('#overlay').should('have.class', 'oculto').and('not.be.visible');

        });

        it('Verifica se a cor e a transparencia do overlay está correta', () => {

            cy.get('#overlay').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');

        });

        it('Verifica a quantidade minima de cada card de informação', () => {

            cy.get('[data-test="divCard"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se os cards de informações estão ocultos', () => {

            cy.get('[data-test="divCard"]').each(card => {

                cy.wrap(card).should('have.class', 'oculto').and('be.hidden');

            });

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

        it('Verifica a estrutura do rodapé', () => {
            cy.get('[data-test="rodape"]').should('exist', 'a', 'p');

            cy.get('[data-test="ancora"]').invoke('attr', 'href').then(link => {

                cy.request(link).then(resposta => {

                    expect(resposta.status).to.equal(200);

                });

            });

        });

        it('Verifica se a quantidade de cards é a mesma de imagens de sobreposição', () => {

            cy.get('[data-test="divCard"]').then(quantidade => {

                cy.get('[data-test="imgSobreposicao"]').should('have.length', quantidade.length);

            });

        });

    });

});