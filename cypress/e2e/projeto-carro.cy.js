describe('Testes E2E para o Projeto Carro', () => {

    beforeEach(() => {

        cy.visit('http://127.0.0.1:8080/');

    });

    context('Testes para Desktop (padrão)', () => {

        beforeEach(() => {
            
            cy.viewport(1000, 660);

        });

        it('Verifica se a altura do overlay é o mesmo da imagem base', () => {

            cy.get('[data-test="imgBase"]').should('have.prop', 'clientHeight').then(clientHeight => {

                cy.get('[data-test="overlay"]').invoke('height').then(height => {

                    cy.wrap(Math.round(height)).should('equal', Math.round(clientHeight));

                });

            });

        });

        it('Verifica se o overlay está oculto', () => {

            cy.get('[data-test="overlay"]').should('have.class', 'oculto').and('not.be.visible');

        });

        it('Verifica se a cor e transparência do overlay está correta', () => {

            cy.get('[data-test="overlay"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');

        });

        it('Verifica a quantidade mínima de cards de informação', () => {

            cy.get('[data-test="cardInfo"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se os cards de informações estão ocultos', () => {

            cy.get('[data-test="cardInfo"]').each(card => {

                cy.wrap(card).should('have.class', 'oculto').and('be.hidden');

            });

        });

        it('Verifica a quantidade mínima de imagens de sopreposição', () => {

            cy.get('[data-test="imagemSobreposicao"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se as imagens de destaque estão ocultas', () => {

            cy.get('[data-test="imagemSobreposicao"]').each(imagem => {

                cy.wrap(imagem).should('have.class', 'oculto').and('not.be.visible');

            });

        });

        it('Verifica se a imagem base é visível', () => {

            cy.get('[data-test="imgBase"]').should('be.visible');

        });

        it('Verifica a estrutura dos cards de informação', () => {

            cy.get('[data-test="cardInfo"]').each(card => {

                cy.wrap(card).children('span.close').should('exist');
                cy.wrap(card).children('h3').should('exist');
                cy.wrap(card).children('p').should('exist');
                cy.wrap(card).children('span.caption').should('exist');

            });

        });

        it('Verifica a estrutura do rodapé', () => {

            cy.get('[data-test="rodape"]').should('exist');
            cy.get('[data-test="rodape"]').children('p').should('exist');
            cy.get('[data-test="rodape"]').children('p').children('a').should('exist');

            cy.get('[data-test="repo"]').invoke('attr', 'href').then(href => {

                cy.request(href).then(resposta => {

                    expect(resposta.status).to.equal(200);

                });

            });

        });

        it('Verifica se a quantidade de cards e imagens é igual', () => {

            cy.get('[data-test="cardInfo"]').then(cards => {

                cy.get('[data-test="imagemSobreposicao"]').should('have.length', cards.length);

            })

        });


    });

    context('Testes para Mobile (380 x 600)', () => {

        beforeEach(() => {

            cy.viewport(380, 600);

        });

        // it('Verifica se a altura do overlay é o mesmo da imagem base', () => {

        //     cy.get('[data-test="imgBase"]').should('have.prop', 'clientHeight').then(clientHeight => {

        //         cy.get('[data-test="overlay"]').invoke('height').then(height => {

        //             cy.wrap(Math.round(height)).should('equal', Math.round(clientHeight));

        //         });

        //     });

        // });

        it('Verifica se o overlay está oculto', () => {

            cy.get('[data-test="overlay"]').should('have.class', 'oculto').and('not.be.visible');

        });

        it('Verifica se a cor e transparência do overlay está correta', () => {

            cy.get('[data-test="overlay"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');

        });

        it('Verifica a quantidade mínima de cards de informação', () => {

            cy.get('[data-test="cardInfo"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se os cards de informações estão ocultos', () => {

            cy.get('[data-test="cardInfo"]').each(card => {

                cy.wrap(card).should('have.class', 'oculto').and('be.hidden');

            });

        });

        it('Verifica a quantidade mínima de imagens de sopreposição', () => {

            cy.get('[data-test="imagemSobreposicao"]').should('have.length.of.at.least', 3);

        });

        it('Verifica se as imagens de destaque estão ocultas', () => {

            cy.get('[data-test="imagemSobreposicao"]').each(imagem => {

                cy.wrap(imagem).should('have.class', 'oculto').and('not.be.visible');

            });

        });

        it('Verifica se a imagem base é visível', () => {

            cy.get('[data-test="imgBase"]').should('be.visible');

        });

        it('Verifica a estrutura dos cards de informação', () => {

            cy.get('[data-test="cardInfo"]').each(card => {

                cy.wrap(card).children('span.close').should('exist');
                cy.wrap(card).children('h3').should('exist');
                cy.wrap(card).children('p').should('exist');
                cy.wrap(card).children('span.caption').should('exist');

            });

        });

        it('Verifica a estrutura do rodapé', () => {

            cy.get('[data-test="rodape"]').should('exist');
            cy.get('[data-test="rodape"]').children('p').should('exist');
            cy.get('[data-test="rodape"]').children('p').children('a').should('exist');

            cy.get('[data-test="repo"]').invoke('attr', 'href').then(link => {

                cy.request(link).then(resposta => {

                    expect(resposta.status).to.equal(200);

                });

            });

        });

        it('Verifica se a quantidade de cards e imagens é igual', () => {

            cy.get('[data-test="cardInfo"]').then(cards => {

                cy.get('[data-test="imagemSobreposicao"]').should('have.length', cards.length);

            })

        });

        // it('Verifica se o espelho é clicável na viewport', () => {


        //     cy.get('area[data-target="espelho-retrovisor"]').invoke('attr', 'coords').then(coords => {

        //         const [x, y] = coords.split(',').map(coord => parseInt(coord.trim(), 10));

        //         expect(x).to.be.at.most(380);

        //         expect(y).to.be.at.most(600);

        //     });

        // });

        it('Verifica se o parabrisa é clicável na viewport', () => {


            cy.get('area[data-target="parabrisa"]').invoke('attr', 'coords').then(coords => {

                const [x, y] = coords.split(',').map(coord => parseInt(coord.trim(), 10));

                expect(x).to.be.at.most(480);

                expect(y).to.be.at.most(720);

            });

        });

    });

});