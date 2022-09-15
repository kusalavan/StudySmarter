export class LoginPage{

    username_textbox = '#ui-field-2'
    password_textbox = '#ui-field-3'
    login_button = '.actions > .ui-size-large'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
        }
}