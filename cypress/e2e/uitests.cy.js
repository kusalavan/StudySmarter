/// <reference types="Cypress" />

import {LoginPage} from './pages/login_page.js'
const loginPage = new LoginPage()

beforeEach(function(){

    cy.visit('http://demo.studysmarter.de/')
        cy.get('.sign-in-link > a').click()
        loginPage.enterUsername('studysmartertest@me.com')
        loginPage.enterPassword('luDRcHki8BI1ywtn')
        loginPage.clickLogin()

})

describe('Create and Delete a Study Set', function(){

    it('Create Study Set', function(){
        
        //cy.get('.left > .ng-star-inserted').should('be.visible')
        cy.get('.full-size-nav > .navbar-items > [href="/studysets"]').click()
        cy.get('.create-button').click()
        cy.get('#text').type('Test Study Set')
        cy.get('.create-subject-button').click()
        cy.get('.subject-title').should('contain', 'Test Study Set')

    })

    it('Delete Study Set', function(){

        cy.get('.full-size-nav > .navbar-items > [href="/studysets"]').click()
        cy.get('.mat-menu-trigger').click()
        cy.get('.mat-menu-content > :nth-child(4)').click()
        cy.get('.ui-color-1').click()
        cy.get('.subject-title').should('not.exist')
    })

})

    

