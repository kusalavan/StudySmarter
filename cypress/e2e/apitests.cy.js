/// <reference types="Cypress" />

//Request for Sign Up a new user and Sign in and confirm

    it('Sign Up, Sign In and Confirm', function(){
        cy.request('POST', 'https://be.dev.studysmarter-test.de/users/', {
            "email": "studysmartertest@me.com",
            "platform": "web",
            "language": "en",
            "signup_location": "webapp",
            "delayed_confirmation_possible": true,
            "university": null,
            "course_of_studies": null,
            "password": "luDRcHki8BI1ywtn",
            "tracking_number": 7447
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.user.email).to.eq('studysmartertest@me.com')
            var userid = response.body.id
            cy.request('POST', 'https://be.dev.studysmarter-test.de/api-token-auth/', {
            "username":"studysmartertest@me.com","password":"luDRcHki8BI1ywtn"
                        }).then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.id).to.eq(userid)
             })  
        })

    })

