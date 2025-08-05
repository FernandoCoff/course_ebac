/// <reference types="cypress" />

describe('Testes para a Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Luiz')
        cy.get('input[type="email"]').type('luiz@example.com')
        cy.get('input[type="tel"]').type('33999999999')
        cy.get('button[type="submit"]').click()
        cy.contains('.contato', 'luiz@example.com').should('be.visible')
    })

    it('deve editar um contato', () => {
        cy.contains('.contato', 'luiz@example.com').find('.edit').click()
        cy.get('input[type="text"]').clear().type('Luiz Fernando')
        cy.get('input[type="email"]').clear().type('luiz.fernando@example.com')
        cy.get('.alterar').click()
        cy.contains('.contato', 'Luiz Fernando').should('be.visible')
    })

    it('deve excluir um conato', () => {
        cy.contains('.contato', 'luiz.fernando@example.com').find('.delete').click()
        cy.contains('.contato', 'luiz.fernando@example.com').should('not.exist')
    })
})