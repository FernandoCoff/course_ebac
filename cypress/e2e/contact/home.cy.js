/// <reference types="cypress" />

describe('Testes para a Home', () =>{
    it('deve adicionar um contato', ()=>{
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('input[type=text]').type('Luiz')
        cy.get('input[type=email]').type('Luiz@example.com')
        cy.get('input[type=tel]').type('33999999999')
        cy.get('button[type=submit]').click()
    })
    it('deve editar um conato', ()=> {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.contains('div.contato','Luiz@example.com').parent().find('button.edit').click()
        cy.get('input[type=text]').type('Luiz Fernando')
        cy.get('.alterar').click()
    })
    it('deve excluir um conato', ()=> {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.contains('div.contato','Luiz@example.com').parent().find('button.delete').click()
    })
})